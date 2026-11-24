import { useCallback, useEffect, useState } from 'react';
import {
  FALLBACK_GITHUB_REPOS,
  FALLBACK_GITHUB_USER,
  GITHUB_USERNAME,
} from '../data/portfolioData';
import { GitHubRepo, GitHubUser } from '../types/portfolio';

const CACHE_KEY = 'naoupal_github_cache_v1';
const CACHE_TTL_MS = 10 * 60 * 1000;

interface CachedPayload {
  user: GitHubUser;
  repos: GitHubRepo[];
  fetchedAt: number;
}

export function useGitHubData() {
  const [user, setUser] = useState<GitHubUser>(FALLBACK_GITHUB_USER);
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_GITHUB_REPOS);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchFromGitHub = useCallback(async (force = false) => {
    setLoading(true);
    setError(null);

    if (!force) {
      try {
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (raw) {
          const parsed: CachedPayload = JSON.parse(raw);
          if (Date.now() - parsed.fetchedAt < CACHE_TTL_MS && Array.isArray(parsed.repos)) {
            setUser(parsed.user);
            setRepos(parsed.repos);
            setIsLive(true);
            setLastSyncedAt(new Date(parsed.fetchedAt).toISOString());
            setLoading(false);
            return;
          }
        }
      } catch {
        // Ignore storage read errors
      }
    }

    try {
      const headers: HeadersInit = {
        Accept: 'application/vnd.github+json',
      };

      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
        fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          { headers }
        ),
      ]);

      if (!userRes.ok || !reposRes.ok) {
        throw new Error(`GitHub API returned ${userRes.status}/${reposRes.status}`);
      }

      const [userData, reposData]: [GitHubUser, GitHubRepo[]] = await Promise.all([
        userRes.json(),
        reposRes.json(),
      ]);

      const cleanedRepos = reposData
        .filter((r) => !r.archived)
        .sort(
          (a, b) =>
            new Date(b.pushed_at || b.updated_at).getTime() -
            new Date(a.pushed_at || a.updated_at).getTime()
        );

      const now = Date.now();
      setUser(userData);
      setRepos(cleanedRepos.length > 0 ? cleanedRepos : FALLBACK_GITHUB_REPOS);
      setIsLive(true);
      setLastSyncedAt(new Date(now).toISOString());

      try {
        const payload: CachedPayload = {
          user: userData,
          repos: cleanedRepos,
          fetchedAt: now,
        };
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(payload));
      } catch {
        // Ignore storage quota errors
      }
    } catch (err) {
      setIsLive(false);
      setError(err instanceof Error ? err.message : 'Unable to reach GitHub API');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFromGitHub(false);
  }, [fetchFromGitHub]);

  return {
    user,
    repos,
    loading,
    isLive,
    lastSyncedAt,
    error,
    refresh: () => fetchFromGitHub(true),
  };
}

import { useEffect } from 'react';
import { BLOG_POSTS } from '../data/portfolioData';
import { translations } from '../data/translations';
import { Language, RoutePath } from '../types/portfolio';

function setMetaTag(selector: string, attrName: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonicalLink(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export function useSeo(route: RoutePath, lang: Language) {
  useEffect(() => {
    const t = translations[lang].seo;
    const origin = window.location.origin;
    const path = window.location.pathname || '/';
    const canonicalUrl = `${origin}${path}`;

    let title = t.homeTitle;
    let description = t.homeDesc;
    let ogType = 'website';

    const activePost =
      route.page === 'blog' && route.slug
        ? BLOG_POSTS.find((p) => p.slug === route.slug)
        : undefined;

    if (route.page === 'about') {
      title = t.aboutTitle;
      description = t.aboutDesc;
    } else if (route.page === 'projects') {
      title = t.projectsTitle;
      description = t.projectsDesc;
    } else if (route.page === 'blog') {
      if (activePost) {
        title = `${activePost.title[lang]} | Naufal Atmaja`;
        description = activePost.excerpt[lang];
        ogType = 'article';
      } else {
        title = t.blogTitle;
        description = t.blogDesc;
      }
    } else if (route.page === 'contact') {
      title = t.contactTitle;
      description = t.contactDesc;
    }

    document.documentElement.lang = lang;
    document.title = title;

    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag(
      'meta[property="og:locale"]',
      'property',
      'og:locale',
      lang === 'id' ? 'id_ID' : 'en_US'
    );
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setCanonicalLink(canonicalUrl);

    const personEntity = {
      '@type': 'Person',
      name: 'Naufal Atmaja Faadihilah',
      alternateName: 'Naoupal',
      url: origin,
      sameAs: [
        'https://github.com/Naoupal',
        'https://www.linkedin.com/in/naufalatmajafaadihilah/',
        'https://www.instagram.com/naoupal_',
      ],
      jobTitle: 'Data Scientist & Machine Learning Engineer',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universitas Amikom Yogyakarta',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sleman',
        addressRegion: 'DI Yogyakarta',
        addressCountry: 'ID',
      },
    };

    let jsonLd: Record<string, unknown>;

    if (activePost) {
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: activePost.title[lang],
        description: activePost.excerpt[lang],
        datePublished: activePost.publishedAt,
        inLanguage: lang,
        author: personEntity,
        mainEntityOfPage: canonicalUrl,
      };
    } else if (route.page === 'blog') {
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: title,
        description,
        inLanguage: lang,
        author: personEntity,
        url: canonicalUrl,
      };
    } else if (route.page === 'projects') {
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        description,
        inLanguage: lang,
        about: personEntity,
        url: canonicalUrl,
      };
    } else {
      jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          personEntity,
          {
            '@type': 'WebSite',
            name: 'Naufal Atmaja Portfolio',
            url: origin,
            inLanguage: [lang],
            description,
          },
        ],
      };
    }

    let script = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'dynamic-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [route, lang]);
}

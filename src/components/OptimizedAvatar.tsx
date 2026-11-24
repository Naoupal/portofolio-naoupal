import React, { useState } from 'react';

interface OptimizedAvatarProps {
  src: string;
  alt: string;
  size?: number;
  priority?: boolean;
  className?: string;
}

export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = ({
  src,
  alt,
  size = 400,
  priority = false,
  className = '',
}) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const optimizedUrl = src.includes('avatars.githubusercontent.com')
    ? `${src}${src.includes('?') ? '&' : '?'}s=${size}`
    : src;

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 font-display text-3xl font-bold text-slate-700 dark:from-slate-800 dark:to-slate-900 dark:text-blue-400 ${className}`}
      >
        NA
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-200 dark:bg-slate-900 ${className}`}>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-800/80"
        />
      )}
      <img
        src={optimizedUrl}
        alt={alt}
        width={size}
        height={size}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

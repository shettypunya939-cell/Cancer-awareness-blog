import { useState, useEffect, useCallback } from 'react';

export type Route =
  | { type: 'home' }
  | { type: 'article'; slug: string }
  | { type: 'topic'; category: string }
  | { type: 'quiz' }
  | { type: 'about' }
  | { type: 'disclaimer' };

export function parsePath(pathname: string): Route {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  if (cleanPath === '/') {
    return { type: 'home' };
  }

  if (cleanPath.startsWith('/articles/')) {
    const slug = cleanPath.replace('/articles/', '');
    return { type: 'article', slug };
  }

  if (cleanPath.startsWith('/topics/')) {
    const categoryEncoded = cleanPath.replace('/topics/', '');
    const category = decodeURIComponent(categoryEncoded).replace(/-/g, ' ');
    return { type: 'topic', category };
  }

  if (cleanPath === '/quiz') {
    return { type: 'quiz' };
  }

  if (cleanPath === '/about') {
    return { type: 'about' };
  }

  if (cleanPath === '/disclaimer') {
    return { type: 'disclaimer' };
  }

  return { type: 'home' };
}

export function navigate(url: string, replace = false) {
  if (replace) {
    window.history.replaceState({}, '', url);
  } else {
    window.history.pushState({}, '', url);
  }
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() => parsePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parsePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const goTo = useCallback((url: string) => {
    navigate(url);
  }, []);

  return { route, goTo };
}

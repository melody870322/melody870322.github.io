import en from './en';
import zh from './zh';

const translations = { en, zh } as const;

export type Locale = keyof typeof translations;
export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'zh'];

export function t(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment === 'zh') return 'zh';
  return 'en';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/(en|zh)/, '').replace(/^\/+/, '/') || '/';
  if (locale === defaultLocale) return cleanPath;
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

export function getSwitchedLocalePath(currentPath: string, targetLocale: Locale): string {
  const cleanPath = currentPath.replace(/^\/(en|zh)/, '').replace(/^\/+/, '/') || '/';
  if (targetLocale === defaultLocale) return cleanPath;
  return `/${targetLocale}${cleanPath === '/' ? '' : cleanPath}`;
}

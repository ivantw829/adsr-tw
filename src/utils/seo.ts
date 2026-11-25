import { toAbsoluteUrl } from '@/utils/url';

export const SITE_SEO = {
  siteName: '捍衛全台學權行動 ADSR',
  alternateName: 'Action to Defend the Student Rights in Taiwan',
  defaultDescription:
    'ADSR 捍衛全台學權行動，致力於學生權益、教育改革、反對威權，推動台灣學生運動。全台學生團結反抗，守護自由與多元民主。',
  defaultOgImage: '/og/home.png',
  defaultOgImageAlt: '捍衛全台學權行動 ADSR — 全台學生，絕不容許自由倒退！',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  themeColor: '#dc2626',
  locale: 'zh_TW',
  inLanguage: 'zh-TW',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61576959986789',
    'https://www.instagram.com/adsr_taiwan',
    'https://www.threads.net/@adsr_taiwan',
  ],
} as const;

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface ArticleMeta {
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function getOrgId(site?: URL): string {
  return `${toAbsoluteUrl('/', site)}#organization`;
}

export function getWebsiteId(site?: URL): string {
  return `${toAbsoluteUrl('/', site)}#website`;
}

export function buildBaseGraph(site?: URL): Array<Record<string, unknown>> {
  const homeUrl = toAbsoluteUrl('/', site);
  const orgId = getOrgId(site);
  const websiteId = getWebsiteId(site);

  return [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: SITE_SEO.siteName,
      alternateName: SITE_SEO.alternateName,
      url: homeUrl,
      logo: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl('/assets/icon-512.png', site),
        width: 512,
        height: 512,
      },
      image: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl(SITE_SEO.defaultOgImage, site),
        width: SITE_SEO.ogImageWidth,
        height: SITE_SEO.ogImageHeight,
      },
      sameAs: [...SITE_SEO.sameAs],
      areaServed: {
        '@type': 'Country',
        name: 'Taiwan',
      },
      description: SITE_SEO.defaultDescription,
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: homeUrl,
      name: SITE_SEO.siteName,
      alternateName: SITE_SEO.alternateName,
      description: SITE_SEO.defaultDescription,
      inLanguage: SITE_SEO.inLanguage,
      publisher: { '@id': orgId },
    },
  ];
}

export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
  site?: URL
): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.href, site),
    })),
  };
}

export function buildWebPageJsonLd(options: {
  type?: 'WebPage' | 'CollectionPage' | 'ProfilePage';
  name: string;
  description: string;
  url: string;
  dateModified?: string;
  mainEntity?: Record<string, unknown>;
  site?: URL;
}): Record<string, unknown> {
  const { type = 'WebPage', name, description, url, dateModified, mainEntity, site } = options;
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: SITE_SEO.inLanguage,
    isPartOf: { '@id': getWebsiteId(site) },
    about: { '@id': getOrgId(site) },
    ...(dateModified ? { dateModified } : {}),
    ...(mainEntity ? { mainEntity } : {}),
  };
}

export function buildArticleJsonLd(options: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  section: string;
  tags?: string[];
  imageUrl: string;
  wordCount?: number;
  site?: URL;
}): Record<string, unknown> {
  const {
    title,
    description,
    url,
    datePublished,
    dateModified,
    author,
    section,
    tags,
    imageUrl,
    wordCount,
    site,
  } = options;

  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    articleSection: section,
    ...(tags && tags.length > 0 ? { keywords: tags.join(', ') } : {}),
    ...(typeof wordCount === 'number' && wordCount > 0 ? { wordCount } : {}),
    author: {
      '@type': 'Organization',
      name: author,
      url: toAbsoluteUrl('/', site),
    },
    publisher: { '@id': getOrgId(site) },
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: SITE_SEO.ogImageWidth,
      height: SITE_SEO.ogImageHeight,
    },
    inLanguage: SITE_SEO.inLanguage,
  };
}

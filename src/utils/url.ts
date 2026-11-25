const rawBase = import.meta.env.BASE_URL || '/';
const normalizedBase = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

/**
 * 將站內相對路徑加上 Astro 設定的 base prefix（例如 /adsr-tw）
 */
export function withBase(path: string): string {
  if (!path) return `${normalizedBase}/`;
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${cleanPath}`;
}

/**
 * 判斷目前 pathname 是否對應指定目標路由
 */
export function isActivePath(currentPathname: string, targetPath: string): boolean {
  const normalize = (p: string) => {
    const stripped = p.replace(/\/+$/, '') || '/';
    return stripped;
  };
  const current = normalize(currentPathname);
  const target = normalize(withBase(targetPath));

  if (targetPath === '/' || targetPath === '') {
    return current === target;
  }
  return current === target || current.startsWith(`${target}/`);
}

/**
 * 產生完整絕對網址（供 OG / Canonical / JSON-LD 使用）
 */
export function toAbsoluteUrl(path: string, site?: URL): string {
  const baseOrigin = site ? site.origin : 'https://adsr.asdtw.org';
  if (/^https?:/.test(path)) return path;
  return `${baseOrigin}${withBase(path)}`;
}

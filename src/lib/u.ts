// Prefix any path with the deployment base so links work on github.io/<repo>/
export const u = (p: string) => (import.meta.env.BASE_URL.replace(/\/$/, '') + p).replace(/\/{2,}/g, '/');
export const fmt = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

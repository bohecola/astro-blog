/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GISCUS_USERNAME: string;
  readonly PUBLIC_GISCUS_REPO: string;
  readonly PUBLIC_GISCUS_REPO_ID: string;
  readonly PUBLIC_GISCUS_CATEGORY: string;
  readonly PUBLIC_GISCUS_CATEGORY_ID: string;

  readonly ALGOLIA_APP_ID: string;
  readonly ALGOLIA_APP_KEY: string;
  readonly ALGOLIA_INDEX_NAME: string;
  
  readonly GA4ID: string;
  // 更多环境变量…
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
/** 声明 vite 环境变量的类型（如果未声明则默认是 any） */
declare interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_BASE_API: string;
  readonly VITE_ROUTER_HISTORY: "hash" | "html5";
  readonly VITE_PUBLIC_PATH: string;
}

declare module "zion-mdapi";

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

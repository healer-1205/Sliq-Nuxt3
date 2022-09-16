import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "E:/project/2022-09/sliq.app-nuxt3-template/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
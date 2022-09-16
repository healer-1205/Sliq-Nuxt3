import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "E:/project/2022-09/sliq.app-nuxt3-template/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
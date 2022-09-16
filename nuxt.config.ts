// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        title: 'Sliq.app',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    intlify: {
        vueI18n: {
            locales: [
                {
                    name: 'English',
                    code: 'en',
                    iso: 'en-US',
                    file: 'en-US.js'
                },
                {
                    name: 'Ελληνικά',
                    code: 'el',
                    iso: 'el',
                    file: 'el.js'
                }
            ],
            lazy: true,
            parsePages: false,
            nuxtI18n: false,
            skipSettingLocaleOnNavigate: true,
            strategy: 'no_prefix',
            langDir: 'lang/',
            detectBrowserLanguage: {
                useCookie: true,
                cookieKey: 'i18n_redirected',
                redirectOn: 'root',  // recommended
            },
            defaultLocale: 'en',
            vueI18n: {
                fallbackLocale: 'en'
            }
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@intlify/nuxt3'
    ]
})

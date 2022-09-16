import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import gr from "../locales/gr.json";

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: "en",
        messages: {
            en,
            gr,
        },
    });

    vueApp.use(i18n);
});

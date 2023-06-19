// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css', '~/assets/css/main.css'],
    build: {
        transpile: ['vuetify'],
    },
    plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],

})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-gtag'
    ],
    app: {
        head: {
            title: 'Alternative RNA Splicing',
        },
    },
    gtag: {
        id: 'G-QNLZ5NY7HH'
    }
})
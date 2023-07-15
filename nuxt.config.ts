// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    // "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  pinia: {
    autoImports: ["defineStore"],
  },
  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    public: {
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      //including stripe like <script src="https://js.stripe.com/v3/"></script>
      script: [
        {
          src: "https://js.stripe.com/v3/",
          // async: true,
          defer: true,
        },
      ],
    },
  },
});

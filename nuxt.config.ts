import { resolve } from 'node:path';
import { fileURLToPath } from "node:url";

const layerDir = resolve(fileURLToPath(import.meta.url), '..');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  alias: {
    '@app': layerDir + '/app',
  },
  modules: [
    layerDir + '/module',
  ],
  vite: {
    optimizeDeps: {
      noDiscovery: true,
    }
  }
})

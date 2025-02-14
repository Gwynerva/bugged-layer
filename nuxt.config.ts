import { resolve } from 'node:path';
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  $meta: {
    name: 'bugged-layer',
  },
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
})

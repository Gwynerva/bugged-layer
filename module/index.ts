import { addTemplate, createResolver, defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: { name: "My Layer Module", configKey: "myLayerModule" },
  async setup(options, nuxt) {
    console.log('Hello from My Layer Module!');
    const resolver = createResolver(import.meta.url);

    addTemplate({
      filename: '#mylayer/config.ts',
      write: true,
      getContents: () => `
            export default { answer: 42 };
        `,
    });

    const alias = nuxt.options.alias ||= {};
    alias['#mylayer'] = await resolver.resolvePath('#build/#mylayer/config.ts');
  },
});

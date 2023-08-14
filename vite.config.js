import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: 'resources/ts/types/components.d.ts',
      dirs: ['resources/ts/components'],
    }),
    AutoImport({
      dts: 'resources/ts/types/auto-imports.d.ts',
      dirs: ['resources/ts/composables'],
      imports: [
        'vue',
        {
          'ziggy-js': [['default', 'route']],
        }
      ],
    }),
    laravel({
      input: ['resources/ts/app.ts'],
      refresh: true,
    }),
  ],
});

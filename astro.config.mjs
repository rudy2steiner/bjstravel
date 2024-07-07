import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.bjs-travel.com/', // Write here your website url
    markdown: {
        remarkPlugins: [remarkReadingTime],
        drafts: true,
        shikiConfig: {
            theme: 'material-theme-palenight',
            wrap: true
        }
    },
    public: '/src/assets/images/',
    buildOptions: {
        out: 'dist'
    },
//     output: 'server',
    integrations: [
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                theme: 'material-theme-palenight',
                wrap: true
            },
            drafts: true
        }),
        sitemap(),
        tailwind()
    ]
//     ,adapter: vercel({
//           webAnalytics: {
//             enabled: true,
//           },
//     })
})

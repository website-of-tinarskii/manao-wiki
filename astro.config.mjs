// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Manao',
      defaultLocale: 'th',
      locales: {
        en: {
          label: 'English',
        },
        th: {
          label: 'ภาษาไทย',
        },
      },
      customCss: [
        // Fontsource files for to regular and semi-bold font weights.
        './src/styles/custom.css',
        '@fontsource/mitr/400.css',
        '@fontsource/mitr/600.css',
        '@fontsource/sarabun/400.css',
        '@fontsource/sarabun/600.css',
      ],
      social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/tinarskii/manao'}],
      sidebar: [
        {
          label: 'Guides',
          translations: {
            th: "คู่มือ"
          },
          items: [
            {
              label: 'Getting Started',
              translations: {
                th: "มาเริ่มกันเถอะ"
              },
              slug: 'guides/00-getting-started'
            },
            {
              label: 'Retrieving Client id and Secrets from Twitch',
              translations: {
                th: "รับไคล์แอนต์ไอดีและซีเครทจากทวิช"
              },
              slug: 'guides/01-retrieve-client-id-and-secrets-from-twitch'
            },
            {
              label: 'Project Installation',
              translations: {
                th: "ติดตั้งโปรเจกต์"
              },
              slug: 'guides/02-project-installation'
            },
            {
              label: 'Setting up Manao',
              translations: {
                th: "ตั้งค่ามะนาว"
              },
              slug: 'guides/03-setting-up-manao'
            },
            {
              label: 'Using ManaoWeb',
              translations: {
                th: "เริ่มใช้งานมะนาวเว็บ"
              },
              slug: 'guides/04-using-manaoweb'
            },
            {
              label: 'Adding Overlays in OBS',
              translations: {
                th: "เพิ่มโอเวอร์เลย์ใน OBS"
              },
              slug: 'guides/05-adding-overlays-in-obs'
            },
            {
              label: 'Linking Channel Points to Soundboard',
              translations: {
                th: "ลิงก์แต้มช่องกับซาวด์บอร์ด"
              },
              slug: 'guides/06-linking-channel-points-to-soundboard'
            },
            {
              label: 'Adding Custom Replies',
              translations: {
                th: "เพิ่มข้อความตอบกลับอัตโนมัติ"
              },
              slug: 'guides/07-adding-custom-replies'
            },
            {
              label: 'Writing your First Custom Command',
              translations: {
                th: "เขียนคำสั่งแรก"
              },
              slug: 'guides/08-writing-your-first-custom-command'
            },
          ],
        },
        {
          label: 'Discord Integration',
          translations: {
            th: "มะนาวกับดิสคอร์ด"
          },
          items: [
            {
            label: 'Getting Started',
            translations: {
              th: "มาเริ่มกันเถอะ"
            },
            slug: 'discord/00-getting-started'
            },
            {
              label: "Retrieve Discord Credentials",
              translations: {
                th: "รับโทเค็นและไอดีไคล์เอนต์ของบอต"
              },
              slug: 'discord/01-retrieve-discord-credentials'
            },
            {
              label: "Making the Bot Online",
              translations: {
                th: "ทำให้บอตออนไลน์"
              },
              slug: 'discord/02-making-the-bot-online'
            }
          ]
        }
      ],
    }),
  ],
});

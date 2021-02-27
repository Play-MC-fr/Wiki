const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Guide',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#4d698e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "https://play-mc.fr/img/logotext3_red.png",
    repo: '',
    searchPlaceholder: 'Rechercher',
    editLinks: false,
    docsDir: 'src',
    editLinkText: 'Editer cette page',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: 'https://play-mc.fr',
      },
      {
        text: 'Guide',
        link: '/',
      },
      {
        text: 'Forum',
        link: 'https://play-mc.fr/forum'
      },
      {
        text: 'Discord',
        link: 'http://discord.play-mc.fr'
      },
      {
        text: 'Partenaires',
        items: [
          { text: 'mtxServ', link: 'https://mtxserv.com/fr/' },
          { text: 'Minecraft-France', link: 'https://www.minecraft-france.fr/' },
          { text: 'Gunivers', link: 'https://gunivers.net/' },
          { text: 'Syraniix', link: 'https://www.youtube.com/channel/UC9YGYDEGI6B5uQL_CbQbcdw' },
        ]
      }
    ],
    sidebar: {
      '/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
            'quel-serveur-choisir.md',
          ]
        },
        {
          title: 'Serveur Survie',
          collapsable: false,
          children: [
            '/serveur-survie/generalites.md',
            '/serveur-survie/acquerir-vos-premieres-ressources.md',
            '/serveur-survie/ou-vous-installer.md',
            '/serveur-survie/proteger-votre-terrain.md',
            '/serveur-survie/le-monde-ressource.md',
            '/serveur-survie/regles.md',
          ]
        },
        {
          title: 'Serveur Créatif',
          collapsable: false,
          children: [
            '/serveur-creatif/generalites.md',
            '/serveur-creatif/regles.md',
          ]
        },
        {
          title: 'Serveur Pépinière',
          collapsable: false,
          children: [
            '/serveur-pepiniere/presentation.md',
            '/serveur-pepiniere/mini-jeux.md',
            '/serveur-pepiniere/rivals.md',
            '/serveur-pepiniere/randomland.md',
            '/serveur-pepiniere/faq.md',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

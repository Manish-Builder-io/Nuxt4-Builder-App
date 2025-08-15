// file: builder-components.ts
// import your custom components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Hero from '~/components/Hero.vue'
import Cards from '~/components/Cards.vue'

export const registeredComponents = [
  {
    component: Header,
    name: 'Header',
    inputs: [
      {
        name: 'logoText',
        type: 'string',
        defaultValue: 'Builder.io',
      },
      {
        name: 'showCTA',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'ctaText',
        type: 'string',
        defaultValue: 'Get Started',
      },
    ],
  },
  {
    component: Footer,
    name: 'Footer',
    inputs: [
      {
        name: 'companyName',
        type: 'string',
        defaultValue: 'Builder.io',
      },
      {
        name: 'companyDescription',
        type: 'text',
        defaultValue: 'Build and deploy your website with our powerful visual editor. Create stunning pages without writing code.',
      },
      {
        name: 'showSocialLinks',
        type: 'boolean',
        defaultValue: true,
      },
    ],
  },
  {
    component: Hero,
    name: 'Hero',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Build Beautiful Websites Faster',
      },
      {
        name: 'subtitle',
        type: 'text',
        defaultValue: 'Create stunning websites with our powerful visual editor. No coding required. Drag, drop, and design your way to a professional website in minutes.',
      },
      {
        name: 'primaryButtonText',
        type: 'string',
        defaultValue: 'Start Building Free',
      },
      {
        name: 'secondaryButtonText',
        type: 'string',
        defaultValue: 'Watch Demo',
      },
      {
        name: 'showTrustIndicators',
        type: 'boolean',
        defaultValue: true,
      },
    ],
  },
  {
    component: Cards,
    name: 'Cards',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Our Features',
      },
      {
        name: 'subtitle',
        type: 'text',
        defaultValue: 'Discover what makes our platform the perfect choice for building your next website.',
      },
      {
        name: 'cards',
        type: 'list',
        subFields: [
          {
            name: 'title',
            type: 'string',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'image',
            type: 'file',
            allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
          },
          {
            name: 'features',
            type: 'list',
            subFields: [
              {
                name: 'text',
                type: 'string',
              },
            ],
          },
          {
            name: 'ctaText',
            type: 'string',
          },
          {
            name: 'badge',
            type: 'string',
          },
        ],
      },
      {
        name: 'showLoadMore',
        type: 'boolean',
        defaultValue: false,
      },
    ],
  },
]

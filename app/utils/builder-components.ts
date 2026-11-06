// file: builder-components.ts
// import your custom components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Hero from '~/components/Hero.vue'
import Cards from '~/components/Cards.vue'
import Button from '../components/Button.vue'
import StatsBar from '~/components/StatsBar.vue'
import Testimonials from '~/components/Testimonials.vue'
import PricingTable from '~/components/PricingTable.vue'
import FaqAccordion from '~/components/FaqAccordion.vue'
import CtaBanner from '~/components/CtaBanner.vue'
import ContentSection from '~/components/ContentSection.vue'
import VideoEmbed from '~/components/VideoEmbed.vue'
import InputShowcase from '~/components/InputShowcase.vue'
import { register } from '@builder.io/sdk-vue'

if (typeof window !== 'undefined') {
  register('insertMenu', {
    name: 'AW Building Blocks',
    priority: 1,
    persist: true,
    items: [
      { name: 'Header', item: { component: { name: 'Header' } } },
      { name: 'Hero', item: { component: { name: 'Hero' } } },
      { name: 'Stats Bar', item: { component: { name: 'StatsBar' } } },
      { name: 'Cards', item: { component: { name: 'Cards' } } },
      { name: 'Testimonials', item: { component: { name: 'Testimonials' } } },
      { name: 'Pricing Table', item: { component: { name: 'PricingTable' } } },
      { name: 'FAQ Accordion', item: { component: { name: 'FaqAccordion' } } },
      { name: 'CTA Banner', item: { component: { name: 'CtaBanner' } } },
      { name: 'Content Section', item: { component: { name: 'ContentSection' } } },
      { name: 'Video Embed', item: { component: { name: 'VideoEmbed' } } },
      { name: 'Footer', item: { component: { name: 'Footer' } } },
      { name: 'Button', item: { component: { name: 'Core:Button' } } },
      { name: 'Input Showcase (debug)', item: { component: { name: 'InputShowcase' } } },
    ],
  })
}

export const registeredComponents = [
  {
    component: Header,
    name: 'Header',
    description: 'Site header with configurable navigation',
    docsLink: 'https://www.builder.io/c/docs/register-components-options',
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
        showIf: 'options.get("showCTA")',
      },
      { name: 'ctaUrl', type: 'url', defaultValue: '#', showIf: 'options.get("showCTA")' },
      {
        name: 'navLinks',
        type: 'list',
        helperText: 'Leave empty to use the default navigation.',
        defaultValue: [
          { label: 'Home', url: '/' },
          { label: 'Features', url: '#features' },
          { label: 'Pricing', url: '#pricing' },
          { label: 'FAQ', url: '#faq' },
        ],
        subFields: [
          { name: 'label', type: 'string', required: true },
          { name: 'url', type: 'url', required: true },
        ],
      },
    ],
  },
  {
    component: Footer,
    name: 'Footer',
    description: 'Site footer with link groups',
    docsLink: 'https://www.builder.io/c/docs/register-components-options',
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
      {
        name: 'linkGroups',
        type: 'list',
        helperText: 'Nested list: groups of links. Leave empty for defaults.',
        subFields: [
          { name: 'title', type: 'string', required: true },
          {
            name: 'links',
            type: 'list',
            subFields: [
              { name: 'label', type: 'string', required: true },
              { name: 'url', type: 'url' },
            ],
          },
        ],
      },
    ],
  },
  {
    component: Hero,
    name: 'Hero',
    description: 'Full-height hero section',
    docsLink: 'https://www.builder.io/c/docs/register-components-options',
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
      { name: 'primaryButtonUrl', type: 'url', defaultValue: '#' },
      { name: 'secondaryButtonUrl', type: 'url', defaultValue: '#' },
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
    description: 'Responsive feature cards',
    docsLink: 'https://www.builder.io/c/docs/register-components-options',
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
  {
    component: Button,
    name: 'Core:Button',
    override: true,
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'Click me',
      },
      {
        name: 'variant',
        type: 'enum',
        enum: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'],
        defaultValue: 'primary',
      },
      {
        name: 'size',
        type: 'enum',
        enum: ['sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'loading',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'iconBefore',
        type: 'enum',
        enum: ['ArrowRightIcon', 'ArrowLeftIcon', 'PlusIcon', 'CheckIcon', 'DownloadIcon', 'ExternalLinkIcon'],
        defaultValue: null,
      },
      {
        name: 'iconAfter',
        type: 'enum',
        enum: ['ArrowRightIcon', 'ArrowLeftIcon', 'PlusIcon', 'CheckIcon', 'DownloadIcon', 'ExternalLinkIcon'],
        defaultValue: null,
      },
      {
        name: 'rounded',
        type: 'boolean',
        defaultValue: false,
      },
    ],
  },
  {
    component: StatsBar,
    name: 'StatsBar',
    description: 'Row of numeric highlights',
    inputs: [
      {
        name: 'stats',
        type: 'list',
        defaultValue: [
          { value: 10000, suffix: '+', label: 'Creators' },
          { value: 99.9, suffix: '%', label: 'Uptime' },
          { value: 150, suffix: '+', label: 'Integrations' },
        ],
        subFields: [
          { name: 'value', type: 'number', min: 0, step: 0.1, required: true },
          { name: 'suffix', type: 'string', defaultValue: '+' },
          { name: 'label', type: 'string', required: true },
        ],
      },
      { name: 'backgroundColor', type: 'color', defaultValue: '#111827' },
      { name: 'textColor', type: 'color', defaultValue: '#ffffff', advanced: true },
    ],
  },
  {
    component: Testimonials,
    name: 'Testimonials',
    description: 'Customer quotes with rating and avatar',
    inputs: [
      { name: 'heading', type: 'string', defaultValue: 'Loved by teams' },
      {
        name: 'layout',
        type: 'string',
        enum: [
          { label: 'Grid (3 columns)', value: 'grid' },
          { label: 'Stacked', value: 'stacked' },
        ],
        defaultValue: 'grid',
      },
      {
        name: 'items',
        type: 'list',
        subFields: [
          { name: 'quote', type: 'longText', required: true },
          { name: 'author', type: 'string', required: true },
          { name: 'role', type: 'string' },
          { name: 'avatar', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
          { name: 'rating', type: 'number', min: 1, max: 5, step: 1, defaultValue: 5 },
        ],
      },
    ],
  },
  {
    component: PricingTable,
    name: 'PricingTable',
    description: 'Plans with price, features and CTA',
    inputs: [
      { name: 'id', type: 'string', defaultValue: 'pricing', advanced: true, helperText: 'Anchor id for in-page links' },
      { name: 'heading', type: 'string', defaultValue: 'Simple pricing' },
      { name: 'currency', type: 'string', enum: ['USD', 'EUR', 'GBP', 'JPY'], defaultValue: 'USD' },
      { name: 'billingPeriod', type: 'string', enum: ['month', 'year'], defaultValue: 'month' },
      {
        name: 'plans',
        type: 'list',
        subFields: [
          { name: 'name', type: 'string', required: true },
          { name: 'price', type: 'number', min: 0, defaultValue: 0 },
          { name: 'highlighted', type: 'boolean', defaultValue: false },
          { name: 'features', type: 'list', subFields: [{ name: 'text', type: 'string' }] },
          { name: 'ctaText', type: 'string', defaultValue: 'Choose plan' },
          { name: 'ctaUrl', type: 'url', defaultValue: '#' },
        ],
      },
    ],
  },
  {
    component: FaqAccordion,
    name: 'FaqAccordion',
    description: 'Expandable questions with rich-text answers',
    inputs: [
      { name: 'id', type: 'string', defaultValue: 'faq', advanced: true },
      { name: 'heading', type: 'string', defaultValue: 'Frequently asked questions' },
      { name: 'allowMultipleOpen', type: 'boolean', defaultValue: false },
      {
        name: 'items',
        type: 'list',
        subFields: [
          { name: 'question', type: 'string', required: true },
          { name: 'answer', type: 'richText', required: true },
        ],
      },
    ],
  },
  {
    component: CtaBanner,
    name: 'CtaBanner',
    description: 'Call-to-action band with colours and optional background image',
    inputs: [
      { name: 'heading', type: 'string', defaultValue: 'Ready to build?' },
      { name: 'body', type: 'longText', defaultValue: 'Start composing pages from your own components today.' },
      { name: 'buttonText', type: 'string', defaultValue: 'Get started' },
      { name: 'buttonUrl', type: 'url', defaultValue: '#' },
      { name: 'openInNewTab', type: 'boolean', defaultValue: false },
      { name: 'align', type: 'string', enum: ['left', 'center', 'right'], defaultValue: 'center' },
      { name: 'backgroundColor', type: 'color', defaultValue: '#2563eb' },
      { name: 'textColor', type: 'color', defaultValue: '#ffffff' },
      { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'], advanced: true },
    ],
  },
  {
    // Component that accepts child blocks (editor drop zone)
    component: ContentSection,
    name: 'ContentSection',
    description: 'Padded container that accepts other blocks as children',
    canHaveChildren: true,
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Text', options: { text: '<h2>Drop content here</h2>' } },
        responsiveStyles: { large: { textAlign: 'center' } },
      },
    ],
    childRequirements: {
      message: 'Content Section children cannot be another Content Section',
      query: { 'component.name': { $ne: 'ContentSection' } },
    },
    defaultStyles: { marginTop: '0px' },
    models: ['page', 'landing-page', 'section'],
    inputs: [
      { name: 'id', type: 'string', advanced: true },
      { name: 'paddingY', type: 'number', min: 0, max: 240, step: 8, defaultValue: 64 },
      { name: 'maxWidth', type: 'string', enum: ['narrow', 'normal', 'wide', 'full'], defaultValue: 'normal' },
      { name: 'backgroundColor', type: 'color', defaultValue: 'transparent' },
    ],
  },
  {
    component: VideoEmbed,
    name: 'VideoEmbed',
    description: 'YouTube / Vimeo embed',
    noWrap: false,
    inputs: [
      { name: 'url', type: 'url', required: true, helperText: 'https YouTube or Vimeo link' },
      { name: 'aspectRatio', type: 'string', enum: ['16/9', '4/3', '1/1', '21/9'], defaultValue: '16/9' },
      { name: 'autoplay', type: 'boolean', defaultValue: false },
      { name: 'caption', type: 'string', showIf: 'options.get("url")' },
    ],
  },
  {
    // Debug component: exercises every input type for repro purposes
    component: InputShowcase,
    name: 'InputShowcase',
    description: 'Prints every received prop — use to reproduce input-type issues',
    tag: 'debug',
    inputs: [
      { name: 'label', type: 'string', defaultValue: 'Input Showcase', helperText: 'string' },
      { name: 'longTextValue', type: 'longText', defaultValue: 'multi\nline' },
      { name: 'richTextValue', type: 'richText', defaultValue: '<p><b>rich</b> text</p>' },
      { name: 'htmlValue', type: 'html', defaultValue: '<em>html</em>' },
      { name: 'numberValue', type: 'number', min: 0, max: 100, step: 5, defaultValue: 10 },
      { name: 'booleanValue', type: 'boolean', defaultValue: false },
      { name: 'colorValue', type: 'color', defaultValue: '#ff6600' },
      { name: 'dateValue', type: 'date' },
      { name: 'emailValue', type: 'email', regex: { pattern: '^[^@]+@[^@]+$', message: 'Enter a valid email' } },
      { name: 'urlValue', type: 'url', defaultValue: 'https://www.builder.io' },
      { name: 'fileValue', type: 'file', allowedFileTypes: ['jpeg', 'png', 'svg', 'webp', 'pdf'] },
      { name: 'enumStrings', type: 'string', enum: ['one', 'two', 'three'], defaultValue: 'one' },
      {
        name: 'enumObjects',
        type: 'string',
        enum: [
          { label: 'Small', value: 's' },
          { label: 'Large', value: 'l' },
        ],
        defaultValue: 's',
      },
      { name: 'tagsValue', type: 'tags' },
      { name: 'referenceValue', type: 'reference', model: 'page', helperText: 'reference to a page entry' },
      {
        name: 'objectValue',
        type: 'object',
        defaultValue: { title: 'Nested', count: 1 },
        subFields: [
          { name: 'title', type: 'string' },
          { name: 'count', type: 'number' },
          { name: 'inner', type: 'object', subFields: [{ name: 'flag', type: 'boolean' }] },
        ],
      },
      {
        name: 'listValue',
        type: 'list',
        defaultValue: [{ name: 'a' }, { name: 'b' }],
        subFields: [{ name: 'name', type: 'string' }],
      },
      { name: 'showAdvanced', type: 'boolean', defaultValue: false, helperText: 'Toggles the conditional input below (showIf)' },
      { name: 'conditionalValue', type: 'string', defaultValue: 'only visible when showAdvanced', showIf: 'options.get("showAdvanced")' },
      { name: 'requiredValue', type: 'string', required: true, defaultValue: 'required' },
      { name: 'advancedValue', type: 'string', advanced: true, defaultValue: 'advanced' },
      { name: 'hiddenValue', type: 'string', hideFromUI: true, defaultValue: 'hidden from UI but passed to component' },
      { name: 'localizedValue', type: 'string', localized: true, defaultValue: 'localized text' },
    ],
  },
]

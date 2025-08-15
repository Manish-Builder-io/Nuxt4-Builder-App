# Builder.io Setup Guide

## Current Setup

### File Structure
```
app/
├── components/
│   ├── Header.vue
│   ├── Footer.vue
│   ├── Hero.vue
│   └── Cards.vue
├── pages/
│   ├── [...app].vue          # Catch-all route for Builder.io
│   └── test.vue              # Test page for components
├── utils/
│   └── builder-components.ts # Component registration
└── app.vue
```

### How It Works

1. **Catch-all Route**: `[...app].vue` handles all routes and tries to fetch Builder.io content
2. **Component Registration**: `builder-components.ts` registers custom components with Builder.io
3. **Content Display**: The Content component renders Builder.io content with custom components

## Testing

### 1. Test Components Directly
Visit `/test` to see all components working:
```bash
npm run dev
# Then visit http://localhost:3000/test
```

### 2. Test Builder.io Integration
Visit any route (like `/` or `/about`) to test Builder.io content:
```bash
npm run dev
# Then visit http://localhost:3000/
```

## Troubleshooting

### Issue: "Content Not Found" Page
This means Builder.io doesn't have content for that URL. To fix:

1. **Create content in Builder.io** for the URL you're testing
2. **Check the API key** in `[...app].vue`
3. **Verify the model name** (currently set to 'page')

### Issue: Components Not Appearing in Builder.io
1. **Check browser console** for any errors
2. **Verify component registration** in `builder-components.ts`
3. **Ensure customComponents prop** is passed to Content component

### Issue: Routing Problems
1. **Removed index.vue** to avoid conflicts with catch-all route
2. **Added debug logging** to see what's happening
3. **Check Nuxt config** for proper routing settings

## Debug Information

The catch-all route now includes debug logging. Check the browser console for:
- Route path
- URL path being sent to Builder.io
- Whether content was found
- Preview mode status

## Builder.io Setup

### 1. Create a Model
In Builder.io, create a model called "page" (or change the model name in the code)

### 2. Add Custom Components
Your custom components (Header, Footer, Hero, Cards) should appear in the Builder.io editor

### 3. Create Content
Create pages in Builder.io for the URLs you want to test

### 4. Test Preview Mode
Use Builder.io's preview mode to test your components

## API Key
Make sure to replace the API key in `[...app].vue`:
```typescript
const apiKey = "YOUR_ACTUAL_API_KEY";
```

## Next Steps

1. **Test the components** at `/test`
2. **Set up Builder.io** with your API key
3. **Create content** in Builder.io
4. **Test the integration** at various URLs

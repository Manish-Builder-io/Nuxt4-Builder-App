<!-- Builder "landing-page" model. Falls back to a layout made only of registered components. -->
<template>
  <BuilderPage model="landing-page" url-path="/landing-page">
    <template #fallback>
      <DefaultLanding />
    </template>
  </BuilderPage>
</template>

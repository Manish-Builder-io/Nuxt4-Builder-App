<script setup lang="ts">
import { Content } from '@builder.io/sdk-vue'
import { computed } from 'vue'
import { registeredComponents } from '~/utils/builder-components'

const props = defineProps<{
  content: Record<string, any> | null
  apiKey: string
  model?: string
}>()

const model = computed(() => props.model ?? 'article')

const articleData = computed(() => props.content?.data ?? {})

const publishedDate = computed(() => {
  const value = articleData.value.publishedDate
  if (!value) return null
  if (typeof value === 'string') return value
  return value.Default ?? value.default ?? null
})

// With enrich: true, the author reference is resolved inline under author.value.data
const authorData = computed(() => articleData.value.author?.value?.data ?? null)

const relatedArticles = computed(() => articleData.value.relatedArticle ?? [])
</script>

<template>
  <article class="max-w-3xl mx-auto px-4 py-12">
    <header class="mb-8 border-b border-gray-200 pb-8">
      <h1 v-if="articleData.title" class="text-4xl font-bold text-gray-900">
        {{ articleData.title }}
      </h1>
      <p v-if="articleData.description" class="mt-4 text-lg text-gray-600">
        {{ articleData.description }}
      </p>
      <div class="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
        <span v-if="publishedDate">Published {{ publishedDate }}</span>
      </div>
    </header>


    <!-- Author Section -->
    <section v-if="authorData" class="mt-12 border-t border-gray-200 pt-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">About the Author</h2>
      <div class="flex items-start gap-4">
        <img
          v-if="authorData.avatar"
          :src="authorData.avatar"
          :alt="authorData.imageAltText || authorData.authorName"
          class="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <p v-if="authorData.authorName" class="font-semibold text-gray-900">
            {{ authorData.authorName }}
          </p>
          <p v-if="authorData.jobTitle" class="text-sm text-gray-500 mb-2">
            {{ authorData.jobTitle }}
          </p>
          <p v-if="authorData.authorIntro" class="text-sm text-gray-600">
            {{ authorData.authorIntro }}
          </p>
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section v-if="relatedArticles.length" class="mt-12 border-t border-gray-200 pt-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Related Articles</h2>
      <ul class="space-y-2">
        <li
          v-for="(article, index) in relatedArticles"
          :key="index"
          class="flex items-center gap-2"
        >
          <span
            v-if="article.tag"
            class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
          >{{ article.tag }}</span>
          <span class="text-gray-800">{{ article.title }}</span>
        </li>
      </ul>
    </section>
  </article>
</template>

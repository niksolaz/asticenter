<template>
  <article class="glass-card rounded-2xl overflow-hidden group">
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img
        :src="news.image"
        :alt="news.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gm-bg via-gm-bg/40 to-transparent"></div>
      <span class="badge-glass absolute top-4 right-4">{{ news.category }}</span>
    </div>

    <!-- Content -->
    <div class="p-5 space-y-3">
      <div class="flex items-center gap-3 text-xs text-gm-chrome-dark/70">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{{ news.date }}</span>
      </div>

      <h3 class="text-lg font-bold text-gm-chrome-light leading-snug">{{ news.title }}</h3>

      <p class="text-gm-chrome-dark text-sm leading-relaxed line-clamp-2">{{ news.summary }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
interface NewsItem {
  id: number
  title: string
  summary: string
  category: string
  date: string
  image: string
}

defineProps<{ news: NewsItem }>()
</script>
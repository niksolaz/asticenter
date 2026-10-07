<template>
  <article class="glass-card rounded-2xl overflow-hidden group">
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gm-bg via-gm-bg/40 to-transparent"></div>
      <span class="badge-glass absolute top-4 left-4">{{ post.category }}</span>
    </div>

    <!-- Content -->
    <div class="p-5 space-y-3">
      <div class="flex items-center gap-3 text-xs text-gm-chrome-dark/70">
        <span>{{ post.date }}</span>
        <span>&bull;</span>
        <span>{{ post.readTime }} min di lettura</span>
      </div>

      <h3 class="text-lg font-bold text-gm-chrome-light leading-snug">{{ post.title }}</h3>

      <p class="text-gm-chrome-dark text-sm leading-relaxed line-clamp-2">{{ post.excerpt }}</p>

      <div class="flex items-center gap-2 pt-2">
        <img
          :src="post.authorAvatar"
          class="w-6 h-6 rounded-full object-cover ring-1 ring-white/15"
          alt=""
        />
        <span class="text-xs text-gm-chrome-dark/70">{{ post.author }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  authorAvatar: string
  date: string
  readTime: number
  image: string
}

defineProps<{ post: BlogPost }>()
</script>
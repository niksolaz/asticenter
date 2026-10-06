<template>
  <NuxtLink :to="`/business/${business.id}`" class="block group">
    <div class="glass-card rounded-2xl overflow-hidden">
      <!-- Image -->
      <div class="relative h-52 overflow-hidden">
        <img
          :src="business.images[0]"
          :alt="business.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-gm-bg via-gm-bg/40 to-transparent"></div>
        <!-- Category badge -->
        <span class="badge-glass absolute top-4 right-4">{{ business.category }}</span>
        <!-- Title on image -->
        <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">
          {{ business.title }}
        </h3>
      </div>

      <!-- Content -->
      <div class="p-5 space-y-4">
        <p class="text-gm-chrome-dark text-sm leading-relaxed line-clamp-2">
          {{ business.description.substring(0, 120) }}
        </p>

        <!-- Meta info -->
        <div class="flex items-center gap-4 text-xs text-gm-chrome-dark/70">
          <span class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ business.info }}
          </span>
          <span class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ business.priceRange }}
          </span>
        </div>

        <!-- Action button -->
        <div class="pt-2">
          <span class="btn-metal block text-center text-sm py-2.5 w-full">
            Visualizza Dettagli
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Business {
  id: number;
  title: string;
  description: string;
  category: string;
  info: string;
  priceRange: string;
  images: string[];
}

defineProps<{ business: Business }>();
</script>
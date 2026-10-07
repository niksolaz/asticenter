<template>
  <div class="glass-card rounded-2xl overflow-hidden group">
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img
        :src="listing.image"
        :alt="listing.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gm-bg via-gm-bg/40 to-transparent"></div>
      <span class="badge-glass absolute top-4 left-4">{{ listing.category }}</span>
      <p class="absolute top-4 right-4 text-lg font-black text-metal-gold drop-shadow-lg">
        {{ listing.price.toLocaleString('it-IT') }} &euro;
      </p>
    </div>

    <!-- Content -->
    <div class="p-5 space-y-3">
      <h3 class="text-lg font-bold text-gm-chrome-light leading-snug">{{ listing.title }}</h3>

      <p class="text-gm-chrome-dark text-sm leading-relaxed line-clamp-2">{{ listing.description }}</p>

      <div class="flex items-center justify-between pt-2">
        <span class="text-xs text-gm-chrome-dark/70">{{ listing.date }}</span>
      </div>

      <!-- Seller info -->
      <div class="flex items-center justify-between pt-3 border-t border-gm-glass-border">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-gm-accent/20 border border-gm-accent/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gm-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span class="text-sm font-medium text-gm-chrome-light">{{ listing.sellerName }}</span>
        </div>
        <a
          :href="`tel:${listing.phone.replace(/\s/g, '')}`"
          class="btn-metal text-xs px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {{ listing.phone }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Listing {
  id: number
  title: string
  description: string
  category: string
  price: number
  sellerName: string
  phone: string
  date: string
  image: string
}

defineProps<{ listing: Listing }>()
</script>
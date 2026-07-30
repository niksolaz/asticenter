<template>
  <div
    class="bg-asti-white rounded-xl shadow-md overflow-hidden border border-asti-sage/30 hover:shadow-lg transition-shadow">
    <img :src="business.images[0]" :alt="business.title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-xl font-bold text-asti-red">{{ business.title }}</h3>
        <span
          class="text-xs font-semibold px-2 py-1 bg-asti-sage text-white rounded-full">{{ business.category }}</span>
      </div>
      <p class="text-gray-600 text-sm mb-4">{{ business.description.substring(0, 100) }}...</p>
      <div class="text-xs text-gray-500 mb-4 space-y-1">
        <p><strong>Info:</strong> {{ business.info }}</p>
        <p><strong>Prezzi:</strong> {{ business.priceRange }}</p>
      </div>
      <NuxtLink :to="`/business/${business.id}`"
        class="block text-center py-2 bg-asti-red text-white rounded-lg hover:bg-opacity-90 transition-colors">
        Visualizza Dettagli
      </NuxtLink>
    </div>
  </div>
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

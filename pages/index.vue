<template>
  <div class="min-h-screen p-6 max-w-7xl mx-auto">
    <header class="text-center mb-12">
      <div class="flex items-center justify-center gap-4 py-5 bg-white rounded-lg shadow-md">
        <img
          src="https://imgs.search.brave.com/4rbgd1I8Px2JUrLa9drf8iBEI3JiHcY2dY86egt926g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvaXQvNi82Ny9B/c3RpLUdvbmZhbG9u/ZS5wbmc_dXRtX3Nv/dXJjZT1pdC53aWtp/cGVkaWEub3JnJnV0/bV9jYW1wYWlnbj1w/YXJzZXImdXRtX2Nv/bnRlbnQ9dGh1bWJu/YWlsX3Vuc2NhbGVk"
          class="w-24 h-24 rounded-lg object-cover" />
        <h1 class="text-4xl font-extrabold text-asti-red mb-2">AstiCenter</h1>
      </div>
      <p class="text-xl text-gray-600 mb-8 py-10">Scopri le migliori attività, negozi ed eventi della città</p>

      <div class="max-w-md mx-auto relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input v-model="searchQuery" type="text" placeholder="Cerca un'attività, un negozio o un evento..."
          class="w-full pl-10 pr-4 py-3 rounded-full border border-asti-sage/50 focus:outline-none focus:ring-2 focus:ring-asti-sage focus:border-transparent shadow-sm" />
      </div>
    </header>

    <div v-if="filteredBusinesses.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BusinessCard v-for="business in filteredBusinesses" :key="business.id" :business="business" />
    </div>

    <div v-else class="text-center py-20">
      <p class="text-gray-500 text-xl">Nessun risultato trovato per "{{ searchQuery }}"</p>
      <button @click="searchQuery = ''" class="mt-4 text-asti-red hover:underline">Mostra tutto</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { mockBusinesses } = await useMocks();
  const businesses = ref(mockBusinesses);
  const searchQuery = ref('');

  const filteredBusinesses = computed(() => {
    if (!searchQuery.value) return businesses.value;

    const query = searchQuery.value.toLowerCase();
    return businesses.value.filter(b =>
      b.title.toLowerCase().includes(query) ||
      b.description.toLowerCase().includes(query) ||
      b.category.toLowerCase().includes(query)
    );
  });
</script>

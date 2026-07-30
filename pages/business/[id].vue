
<template>
  <div v-if="business" class="min-h-screen p-6 max-w-4xl mx-auto bg-asti-white rounded-2xl shadow-sm my-6">
    <NuxtLink to="/" class="text-asti-sage hover:underline mb-6 inline-block">← Torna alla Home</NuxtLink>
    
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2 space-y-6">
        <img :src="business.images[0]" :alt="business.title" class="w-full rounded-xl shadow-md" />
        
        <!-- Fake Map Section -->
        <div class="relative w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner border-2 border-asti-sage/20">
          <!-- Mock Map Background: using a highly reliable architecture-style map image -->
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa27d4bc7596?auto=format&fit=crop&w=800&q=60" 
            class="absolute inset-0 w-full h-full object-cover opacity-70 grayscale"
            alt="Mappa area" 
          />
          
          <!-- Map Marker Overlay -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative">
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-asti-red rounded-full animate-ping"></div>
              <div class="w-6 h-6 bg-asti-red rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div class="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-gray-600 shadow-sm">
            Mappa Interattiva (Demo)
          </div>
        </div>
      </div>
      
      <div class="md:w-1/2">
        <h1 class="text-3xl font-bold text-asti-red mb-4">{{ business.title }}</h1>
        <p class="text-gray-700 mb-6">{{ business.description }}</p>
        <div class="space-y-2 text-sm mb-8">
          <p><strong class="text-gray-900">Orari:</strong> {{ business.info }}</p>
          <p><strong class="text-gray-900">Fascia di Prezzo:</strong> {{ business.priceRange }}</p>
        </div>
        
        <div v-if="business.items && business.items.length" class="border-t pt-6">
          <h3 class="text-xl font-semibold mb-4">Offerta/Catalogo</h3>
          <div class="grid grid-cols-1 gap-4">
            <div v-for="item in business.items" :key="item.name" class="flex items-center justify-between p-3 bg-asti-cream rounded-lg border border-asti-sage/20">
              <div class="flex items-center gap-3">
                <img :src="item.image" class="w-12 h-12 rounded-full object-cover border border-white shadow-sm" />
                <span class="font-medium">{{ item.name }}</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="font-bold text-asti-red">{{ item.price }}€</span>
                <button class="px-3 py-1 bg-asti-sage text-white rounded-md text-xs hover:bg-opacity-90 transition-colors">Aggiungi</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-gray-400 italic">Nessun articolo disponibile per questa attività.</div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-20">
    <p>Attività non trovata.</p>
    <NuxtLink to="/" class="text-asti-red underline">Torna alla Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { mockBusinesses } = await useMocks();
const business = computed(() => 
  mockBusinesses.find(b => b.id === parseInt(route.params.id as string))
);
</script>

<template>
  <div v-if="business" class="min-h-screen p-6 max-w-5xl mx-auto relative">
    <!-- Back link -->
    <NuxtLink to="/" class="inline-flex items-center gap-2 text-gm-chrome-dark/60 hover:text-gm-chrome transition-colors mb-8 group">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Torna alla Home
    </NuxtLink>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Left: images + map -->
      <div class="lg:w-1/2 space-y-6">
        <!-- Main image -->
        <div class="glass-panel-lg overflow-hidden">
          <img
            :src="business.images[0]"
            :alt="business.title"
            class="w-full h-72 object-cover"
          />
          <div class="p-4 flex items-center gap-3">
            <span class="badge-glass">{{ business.category }}</span>
            <span class="text-sm text-gm-chrome-dark/60">{{ business.priceRange }}</span>
          </div>
        </div>

        <!-- Map -->
        <div class="glass-panel-lg overflow-hidden">
          <div class="relative w-full h-64">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa27d4bc7596?auto=format&fit=crop&w=800&q=60"
              class="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Mappa area"
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-gm-accent rounded-full animate-ping"></div>
                <div class="w-6 h-6 bg-gm-accent rounded-full border-2 border-white/20 shadow-lg flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div class="absolute bottom-3 left-3 text-xs text-gm-chrome-dark bg-gm-bg/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gm-glass-border">
              Mappa Interattiva
            </div>
          </div>
        </div>
      </div>

      <!-- Right: details -->
      <div class="lg:w-1/2">
        <div class="glass-panel-lg p-8 space-y-6">
          <h1 class="text-3xl font-black">
            <span class="text-metal">{{ business.title }}</span>
          </h1>

          <p class="text-gm-chrome/80 leading-relaxed">{{ business.description }}</p>

          <!-- Info grid -->
          <div class="grid grid-cols-2 gap-4 pt-2">
            <div class="glass-panel p-4 rounded-xl">
              <p class="text-xs text-gm-chrome-dark/50 uppercase tracking-wider mb-1">Orari</p>
              <p class="text-sm font-medium text-gm-chrome">{{ business.info }}</p>
            </div>
            <div class="glass-panel p-4 rounded-xl">
              <p class="text-xs text-gm-chrome-dark/50 uppercase tracking-wider mb-1">Fascia Prezzo</p>
              <p class="text-sm font-medium text-gm-chrome">{{ business.priceRange }}</p>
            </div>
          </div>

          <!-- Catalog items -->
          <div v-if="business.items && business.items.length" class="space-y-4 pt-4">
            <h3 class="text-lg font-bold">
              <span class="text-metal">Offerta / Catalogo</span>
            </h3>
            <div class="space-y-3">
              <div
                v-for="item in business.items"
                :key="item.name"
                class="flex items-center justify-between p-4 glass-panel rounded-xl transition-all duration-200 hover:border-gm-glass-strong"
              >
                <div class="flex items-center gap-3">
                  <div class="relative">
                    <div class="absolute inset-0 rounded-full blur-sm opacity-40" style="background: linear-gradient(135deg, #7b8cff, #a78bfa);"></div>
                    <img
                      :src="item.image"
                      class="relative w-11 h-11 rounded-full object-cover ring-1 ring-white/15"
                      alt="item.name"
                    />
                  </div>
                  <span class="font-medium text-gm-chrome-light text-sm">{{ item.name }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="font-bold text-metal-gold text-sm">{{ item.price }}€</span>
                  <button class="btn-metal text-xs px-3 py-1.5 rounded-lg">Aggiungi</button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-gm-chrome-dark/40 italic text-sm pt-2">
            Nessun articolo disponibile per questa attività.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="glass-panel-lg p-12 text-center">
      <p class="text-gm-chrome-dark text-lg mb-4">Attività non trovata</p>
      <NuxtLink to="/" class="btn-metal inline-block text-sm">Torna alla Home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { mockBusinesses } = await useMocks();
const business = computed(() =>
  mockBusinesses.find(b => b.id === parseInt(route.params.id as string))
);
</script>
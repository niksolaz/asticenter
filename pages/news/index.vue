<template>
  <div class="min-h-screen relative">
    <!-- Animated background orbs -->
    <div class="glow-orb top-20 left-10 w-[500px] h-[500px]" style="background: radial-gradient(circle, rgba(212,168,83,0.25), transparent);"></div>
    <div class="glow-orb top-1/3 right-10 w-[400px] h-[400px]" style="background: radial-gradient(circle, rgba(123,140,255,0.25), transparent); animation-delay: -3s;"></div>
    <div class="glow-orb bottom-20 left-1/3 w-[600px] h-[600px]" style="background: radial-gradient(circle, rgba(212,168,83,0.15), transparent); animation-delay: -6s;"></div>

    <SiteNav />

    <div class="relative z-10 p-6 max-w-7xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-16 pt-6">
        <div class="glass-panel-lg inline-flex items-center gap-5 px-8 py-5 mb-8">
          <div class="relative">
            <div class="absolute inset-0 rounded-xl blur-md opacity-50" style="background: linear-gradient(135deg, #d4a853, #f0d78c);"></div>
            <img
              src="https://imgs.search.brave.com/4rbgd1I8Px2JUrLa9drf8iBEI3JiHcY2dY86egt926g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvaXQvNi82Ny9B/c3RpLUdvbmZhbG9u/ZS5wbmc_dXRtX3Nv/dXJjZT1pdC53aWtp/cGVkaWEub3JnJnV0/bV9jYW1wYWlnbj1w/YXJzZXImdXRtX2Nv/bnRlbnQ9dGh1bWJu/YWlsX3Vuc2NhbGVk"
              class="relative w-20 h-20 rounded-xl object-cover ring-1 ring-white/15"
              alt="Asti Gonfalone"
            />
          </div>
          <div class="text-left">
            <h1 class="text-4xl font-black tracking-tight">
              <span class="text-metal-gold">News</span>
            </h1>
            <p class="text-gm-chrome-dark text-sm tracking-wide uppercase">Ultime notizie dalla città</p>
          </div>
        </div>

        <p class="text-lg text-gm-chrome/70 mb-10 max-w-xl mx-auto leading-relaxed">
          Aggiornamenti, eventi e avvisi dal Comune di Asti
        </p>

        <!-- Search -->
        <div class="max-w-lg mx-auto relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gm-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cerca una notizia..."
            class="glass-input w-full pl-12 pr-14 py-4 text-base"
          />
          <div v-if="searchQuery" class="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button @click="searchQuery = ''" class="p-1 rounded-full text-gm-chrome-dark/60 hover:text-gm-chrome transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Category filter pills -->
        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = activeCategory === cat ? '' : cat"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              activeCategory === cat
                ? 'bg-gm-gold/20 border border-gm-gold/50 text-gm-gold-light shadow-gm'
                : 'bg-gm-glass border border-gm-glass-border text-gm-chrome-dark hover:border-gm-glass-strong hover:text-gm-chrome'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </header>

      <!-- News grid -->
      <div v-if="filteredNews.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NewsCard v-for="item in filteredNews" :key="item.id" :news="item" />
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-20">
        <div class="glass-panel inline-block p-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gm-chrome-dark/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p class="text-gm-chrome-dark text-lg">Nessuna notizia trovata per "<span class="text-gm-chrome">{{ searchQuery }}</span>"</p>
          <button @click="searchQuery = ''; activeCategory = ''" class="btn-metal mt-6 text-sm">Mostra tutto</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { mockNews } = await useNews()
const news = ref(mockNews)
const searchQuery = ref('')
const activeCategory = ref('')

const categories = computed(() =>
  [...new Set(news.value.map(n => n.category))]
)

const filteredNews = computed(() => {
  let result = news.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(n =>
      n.title.toLowerCase().includes(query) ||
      n.summary.toLowerCase().includes(query) ||
      n.category.toLowerCase().includes(query)
    )
  }

  if (activeCategory.value) {
    result = result.filter(n => n.category === activeCategory.value)
  }

  return result
})
</script>
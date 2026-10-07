<template>
  <header class="relative z-30">
    <div class="max-w-7xl mx-auto px-6 pt-6 flex justify-center">
      <nav
        class="glass-panel flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-2xl"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          :class="
            isActive(link.to)
              ? 'bg-gm-accent/20 border border-gm-accent/50 text-gm-accent-light shadow-gm'
              : 'text-gm-chrome-dark hover:text-gm-chrome border border-transparent'
          "
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();

const links = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "News", to: "/news" },
  { label: "Annunci", to: "/annunci" },
];

const isActive = (to: string) => {
  if (to === "/") return route.path === "/";
  return route.path.startsWith(to);
};
</script>

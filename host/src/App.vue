<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import hello from "./pages/hello.vue";
</script>

<template>
	<div style="border: 1px solid black">
		<h2>Host</h2>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<Suspense>
		<hello></hello>
		<!-- loading state via #fallback slot -->
		<template #fallback>
			Loading HelloWorld...
		</template>
	</Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<template>
	<div style="border: 1px solid black">
		<h2>Remote</h2>

		<h1>{{ msg }}</h1>

		<div class="card">
			<button type="button" @click="count++">count is {{ count }}</button>
			<p>
				Edit
				<code>components/HelloWorld.vue</code> to test HMR
			</p>
		</div>

		<p>
			Check out
			<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue +
			Vite
			starter
		</p>
		<p>
			Install
			<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
			in your IDE for a better DX

		</p>
		<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
		<div>DevExtreme Vue component is rendered below</div>
		<DxButton v-model:text="count" />
	</div>
</template>
<script lang="ts">

import 'devextreme/dist/css/dx.light.css';
import { ref, watch } from 'vue'

import { DxButton } from 'devextreme-vue/button';

const count = ref(0);
const list = ref<string[]>([]);
export default {
	components: {

		DxButton
	},
	mounted() {
		list.value.push(Math.random().toString(16).substring(2, 8));
		list.value.push(Math.random().toString(16).substring(2, 8));

	},
	data() {
		watch(count, (newValue, oldValue) => {
			if (newValue > oldValue)
				list.value.push(Math.random().toString(16).substring(2, 8));
		});
		return {
			list,
			count
		};
	},
};
</script>
<style scoped>
.read-the-docs {
	color: #888;
}
</style>

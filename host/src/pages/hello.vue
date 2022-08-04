<script setup lang="ts">

import { defineAsyncComponent } from 'vue';

const HelloWorld = defineAsyncComponent(() => import('remote/helloworld'));

</script>

<template>
	<HelloWorld msg="Remote Vite + Vue" />
</template>
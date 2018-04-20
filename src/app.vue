<template>
	<div id="app">
		<Header/>
		<Todo/>
		<Footer/>
	</div>
</template>
<script>
	import Header from './todo/Header.vue'
	import Footer from './todo/Footer.jsx'
	import Todo from './todo/todo.vue'
	export default {
		components:{
			Header,
			Footer,
			Todo
		}
	}
</script>
<style lang="stylus" scoped>
	
</style>
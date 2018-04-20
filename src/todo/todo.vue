<template>
	<div id="todo">
		<input type="text"
				class="add-input"
				autofocus="autofocus"
				placeholder="接下来做什么？"
				@keyup.enter="addTodo" 
		/>
		<Item :todo="todo"
			  v-for="todo in filterData"
			  :key="todo.id"
			  @deletedItem="del"
		/>
		<Tabs :todos="todos"
			  :filter="filter"
				@toggle="toggleFilter"
				@clearFinish="clearFinish"
		/>
	</div>
</template>
<script>
	import Item from './item.vue'
	import Tabs from './tabs.vue'
	export default {
		name:'todo',
		data(){
			return {
				todos:[],
				nums:0,
				filter:'all'
			}
		},
		components:{
			Item,
			Tabs
		},
		computed:{
			filterData(){
				if(this.filter=='all'){
					return this.todos
				}
				const completed = this.filter==='completed'
				return this.todos.filter(todo => completed === todo.completed)
			}
		},
		methods:{
			addTodo(e){
				if(e.target.value.trim()){
					this.todos.unshift({
						id:this.nums++,
						content:e.target.value.trim(),
						completed:false
					});
					e.target.value="";					
				}else{
					alert('傻X，输入不能为空!-_-')
				}
			},
			del(id){
				this.todos.splice(this.todos.findIndex(num=>num.id===id),1)
			},
			toggleFilter(state){
				this.filter = state
			},
			clearFinish(){
				this.todos = this.todos.filter(todo => !todo.completed)
			}
		}
	}
</script>

<style lang="stylus" scoped>
    .real-app {
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>
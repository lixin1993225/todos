<template>
	<div class="helper">
		<span class="left">{{unFinishedTodoLength}} items left</span>
		<span class="tabs">
			<span
				v-for="state in states"
				:key="state"
				:class="[state,filter === state?'actived':'']"
				@click="toggleFilter(state)"
			>{{state}}</span>
		</span>
		<span class="clear" @click="clearAllCompleted()">
			Clear
		</span>
	</div>
</template>

<script>
	export default{
		props:{
			todos:{
				type:Array,
				required:true
			},
			filter:{
				type:String,
				required:true
			}
		},
		data(){
			return {
				states:['all','active','completed']
			}
		},
		computed:{
			unFinishedTodoLength(){
				return this.todos.filter(todo=>!todo.completed).length
			}
		},
		methods:{
			toggleFilter(state){
				this.$emit('toggle',state)//这里之所以要把子组件的事件传递到上一层是因为这个变量是在父组件定义的
			},
			clearAllCompleted(){
				this.$emit('clearFinish')
			}
		}
	}
</script>

<style lang="stylus" scoped>
    .helper {
        font-weight 100
        display flex
        justify-content space-between
        padding 5px 0
        line-height 30px
        background-color #ffffff
        font-size 14px
        font-smoothing: antialiased;
    }

    .left, .clear, .tabs {
        padding 0 10px
        box-sizing border-box
    }

    .left, .clear {
        width 150px
    }

    .left {
        text-align left
    }

    .clear {
        text-align: right
        cursor pointer
    }

    .tabs {
        width 200px
        display flex
        justify-content space-around
        * {
            display inline-block
            padding 0 10px
            cursor pointer
            border 1px solid rgba(175, 47, 47, 0)
            &.actived {
                border-color rgba(175, 47, 47, 0.4)
                border-radius 5px
            }
        }
    }
</style>
<template>
<div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter='add' v-model="title" />
</div>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    props: {
        //指定了属性名/类型/必要性
        addData: {
            type: Function,
            required: true
        }
    },
    methods: {

        add() {
            //去除空格
            //如果只有有空格进行提示输入
            const title = this.title.trim()
            if (!title) {
                alert('请输入内容')
                return;
            }
            //根据输入的数据准备一个todo对象
            const todo = {
                id: Date.now(),
                complete: false,
                title: title

            }
            //向todo中添加数据
            this.addData(todo)
            this.title = ''
        }
    },
};
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

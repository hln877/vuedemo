<template>
<div class="todo-container">
    <div class="todo-wrap">
        <Header :addData='addData'></Header>
        <List :todos='todos'></List>
        <Footer></Footer>
    </div>
</div>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
export default {
    components: {
        Header,
        List,
        Footer,
    },
    data() {
        return {
            todos: [{
                    id: 1,
                    title: 'AAA',
                    complete: false
                },
                {
                    id: 2,
                    title: 'BBB',
                    complete: true
                },
                {
                    id: 3,
                    title: 'CCC',
                    complete: false
                }
            ]
        }
    },
    methods: {
        //todo形参接收
        addData(todo) {
            this.todos.unshift(todo)
        }
    },
};
</script>

<style scoped>
/*app*/
.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>

//入口js
import Vue from "vue"  
import App from './App.vue'
import './base.css'

new Vue({
    // 对于 components 对象中的每个 property 来说，
    // 其 property 名就是自定义元素的名字，其 property 值就是这个组件的选项对象。
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})
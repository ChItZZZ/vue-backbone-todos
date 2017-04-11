// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import css from './css/reacttodos.css'
import TodoList from './backbone/todoList';

var todoList = new TodoList();
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App :collection="todoList"/>',
  components: { App }
})

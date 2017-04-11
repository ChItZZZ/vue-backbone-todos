<template>
    <section id="main">
        <input id="toggle-all" type="checkbox" :checked="0 === this.props.collection.remaining().length"
               :onChange="this.toggleAllItemsCompleted"/>
        <label htmlFor="toggle-all">
            Mark all as complete
          </label>
        <TodoListComponent :collection="this.props.collection"/>
        <FooterComponent :clearCompletedItems="this.props.clearCompletedItems"
                         :itemsRemainingCount="this.props.collection.remaining().length"
                         :itemsDoneCount="this.props.collection.done().length"/>
    </section>
</template>
<script>
    import TodoListComponent from  './TodoListItemComponent.vue'
    import FooterComponent from './FooterComponent.vue'
    export default {
        components: [TodoListComponent, FooterComponent],
        data(){

        },
        props: ['clearCompletedItems', 'collection', 'toggleAllItemsCompleted']
    }
</script>

<template>
    <footer>
        {{this.props.clearCompletedButton}}
        <div class="todo-count">
            <b>{{this.props.itemsRemainingCount}}</b>
            {{1 === this.props.itemsRemainingCount ? " item" : " items"}} left
        </div>
    </footer>
</template>
<script>
    export default {
        data(){

        },
        props: ['clearCompletedItems', 'itemsRemainingCount', 'itemsDoneCount']
    }
</script>
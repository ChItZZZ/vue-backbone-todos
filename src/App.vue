<template>
    <div id="app">
        <div>
            <header>
                <h1>Todos</h1>
                <form onSubmit={this.handleTitleFormSubmit}>
                    <input placeholder="What needs to be done?" type="text" name="title"
                           onChange={this.handleTitleChange}
                           value={this.state.title}/>
                </form>
            </header>
            <MainComponent clearCompletedItems={this.clearCompletedItems}
           collection={this.props.collection}
           toggleAllItemsCompleted={this.toggleAllItemsCompleted} />
        </div>

    </div>
</template>

<script>
    import MainComponent from './components/MainComponent.vue'
    export default {
        components:[MainComponent]
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

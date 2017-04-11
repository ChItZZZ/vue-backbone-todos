<template>
    <li :class="this.props.model.get('done') ?'done' : ''">
        <div class="view" onDoubleClick="this.startEditing" :style="viewStyles">
            <input class="toggle" type="checkbox"
                   checked="this.props.model.get('done')"
                   onChange="this.toggleDone"/>
            <label>{this.props.model.get("title")}</label>
            <a class="destroy" onClick={this.destroy}></a>
        </div>
        <input class="edit" ref="editInput" type="text"
               :onBlur="this.stopEditing"
               :onChange="this.setTitle"
               :onKeyPress="this.handleEditKeyPress"
               :style="inputStyles"
               :value="this.props.model.get('title')"/>
    </li>

</template>
<script>
    export default {}
</script>
/**
 *
 * Created by my on 17/4/11.
 */

var Todo = Backbone.Model.extend({

    // Default attributes for the Todos item.
    defaults: function() {
        return {
            title: "",
            done: false
        };
    }

});

var TodoList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: Todo,

    // Save all of the todos items under the `"todos-react"` namespace.
    localStorage: new Backbone.LocalStorage("todos-react"),

    // Filter down the list of all todos items that are finished.
    done: function() {
        return this.where({done: true});
    },

    // Filter down the list to only todos items that are still not finished.
    remaining: function() {
        return this.where({done: false});
    }

});


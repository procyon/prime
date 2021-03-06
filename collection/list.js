/*
list
 - to be used with any object that has a length and numeric keys
 - generates generics
*/"use strict"

var shell = require("../util/shell")

// set, get, count, each, map, filter, every, some, index, merge, remove, keys, values

var list = shell({

    inherits: require("../es5/array"),

    set: function(i, value){
        this[i] = value
        return this
    },

    get: function(i){
        return (i in this) ? this[i] : null
    },

    count: function(){
        return this.length
    },

    each: function(method, context){
        for (var i = 0, l = this.length; i < l; i++){
            if (i in this && method.call(context, this[i], i, this) === false) break
        }
        return this
    },

    backwards: function(method, context){
        for (var i = this.length - 1; i >= 0; i--){
            if (i in this && method.call(context, this[i], i, this) === false) break
        }
        return this
    },

    index: function(value){
        var index = list.indexOf(this, value)
        return index === -1 ? null : index
    },

    remove: function(i){
        return list.splice(this, i, 1)[0]
    },

    keys: function(){
        return list.map(this, function(v, i){
            return i
        })
    },

    values: function(){
        return list.slice(this)
    }

})

module.exports = list

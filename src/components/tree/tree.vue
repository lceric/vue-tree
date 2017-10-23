<template>
  <div class="lg-tree-wrapper">
    <node
      v-for="item,index in data"
      :key="index"
      :data="item"
      visible
      :iconfont="icon"
    ></node>
  </div>
</template>

<script>
  import Node from './node.vue'
  import treeBus from './treebus.js'
  export default {
    components: {
      Node
    },
    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      },
      icon: {
        type: Array,
        default: function () {
          return ['chevron-down', 'chevron-right']
        }
      }
    },
    created () {
      treeBus.$on('on-toggle-expand', (status, node, parent) => {
        this.$emit('toggle-expand', status, node, parent)
      })
      treeBus.$on('on-click-node', (node, parent) => {
        this.$emit('click-node', node, parent)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    list-style: none; 
  }
</style>

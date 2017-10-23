<template>
    <div class="hello">
      <tree
        :data="menu"
        visible
        :icon="['chevron-down', 'chevron-right']"
        @toggle-expand="toggleExpandHandler"
        @click-node="clickNodeHandler"
      ></tree>
    </div>
  </template>
  
  <script>
    import Tree from '@/components/tree/tree.vue'
    import axios from 'axios'
    export default {
      components: {
        Tree
      },
      data () {
        return {
          menu: []
        }
      },
      methods: {
        toggleExpandHandler: function (status, node, parent) {
          console.info(status)
          console.info(node.title)
          console.info(parent)
        },
        clickNodeHandler: function (node, parent) {
          console.info(node.title)
          console.info(parent.title)
        }
      },
      created () {
        let vm = this
        // 获取菜单数据
        axios.get('../../static/menu.json')
        .then(res => {
          vm.menu = res.data
        })
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  
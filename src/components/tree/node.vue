<template>
  <ul v-show="visible" class="lg-tree">
    <li class="lg-tree-item">
      <div class="lg-tree-content">
        <span class="lg-tree-icon" @click="handleExpand" v-if="data.children && data.children.length > 0">
          <i class="fa " :class="`fa-${icon}`"></i>
        </span>
        <tree-render v-if="data.render" :render="data.render" :node="data" :parentNode="parentNode" @click="clickNode(data, parentNode)"></tree-render>
        <span @click="clickNode(data, parentNode)" v-else>
          {{ data.title }}
        </span>
      </div>
      <tree-node v-for="item,index in data.children" :key="index" :visible="data.expand" :data="item" :parentNode="data" :iconfont="iconfont"></tree-node>
    </li>
  </ul>
</template>

<script>
  import render from './render.js'
  import treeBus from './treebus.js'
  export default {
    name: 'TreeNode',
    components: {
      'tree-render': render
    },
    data () {
      return {
        menu: [
          {
            title: '新生入学片',
            children: [
              {
                title: '新生入学手续'
              }
            ]
          },
          {
            title: '研究生奖助体系'
          },
          {
            title: '研究生出国（境）'
          },
          {
            title: '研究生“绿色通道”'
          }
        ]
      }
    },
    computed: {
      icon: function () {
        return this.data.expand ? this.iconfont[0] : this.iconfont[1]
      }
    },
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      },
      parentNode: {
        type: Object,
        default: function () {
          return {}
        }
      },
      visible: {
        type: Boolean,
        default: false
      },
      iconfont: {
        type: Array,
        default: function () {
          return ['hand-o-down', 'hand-o-right']
        }
      }
    },
    methods: {
      handleExpand: function () {
        this.$set(this.data, 'expand', !this.data.expand)
        treeBus.$emit('on-toggle-expand', this.data.expand, this.data, this.parentNode)
      },
      clickNode: function (node, parentNode) {
        treeBus.$emit('on-click-node', node, parentNode)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lg-tree{
    margin-bottom: 0;
    margin-top: 6px;
    padding-left: 0;
  }
  .lg-tree ul{
    padding-left: 19px;
  }
  .lg-tree li {
    list-style: none;
  }
  .lg-tree .lg-tree-content{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .lg-tree .lg-tree-icon{
    width: 16px;
    display: inline-block;
    vertical-align: center;
    margin-right: 3px;
    cursor: pointer;
  }
  .lg-tree .lg-tree-item{
    margin-bottom: 6px;
  }
</style>
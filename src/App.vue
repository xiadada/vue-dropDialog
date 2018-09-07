<template>
  <div id="app">
    <button @click="openDropDialog('dropDialogBtn')" ref="dropDialogBtn" id="dropDialogBtn">点击我出现dropdialog</button>
    <drop-dialog :is-show="getDropDialogOptions['dropDialogBtn'].isShow" :top-distance="getDropDialogOptions['dropDialogBtn'].topDistance" :left-distance="getDropDialogOptions['dropDialogBtn'].leftDistance" ref="dropDialogBtn-dropDialog" id="dropDialogBtn-dropDialog">
      <div class="content" slot="drop-dialog-content">
        
      </div>
    </drop-dialog>
  </div>
</template>

<script>
  import DropDialog from './components/DropDialog'
export default {
  name: 'App',
  data(){
    return {
      // options: {
      //   isShow: false,
      //   topDistance: null,
      //   leftDistance: null
      // }
    }
  },
  components: {
    'drop-dialog': DropDialog
  },
  computed: {
    getDropDialogOptions:{
      //拿到下拉框的参数
      get(){
        return this.$store.getters.getDropDialogOptions;
      },
      set(){

      }
    }
  },
  methods: {
    //利用vuex这样可以多个页面使用一个方法
    openDropDialog(param){
      var that = this;
      this.$store.commit('openDropDialogs',{param: param,that: that})
    }
  },
  mounted(){
    //编译好的Html挂载到页面完成后执行的事件钩子，该钩子函数执行时所有的DOM挂载和渲染都已完成，此钩子函数中一般会做一些ajax请求获取数据进行数据初始化
    /*let h = this.$refs.dropDialogBtn.offsetHeight;//点击会出下拉框的元素自身的高度
    this.options.topDistance = h+13;
    //下拉框距离最近的相对定位的祖先元素左边的距离
    this.options.leftDistance = this.$refs.dropDialogBtn.offsetLeft + this.$refs.dropDialogBtn.offsetWidth/2 -  this.$refs.dropDialogContainer.widNum/2;*/
  },
}
</script>

<style lang="scss">
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		//对应的一些属性，存储数据的，设置属性
		isShowDropDialog: {
			dropDialogBtn: {
				id: 'dropDialogBtn-dropDialog',
				isShow: false,
				topDistance: null,
				leftDistance: null
			}

		}
	},
	getters: {
		//里面对应的一些方法，用来获取到数据的属性的状态
		getDropDialogOptions: state => state.isShowDropDialog
	},
	mutations: {
		//主要用来更改里面的一些属性的状态
		openDropDialogs(state,option){
	    	state.isShowDropDialog[option.param].isShow = true;
	      	option.that.$nextTick(() => {
	      	  	//$nextTick效果与mounted差不多
	      	  	//可以用this.$refs去获取到元素的属性和方法，包括子组件元素的
	      	  	// console.log(this.$refs.dropDialogContainer.widNum);
	      	  	// 疑问？为什么这里不能直接获取到子组件元素自身的高度，能通过获取到元素属性的方法获得
	      	  	// console.log(this.$refs.dropDialogContainer.dropDialogContainerWidth);
	      	  	// console.log(document.getElementById('drop-box').offsetWidth);//这个可以获得宽度
	        	let h = option.that.$refs[ option.param].offsetHeight;//点击会出下拉框的元素自身的高度
	      	  	state.isShowDropDialog[option.param].topDistance = h+13;
	      	  	//下拉框距离最近的相对定位的祖先元素左边的距离
	      	  	let dropDialogContainer = option.param+'-dropDialog';
	      	  	state.isShowDropDialog[option.param].leftDistance =  option.that.$refs[option.param].offsetLeft +  option.that.$refs[option.param].offsetWidth/2 - option.that.$refs[dropDialogContainer].widNum/2;

	        	function clickEvent(e){
	        		//点击下拉框以外的地方，下拉框消失
	        		console.log('aaa')
		        	if (e.target.id == option.that.$refs[option.param].id || e.target.id == option.that.$refs[option.param+'-dropDialog'].id){
		        		state.isShowDropDialog[option.param].isShow = true;
		        		console.log('aaa');
		        	}else{
		        	    state.isShowDropDialog[option.param].isShow = false;
		        	}
	        	}
	        	document.addEventListener('click',clickEvent,true);
	        	document.removeEventListener('click',clickEvent,false);
	      	})
	    }
	},
	actions: {
		//应用mutations

	}
})
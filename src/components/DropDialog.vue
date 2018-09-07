<template>
	<div class="drop-dialog-container" v-if="isShow" :style="{width: widNum+'px',top: topDistance+'px',left: leftDistance+'px'}" :id="id">
		<div class="drop-dialog-point"></div>
		<slot name="drop-dialog-content"></slot>
	</div>
</template>

<script>
	export default({
		props: {
			isShow: {
				//组件是否显示，默认不显示
				type: Boolean,
				default: false,
				require: true //必须的参数
			},
			widNum: {
				type: Number,
				default: 326
			},
			topDistance: {
				type: Number,
				default: 0
			},
			leftDistance: {
				type: Number,
				default: 0
			},
			id: {
				type: String,
				default: 'drop-dialog'
			}
		}
	})
	
</script>
<style lang="scss" scoped>
.drop-dialog-container{
	position: absolute;
    box-sizing: border-box;
    padding: 25px 20px;
    border-radius: 2px;
    color: #909090;
    font-size: 11px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    border: 1px solid hsla(220,6%,72%,.5);
    cursor: default;
    z-index: 11;
    .drop-dialog-point{
    	position: absolute;
    	left: 50%;
    	top:  -3px;
    	width: 18px;
    	height: 18px;
    	border-top: 1px solid hsla(220,6%,72%,.5);
    	border-left: 1px solid hsla(220,6%,72%,.5);
    	background-color: #fff;
    	transform: rotate(45deg) translate(-50%);
    }
}
	
</style>
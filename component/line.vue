<template>
		<view class="floorTitle">
			<view class="title">
				{{name}}
			</view>
			<view class="line">
				
			</view>
		</view>
	
</template>

<script>
	export default{
		props:['name']
	}
</script>

<style>
	.floorTitle{
		height:100px;
	}	
	.floorTitle .title{
		text-align: center;
		font-size: 25px;
		line-height:50px;
		color:#333333;
		font-weight: 100;
		font-family: 华文隶书;
	}
	.floorTitle .line{
		width:64px;
		height:3px;
		background-color: #007AFF;
		margin: 0 auto;
	}
</style>

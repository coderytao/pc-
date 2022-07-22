<template>
	 
	<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="white" indicator-color="#C0C0C0"
	
	>
	                       <swiper-item v-for="(item,index) in comond" :key="index">
	                           <view class="uni-bg-red" >
											<navigator url="#">
												<image :src="imgUrl+item.image" mode="">
													
												</image>
											</navigator>
										 </view>
	                       </swiper-item>
	                     
	                   </swiper>
		
</template>

<script>
	export default{
		props:['comond'],
		//<image src="../static/mushroom/banner1.jpg"></image>
	}
</script>

<style>
	.swiper{
		 width:100%;
		 height: 240px;
	}
	 .uni-bg-red image{
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		width: 100%;
	}
</style>

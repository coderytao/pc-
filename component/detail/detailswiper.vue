<template>
	<swiper class="detailswiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#0bc9fd">
	                      <swiper-item>
	                          <view class="">
											<image src="../../static/image/dimg1.jpg"></image>
										</view>
	                      </swiper-item>
	                      <swiper-item>
	                          <view class="swiper-item uni-bg-green">
											<image src="../../static/image/dimg2.jpg"></image>
										</view>
	                      </swiper-item>
	                      <swiper-item>
	                          <view class="swiper-item uni-bg-blue">
											<image src="../../static/image/dimg3.jpg"></image>
										</view>
	                      </swiper-item>
									<swiper-item>
									    <view class="swiper-item uni-bg-blue">
											<image src="../../static/image/dimg4.jpg"></image>
										</view>
									</swiper-item>
	                  </swiper>
</template>

<script>
	
</script>

<style>
	.detailswiper{
		width:100%;
		height:360px;
		
	}
	.detailswiper image{
		width:260px;
		height:260px;
		margin:0 auto;
		display: block;
	}
</style>

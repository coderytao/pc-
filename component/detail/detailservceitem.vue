<template>
	
	<view class="service">
				 <view class="bg">
					 
				 </view>
				 <view class="servicecontent">
					 <view class="serviceContentTitle">
			            服务说明<i class="iconfont" @click="closedown">&#xe61a;</i>
					 </view>
							 <view class="servicelist" >
								 <view class="serviceItem"  v-for="(item,index) in content" :key="index">
									 
									 <view class="serviceitemtitle">
										 <i class="iconfont">&#xe630;</i>
										 <text>{{item.title}}</text>
									 </view>
									 <view class="serviceitemcontent">
								     {{item.summary}}
									 </view>
									
									 </view>
								 </view>
							 </view>
						
							 <view class="servicebottom" @click="closedown()">
								 确定
							 </view>
				 </view>
				 
	</view>
</template>

<script>
	export default{
	props:['content'],
	// 花呗分期是有蚂蚁联合魅族商城共同退出的"现购物后付款"的支付体验，支持预支蚂蚁花呗分期，免息可达41天，可选择3，6，12日期还款
		data(){
			return {
				
			}
		},
		methods:{
			closedown(){
				
				this.$emit('close')
			},
			
			
		}
		
	}
</script>

<style>
	.service{
		position: fixed;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	.bg{
		position: fixed;
	    top:0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,0.5);
	}
	.serviceContentTitle{
		height: 100px;
		text-align: center;
		font-size: 22px;
		line-height: 50px;
		position: relative;
	}
	.servicecontent{
		position: absolute;
		height: 550px;
		background: #FFFDEF;
		bottom: 0;
		width: 100%;
	}
	.serviceContentTitle i{
		position: absolute;
		right: 20px;
		top:0px;	
	}
	.serviceitemtitle i{
		margin-left: 20px;
		margin-right: 10px;
		color: #95e1df;
	}
	.serviceitemtitle text{
		font-size: 20px;
		
	}
	.serviceitemtitle {
		line-height:0px;
	}
	.serviceItem{
	   padding: 10px;
		border-bottom: 1px solid #e5e5e5;
	}
	.serviceitemcontent{
		color:#999999;
		font-size: 14px;
		line-height: 33px;
		padding:0 45px;
	}
	.servicebottom{
		position: absolute;
		bottom:0;
		height:60px;
		background: #007AFF;
		width:100%;
		text-align: center;
		font-size: 25px;
		line-height: 60px;
	}
</style>

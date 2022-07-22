<template>
	
	<view class="shopList">
				   <view class="shopListItem" v-for="(item ,index) in content" :key="index">
					  			<navigator :url="'../detail/detail?id='+item.id">   
					   <image :src="imgUrl+item.mainimage" class="shopimg"></image>
					 
					 <view class="shoptitle">
					 					{{item.smalltitle}}
					 </view>
					 <view class="shopActive">
					 					 <view class="shopTab">
					 						免息
					 					 </view>
					 					 <view class="shopActiveTxt">
					 					 				{{item.summary}}
					 					 </view>
					 </view>
					 <view class="price">
					 					${{item.price}}
					 </view>
					 </navigator>
				   </view>
				
				  
	</view>
	
	
</template>

<script>
	export default{
    	props:['content'],
		}
</script>

<style>
	.shopList{
	   flex-wrap: wrap;
	   justify-content: space-between;
	   display: flex;
	}
	.shopListItem{
		width:180px;
		height:360px;
		background:#FFFDEF;
		overflow: hidden;
		margin-top: 10px;
	}
	.shopimg{
		height: 206px;
		width: 200px;
		display: block;
		margin: 0 auto 0;
		padding-top: 40rpx;
	}
	.shoptitle{
		line-height: 30px;
		height: 30px;
		text-align: center;
		font-size: 20rpx
		}
		.shopActive{
			height: 20px;
			width: 300px;
			marign:0 auto;
			border: 1px solid #FFFFFF;
			display: flex;
		}
		.shopTab{
			width: 40px;
			background: #FFFDEF;
			font-size: 15px;
			text-align: center;
		}
		.shopActiveTxt{
			width: 300px;
			font-size: 16px;
			color: #d90000;
			text-overflow: ellipsis;
			white-space: nowrap;
			line-height: 20px;
		}
		.price{
			
			font-size: 18px;
			color: #00C3F5;
			text-align: center;
		}
</style>

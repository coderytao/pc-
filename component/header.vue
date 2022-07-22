<template>
	<view>
		<view class="header">
			<view class="navbar">
					<view class="search">
						<image src="../static/mushroom/search.png" mode=""></image>
					</view>
					<view class="logo">
						 <image src="../static/mushroom/icon.png" mode=""></image>
					</view>
					<view class="cart">
						<image src="../static/mushroom/shop.png" mode=" "></image>
					</view>
				</view>
				    <view class="menutab ">
						<view class="menutabitem menuActive">
							推荐
						</view>
						<view class="menutabitem " v-for="(item,index) in content ":key="index">
						   {{item.catename}}
						</view>
						
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['content']
	}
</script>

<style>
	.header{
		height:55px;
		position:fixed;
		width: 100%;
		background:#fff ;
	    z-index:9;
	}
	.status{
		  height:var(--status-bar-height);
		  width: 100%;
	}
	.navbar{
	height:35px;
	display: flex;
	margin:0px 20rpx;
	
	align-items: center;
	justify-content:space-between ;
	}
	.navbar .search image
	{
	width: 20px;
	height:20px;
	
	}
	.navbar .logo image
	{
	width: 40px;
	height:20px;
	}
	.navbar .cart image
	{
	width: 20px;
	height:20px;
	}
		
	.menutab{
		height:55px;
		display: flex;
		margin:0 10px;
		justify-content: space-between;
	    text-align: center;
	}
		
	.menutabitem{
		font-size: 14px;
		color:#00000;
		width:60px;
		height:20px;
		line-height:20px;
	}
	.menutab .menutabitem .menuActive{
		color: #4CD964;
		border-bottom:1px solid #4CD964;
	}
</style>

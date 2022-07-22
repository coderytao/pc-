<template>
	<view>
	<view class="service" >
		<view class="serviceItem"  v-for="(item,index) in active" :key="index">
		 <image :src="imgUrl+item.image" >
		 
		 </image>
		{{item.title}}
		</view>
	
		
	</view>
	<view class="shopNav">
					<view class="shopNavItem"  v-for="(item,index) in icon" :key="index">
						 <navigator :url="item.url" hover-class="navigator-hover">
						<image :src="imgUrl+item.image">
							
						</image>
						<text>{{item.title}}</text>
						</navigator>
					</view>
					
				</view>
		
	</view>
</template>

<script>
	export default{
		props:['active','icon'],
		/*	<view class="serviceItem">
	<view class="serviceItem">
			<image src="">
				
			</image>
			满80免运费
		</view>
		<view class="serviceItem">
			<image src="">
				
			</image>
			七天无理由退货
		</view>
*/
	}
</script>

<style>
	.service{
		display: flex;
		height:70px;
		font-size: 12px;
		color:#3F536E;
		justify-content: center;
		
	}
		.serviceItem{
			line-height: 65px;
			display: flex;
			align-items: center;
		}
	.serviceItem image{
		width: 12px;
		height:12px;
		margin-right: 5px;
	}
	.shopNav{
		height:225px;
		display: flex;
		margin-left:0px;
		justify-content: center;
	}
		
	.shopNavItem image{
		width:60px;
		height:60px;
		margin-left: 10px;
	}
	.shopNavItem text{
		display: block;
		font-size:#000000;
		text-align: center;
		font-size: 13px;
	}
</style>

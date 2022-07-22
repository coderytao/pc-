<template>
	<view class="floorTable">
			<view class="tableItem">
				<image :src="imgUrl+content[0].img"></image>
			</view>
			<view class="tableItem" style="background: #7064ca;">
				<view class="bigTitle">
					MEIZU UR 高端
					定制耳机 预约
				</view>
				<view class="smallTitle">
					预约专用私人定制，为你而声预约专用私人定制
	
				</view>
				<view class="smallline">
					
				</view>
				<view class="smallprice">
					￥200
				</view>
			</view>
			<view class="tableItem" style="background: #f65c5c;">
				<view class="bigTitle">
					
					定制耳机 预约
				</view>
				<view class="smallTitle">
					预约专用私人定制，为你而声!
						
				</view>
				<view class="smallline">
					
				</view>
				<view class="smallprice">
					￥200
				</view>
			</view>
			<view class="tableItem">
				<image :src="imgUrl+content[1].img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['content']
	}
</script>

<style>
	.floorTable{
		   display: flex;
		   flex-wrap: wrap;
	 } 
	 .tableItem{
		   width:50%;
		   height: 200px;
	 }
	.tableItem image{
		  width:100%;
		  height:200px;
	}
	.bigTitle{
		  font-size: 15px;
		  padding-top: 10px;
		  padding-left: 15px;
		  padding-right:25px;
	}
	.smallTitle{
		  font-size: 10px;
		  padding-left: 10px;
		  padding-right: 25px;
		  padding-top: 5px;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  -webkit-box-orient:vertical;
		  display: -webkit-box;
		  color:rgba(255,255,255,0.8)
	}
	.smallline{
		  width:30px;
		  height:3px;
		  background-color: #FFFFFF;
		  margin-left: 20px;
		  margin-top: 10px;
	}
	.smallprice{
		  font-size: 20px;
		  color:#FFFFFF;
		  line-height: 80px;
		  margin-left: 10px;
	}
</style>

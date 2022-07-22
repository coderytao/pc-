<template>
	<view class="indexAD">
		<view class="indexADleft">
			
			<template v-if="floor.length>0">
			<navigator>
			<image :src="imgUrl+floor[0].image" mode=""></image>
			</navigator>
			</template>
			
		</view>
		<view class="indexADright">
			
			<view class="indexADrightItem">
				
		         <template   v-if="floor.length>0">
				 <navigator>
		           <image :src="imgUrl+floor[1].image" mode=""></image>
		         </navigator>
				 </template>
				 
				 
			</view>
			
			<view class="indexADrightItem">
				
			      <template  v-if="floor.length>0">
				  <navigator>
			      <image :src="imgUrl+floor[2].image" mode=""></image>
			      </navigator>
				  </template>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['floor']
	}
</script>

<style>
	.indexAD{
		display: flex;
		margin-top: -100px;
		border-top: 10px solid  #f4f4f4;
	} 
	.indexADleft{
		width:50%;
		height:250px;
	}
		
	.indexADleft image{
		width:100%;
		height:300px;
	}
	.indexADrightItem{
		width:50%;
		height:150px;
	}	
	.indexADright{
		width:70%;
	}
	.indexADright image {
		width:200px;
	}
	.indexADrightItem image{
		height:150px;
	}
</style>

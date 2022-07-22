<template>
	<view>
		 <Myindexswiper :comond="detail.image"></Myindexswiper>
		
		 <view class="shopInfo">
		 			 <view class="shop-title">
		 				 <label v-if="detail.tag==1">新品</label>
						  <label v-if="detail.tag==2">促销</label>
						   <label v-if="detail.tag==3">销售</label>
		 				{{detail.title}}
		 			 </view>
		 <view class="shop-summary">
		 			{{detail.summary}}
		 </view>
		 <view class="shop-price-sale">
		 			 <view class="shop-price"><text>￥{{detail.price}}</text><label>￥{{detail.market_price}}</label></view>
		 			 <view class="shop-sale">月销量{{detail.sale}}</view>
		 </view>
		 <view class="shop-assure" @click="showservice">
		 			 <view class="shop-assure-item">
		 				 <i class="iconfont" >&#xe600;</i>全场包邮
		 			 </view>
		 			 <view class="shop-assure-item">
		 				  <i class="iconfont">&#xe63d;</i>7天无理由退货（激活后不支持)
		 			 </view>
		 			 <view class="shop-assure-more">
		 				 <i class="iconfont">&#xe66e;</i>
		 			 </view>
		 </view>
		 </view>
		<view class="shopAttr" @click="showattr(1)">
					 <label>规格</label><text>请选择商品规格尺寸</text>
					 <i class="iconfont">&#xe66e;</i>
		</view>
		<view class="shopTab">
					 <view class="shopTabitem " @click="tabchage(0)"
					 :class="{tabactive:table==0}">
						 图文详情
					 </view>
					 <view class="shopitem" @click="tabchage(1)"
					 :class="{tabactive:table==1}">
						 规格参数
					 </view>
		</view>
		<view class="content" v-if="table==0" >
					 <!--<image src="../../static/image/d1.jpg" mode="widthFix"></image>
					 <image src="../../static/image/d2.jpg" mode="widthFix"></image>
					 <image src="../../static/image/d3.jpg" mode="widthFix"></image>-->
					 <parse :content="detail.content" :imageProp="{'domain':'www.mall.com'}"></parse>
		</view>
		<view class="shopSpace" v-else>
					 <view class="spacetitle">
						 基础信息
					 </view>
					 <view class="spacecontent" v-for="(item ,index) in detail.spec" :key="index" >
						 <view class="spaceleft" >
							{{item.specname}}
						 </view>
						
						 <view class="spaceright">
						 		{{item.specvalue}}		 
						 </view>
						 
					 </view>
					
		</view>
		<view class="detailbottom">
					 <view class="bottomitem">
						 <view class="bottomitemindex">
							 <navigator url="../index/index" hover-class="none" open-type="switchTab">
							 <image src="../../static/mushroom/page1.png"></image>
							 <text>首页</text>
							 </navigator>
						 </view>
						 <navigator url="../cate/cate" hover-class="none" open-type="switchTab"> 
						 <view class="bottomitemindex">
						 					 <image src="../../static/mushroom/shop1.png"></image>
						 					 <text>购物车</text>
						 </view>
						 </navigator>
					 </view>
					 <view class="bottombutton carbutton" @click="showattr(1)">
					 		 加入购物车
					 </view>
					 <view class="bottombutton buybutton" @click="showattr(2)">
					  立即购买
					 </view>
					 
		</view> 
		<Mydetailserviceitem @close="closeservice"v-if="secviceflag" :content="detail.servicelist"></Mydetailserviceitem>
		 <Mydetailshop v-if="attrFlag" @close="attrclose" :image="detail.mainimage" :price="detail.price" :attr="detail.checkAttr" :attrVal="detail.attr" :type="type"></Mydetailshop> 
	</view>
</template>

<script>
	import parse  from "../../component/gaoyia-parse/parse.vue"
	import Mydetailserviceitem from "../../component/detail/detailservceitem.vue"
    import Myindexswiper from "../../component/indexswiper.vue"
	import Mydetailshop from "../../component/detail/detailshop.vue"
	import Mydetailswiper from "../../component/detail/detailswiper.vue"
	export default {
		data() {
			return {
			table:0	,
			secviceflag:false,
			attrFlag:false,//属性弹窗
			detail:[],
			type:1//
			
			}
		},
		onLoad(o){
			console.log(o)
			this.getData(o.id)
			
		},
		methods: {
			//获取数据
			getData(id){
				uni.request({
					url:'http://www.mall.com/api/index/detail/id/'+id,
					success:(res)=>{
						console.log(res.data.data)
					     this.detail=res.data.data;
						 console.log(this.detail.servicelist)
						//this.apiUrl+' /index/detail/id/'+id,
					}
				})
			},
			tabchage(index){
				this.table=index
			},
			//显示服务弹窗
			showservice(){
				this.secviceflag=true;
			},
			//关闭服务弹窗
			closeservice(){
				this.secviceflag=false
			},
			//显示属性弹窗
			showattr(type){
				//购物车页面
				/*if(type==1)
				{
					
				}
				if(type==2)
				{
					this.$back('../order/order')
				}*/
				this.type=type
				this.attrFlag=true
			},
			//关闭弹窗
			attrclose(){
				
				this.attrFlag=false;
			}
		},
		components:{
			Mydetailswiper,
			 Mydetailshop ,
			 Myindexswiper,
			Mydetailserviceitem ,
			 parse 
		}
	}
</script>

<style>
	
	.shopInfo{
		padding: 0 20px;
		border-top: 1px solid #e9e9e9;
	}
	.shop-title{
		line-height: 20px;
		font-size: 20px;
		color:#000000;
		padding-top: 10px;
	}
	.shop-title label{
		display: block;
		width: 60px;
		height: 20px;
		background: #007AFF;
		text-align: center;
		float: left;
		margin-right:5px;
	}
	.shop-summary{
		padding-top: 5px;
		line-height:25px ;
		color: #9a9a9a;
	}
	.shop-price-sale{
		line-height: 25px;
		display: flex;
		justify-content: space-between;
		color: #999;
		font-size: 18px;
		border-bottom: 1px solid #999999;
		}
	
	.shop-price text{
		color: #f0415f;
		font-size:22px;
	}
	.shop-price label{
		text-decoration: line-through;
		margin-left: 10px;
	}
	.shop-assure-item i{
	   font-size: 21px;
	    color: #00c3f5;
	}
	.shop-assure-item{
		font-size: 15px;
		color: #999999;
	}
	.shop-assure{
		height: 60px;
		line-height: 20px;
	}
	.shop-assure-more{
		float: right;
		color: #999999;
		
	}
	
.shopAttr{
		line-height: 60rpx;
		padding: 0 30rpx;
		border-top:5px solid #0086B3;
		border-bottom: 5px solid #222222;
		font-size: 15px;
		color: #999999;
	}
	.shopAttr i{
		float: right;
		color: #999999;
	}
	.shopAttr text{
		color: #000;
		margin-left:10px ;
	}
	.shopAttr label{
		font-size: 18px;
	}
	.shopTab{
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.shopTabitem {width: 50%;
	font-size: 24px;
	font-weight: 30px;
	}
	.shopTabitem.tabactive{
		color: #00c3f5;
		
	}
	.content image{
		width:100%;
	}
	.spacetitle{
		line-height: 40px;
		height: 40px;
		background: #E9E9E9;
		font-size: 14px;
		color:#000000;
		text-indent: 20px;
		text-align: center;
		padding: 10px;
		font-size: 20px;
	}
	.shopSpace{
		margin: 10px 20px ;
		
	}
	.spacecontent{
		line-height: 50px;
		display: flex;
		border-bottom: 1px solid #E9E9E9;
		
	}
	.spaceleft{
		width:150px;
		text-align: center;
		font-size: 22px;
		color: #999999;
		
	}
	.spaceright{
		flex:1;
		color: #000000;
		text-align: center;
	}
	.detailbottom{
		width: 100%;
		height: 50px;
		background: #0077AA;
		position: fixed;
		bottom: 0;
		display: flex;
	}
	.bottombutton{
		width:300px;
		color: #FFFFFF;
		font-size: 18px;
	}
	.carbutton{
		background: #F0AD4E;
		text-align: center;
		line-height: 40px;
	}
	.buybutton{
		background:#017cfe;
		text-align: center;
		line-height: 40px;
	}
	.bottomitem{
		flex:1;
		display: flex;
	}
	.bottomitemindex{
		width:50px;
		height:50px;
		background: #FFFDEF;
		
	}
	.bottomitemindex image{
		width:30px;
		height:30px;
		display: block;
		margin: 0 auto;
	}
	.bottomitemindex text{
		color: #999999;
		font-size: 10px;
	    text-align: center;
		margin-left: 10px;
	}
	
	 
</style>

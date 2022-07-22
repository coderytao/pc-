<template>
	<view class="attrDialog">
		<view class="bg">
			
		</view>
		<view class="attrDialogcontent">
			<view class="contentTop">
				<image :src="imgUrl+image"></image>
			</view>
			<view class="contentTopTxt">
				<text class="price">￥{{price}}</text>
				<text class="attr"></text>
			</view>
			<i class="iconfont" @click="attrclose">&#xe61a;</i>
			<view class="attrlist">
				<view class="attritem" v-for="(item,index) in attr" >
					<view class="attrItemTitle">
						{{item.attrname}}
					</view>
					<view class="attritemval">
						<view class="attrvalitem  activeAttr" v-for="(child,childindex) in item.value" :key="childindex"
						
						>
							{{child}}
						</view>
						
					</view>
				</view>
				
				<view class="attritem">
					<view class="attrItemTitle">
						数量
					</view>
					
					<view class="attritemval">
						<view class="shopNum">
							<view class="button" @click="reduce">-</view>
							<view><input type="text" v-model="number"></input></view>
						    <view class="button" @click="add">+</view>
						</view>
					</view>
					<text class="stock">库存6件</text>
				</view>
			
			</view>
		</view>
		<view class="buttonitem" @click="orderattr">
			{{buttonTxt}}
		</view>
	</view>
</template>

<script>
	export default{
		props:['image','price','attrVal','attr','type'],
		data(){
			return {
				valindex:[],
				checkAttr:'',
				number:1,
				buttonTxt:'',
				num:1,
				attrid:''
			}
		},
		mounted(){
			
			if(this.type==1){
				this.buttonTxt="加入购物车"
				//this.$back("../cart/cart",2)
				
			}
			else{
				this.buttonTxt="立即购买"
				this.$back("../order/order")
			}
		},
		methods:{
			orderattr()
			{
				this.$back("../cart/cart",2)
				this.buttonTxt="加入购物车"
				if(this.type==1){
					this.$request('/member/addcart',{
						"num":this.num,"attrid":this.attrid//获取参数名
					}).then(res=>{
						console.log(res)
						
					})
					
					
				}
				else{
					uni.switchTab({
						url:'../../pages/member/member'
					})
					//this.$back('../oder/order.vue')
					//this.buttonTxt="立即购买"
					
				}
			},
			attrclose()
			{
				this.$emit('close')
			},
			reduce(){
				if(this.number==1 ){
					return ;
				}
				this.number--;
			},
			add(){
				this.number++;
			}
			
		
	}
	
	}
	
</script>

<style>
	.attrDialog{
		position: fixed;
		top:0px;
		bottom:0px;
		right: 0px;
		left:0;
	
	}
	.attrDialog .bg{
		background: rgba(0,0,0,0.5);
		height: 100%;
		width: 100%;
	}
	 .attrDialogcontent{
		 height: 600px;
		 position: absolute;
	     bottom: 0;
		 width: 100%;
		 background: #FFFDEF;
	 }
	 .contentTop{
		 height: 100px;
		 position: relative;
	 }
	 .contentTop image{
		 position: absolute;
		 top:-30px;
		 left:20px;
		 width: 150px;
		 height: 150px;
		
	 }
	 .contentTopTxt{
		 margin-left: 200px;
		 margin-top: -50px;
		 border-bottom: 2px solid #E5E5E5;
		
	 }
	 .contentTopTxt .price{
		 height: 44px;
		 color: #f04;
		 font-size: 24px;
		  display: block;
		 
	 }
	  .contentTopTxt .attr{
		 font-size: 20px;
		 color: #000;
		 line-height: 20px;
		 height: 20px;
	 }
	 .iconfont{
		 position: absolute;
		 right: 20px;
		 top:10px;
		 font-size: 20px;
		 
	 }
	.attrlist{
		 padding: 0 20px;
		 
	 }
	 .attrItemTitle{
		 height: 50px;
		 color: #999999;
		 font-size: 18px;
		 
	}
	.attrvalitem{
		padding: 0 10px;
		border: 1px solid #E5E5E5;
		height: 40px;
		line-height: 40px;
		float: left;
		font-size: 18px;
		color: #666666;
		margin-right: 8px;
	}
	.attrvalitem.activeAttr{
		color: #00c3f5;
		border-color: #00c3f5 ;
	}
	.attritem{
		height: auto;
		overflow: hidden;
	}
	.shopNum{
		width: 180px;
		height: 50px;
		border: 1px solid #e5e5e5;
		display: flex;
		float: left;
		text-align: center;
	}
	.shopNum .button{
		width: 100px;
		line-height: 60px;
		border-right: 5px;
		font-size: 20px;
		align-items: center;
	}
	.shopNum input{
		flex:1;
		width: 100px;
		text-align: center;
	}
	.stock{
		height: 90px;
		line-height: 90rpx;
		font-size: 24px;
		color: #999;
		margin-left: 20px;
	}
	.buttonitem{
		height: 90px;
		line-height: 90px;
		position: absolute;
		bottom:0px;
		background: #0077AA;
		width: 100%;
		text-align: center;
	}
</style>

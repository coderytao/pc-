<template>
	<view  >
		<view class="cartEmpty" style="display: none;">
			<image src="../../static/image/cartEmpty.png" mode=" " class="cartEmptyimage"></image>
		
		<view class="cartEmptyTip">
			亲，你需要登录才能查看购物车哦！
		</view>
		<view class="cartlogin">
		
			<button>立即登录</button>
		
		</view>
		</view>
		
		<view class="cartlistbox" >
			<view class="cartlist">
				<uniSwiperAction>
						<uniSwiperActionItem  :right-options="options2" @click="bindClick($event,index)">
				<view class="cartitem">
					<label>
					<checkbox value="" class="checkbox"> </checkbox>
					</label>
					<view class="mainimg">
						<image src="../../static/image/dimg1.jpg" mode="" class="img"></image>
						
					</view>
					<view class="cartitemcontent">
						<view class="content-title">
							苹果(Apple) ipad2019新款第7代10.2英寸2018款9.7寸air2更新版...
														苹果(Apple) ipad2019新款第7代10.2英寸2018款9.7寸air2更新版...
						</view>
						<view class="content-attr">
							魅族16  pro
						</view>
						<view class="content-price">
							<view class="price">
								￥299.00
							</view>
							<view class="numOption">
								<view class="optionBtn" @click="option1">
									-
								</view>
								<view class="numberTxt">
									<input type="text" v-model="num">
								</view>
								<view class="optionBtn" @click="option2">
									+
								</view>
							</view>
						</view>
						
					</view>
				</view>
				</uniSwiperActionItem>
				</uniSwiperAction>
			</view>
			
	
			<view class="bottom">
				
			</view>
			<view class="cartBottom">
				<lable>
					<checkbox value=" "></checkbox>
					<text>全选</text>
				</lable>
				<view class="button-right">
					<view class="button-price">
						总价:<text>￥299.00</text>
					</view>
					<view class="paybutton">
						<button class="pay">去结算:1件</button>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import uniSwiperAction from '@/component/uni-swipe-action/uni-swipe-action.vue'
	import uniSwiperActionItem from '@/component/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		components: {
		   uniSwiperAction,
		   uniSwiperActionItem
		},
		data() {
			return {
				num:0,
				islogin:'',
				options1: [
					{
						text: '取消置顶'
					}
				],
				options2: [
					{
						text:'删除',
						style: {
							height:"100px",
							backgroundColor: 'red'
						}
					},
					
				],
				cartlist:[],
				imgUrl:this.$imgUrl
		}
				
		},
		onShow() {
			this.getData();
		},
		methods: {
			getData(){
				this.$request("/member/cartlist"
				).then(res=>{
					this.cartlist=res.data
					if(res.tcode==0){
						this.islogin=0;
					}else{
						this.islogin=1;
					}
				})
			},
			option1(){
				this.num--;
				if(this.num<0){
					this.num=0;
				}
			},
			option2(){
				this.num++;
			}
		}
	}
</script>

<style>
.cartEmptyimage{
	width: 200px;
	height: 200px;
	margin:80px 120px;
}
.cartEmptyTip{
	text-align: center;
	line-height: 40px;
	margin-top: -80px;
	color:#d5d5d5;
	font-size: 14px;
}
.cartlogin{
	border-radius: 20px;
	width: 200px;
	height: 30px;
	margin: 20px auto;
	
}
.button{
	background-color: #00C3F5;
	color: #FFFDEF;
}
.cartitem{
	display: flex;
	width: 100%;
	height: 150px;
	padding-top:15px ;
	border-bottom: 1px #D5D5D5 solid;
	border-top:1px #d5d5d5 solid;
}

label checkbox{
	line-height: 150px;
	transform: scale(0.8);
}
.mainimg {
	width: 150px;
}
.checkbox {
 width: 20px;
 height: 20px;
}

.mainimg image{
	width: 120px;
	padding:10px 10px;
	height: 120px;
} 
.cartitemcontent{
	padding:5px 5px;
}
.content-title{
	overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
}
.content-price{
	margin-top: 15px ;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.price{
	color:#DC143C ;
}
.content-attr{
	color:#D5D5D5;
	margin-top:10px;
}
.numOption{
	width: 100px;
	height: 25px;
	display: flex;
	border: 1px solid black;
}
.optionBtn{
	width: 100px;
	height: 25px;
	border-right: 1px solid #D5D5D5;
	border-left: 1px solid #D5D5D5;
	text-align: center;
	
	}
	.numberTxt{
		text-align: center;
		padding-top: 3px;
		
	}
	.numberTxt input{
		font-size: 14px;
	}
	.bottom{
		
			height:var(--window-bottom);
			}
	.cartBottom{
		font-size: 14px;
		width: 100%;
		height: 60px;
		display: flex;
		position: fixed;
		justify-content: space-between;
		align-items: center;
		background-color: #F0F8FF;
		border-top:1px #d5d5d5 solid;
		bottom:var(--window-bottom);
	}
	.button-right{
		display: flex;
		
	}
	.cartBottom checkbox{
		transform: scale(0.8);
	}
	.button-price{
		padding:20px 18px;
	}
	.button-price text{
		color: red;
	}
	.paybutton{
		width: 110px;
		height: 50px;
		padding-top:13px;
	}
	
   .paybutton .pay{
	   background-color: #23BAEF;
	   color: #FFFDEF;
	  font-size: 14px;
	   border-radius: 18px;
	    }
	</style>

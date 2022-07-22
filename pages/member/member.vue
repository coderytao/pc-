<template>
	<view>
		<view class="member-Top">
			<template v-if='!member.image'>
				<image src="../../static/image/empty-tx.png" class="memeberimg">
					
				</image>
			</template>
			<template v-else>
				
				<image src="../../static/image/member-tx.png" class="member-tx"></image>
			</template>
			
		<view class="user-info">
			<view class="loginReg" v-if="code==0">
				<navigator url="../login/login">
				登录/注册
				</navigator>
			</view>
			<view class="loginInfo" v-else>
				
				<template v-if='!member.nickname'>
					<text class="username">英特网络</text>
				</template>
				<template v-else>
					<text class="nickname">{{member.nickname}}</text>
				</template>
				
			</view>
			
		</view>
		<view class="ewm">
			<image src="../../static/image/ewm.png" >
				
			</image>
			
	    </view>
		<view class="membericon">
			<i class="iconfont">&#xe611;</i>
			<i class="iconfont">&#xe61b;</i>
		</view>
	</view>
	<view class="orderstatus">
		<view class="orderitem">
			<image src="../../static/image/member-icon1.png"></image>
			<text>待付款</text>
		</view>
		<view class="orderitem">
			<image src="../../static/image/member-icon2.png"></image>
			<text>待收货</text>
		</view>
		<view class="orderitem">
			<image src="../../static/image/member-icon3.png"></image>
			<text>待评价</text>
		</view>
		<view class="orderitem">
			<image src="../../static/image/member-icon4.png"></image>
			<text>个人订单</text>
		</view>
	</view>
	<view class="spliteline">
		
	</view>
	<view class="menulist">
		<view class="menuitem" @click="href('../address/address')" >
			
			<image src="../../static/image/member-menu1.png"></image>
			
			<text >收获地址</text>
			
		</view>
		<view class="menuitem">
			<image src="../../static/image/member-menu2.png"></image>
			<text>在线客服</text>
		</view>
		<view class="menuitem">
			<image src="../../static/image/member-menu3.png"></image>
			<text>邀请有礼</text>
		</view>
	    <view class="menuitem">
			<image src="../../static/image/member-menu4.png"></image>
			<text>关于我们</text>
		</view>
		
	</view>
	<view class="logout" >
		<navigator url="../index/index">
		退出登录
		</navigator>
	</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				code:'',
				member:[]
			}
		},
		onLoad(){
			
		},
		onShow(){
			this.getData()
		},
		methods:{
			href(url)
			{
				this.$href(url)
			},
			getData(){
				/*uni.request({
					url:'http://www.mall.com/api/member/index',
					method:'POST',
					
					header:{
						'token':uni.getStorageSync('token')
					},
					success:(res)=>{
						console.log(res.data)
						if(res.data.tcode==0)
					     {
							this.code=0
							 
						 }
						 if(res.data.code==1)
						 {
							 this.code=1,
							 this.member=res.data.data
						 }
						 if(res.data.code==3){
							 this.code=0;
							 uni.setStorageSync('token','')
						 }
						 if(res.data.code==4){
							 this.code=0;
							 uni.setStorageSync('token','')
						 }
					}
				})*/
				this.$request('/member/index').then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>
<style>
	
	.member-Top{
		height: 180px;
		background:url(../../static/image/member-top.png) no-repeat;
		background-size: 100% 180px;
		position: relative;
	}
	.memeberimg{
		height: 50px;
		width: 50px;
		position: absolute;
		top:100px;
		left:10px;
		border-radius: 50%;
	}
	.member-tx{
		height: 50px;
		width: 50px;
		position: absolute;
		top:100px;
		left: 30px;
		border-radius: 50%;
	}
	.loginReg{
		height: 45px;
		width: 120px;
		color: #FFFDEF;
		font-size: 16px;
		line-height: 130px;
		position: absolute;
		left: 90px;
		top:60px;
		
	}
	.loginInfo{
		position: absolute;
		left: 90px;
		top:105px;
	}
	.loginInfo text.username{
		line-height: 22px;
		font-size: 15px;
		color:#FFFDEF;
		display: block;
	}
	.loginInfo text.nickname{
		line-height: 18px;
		font-size: 15px;
		color:#FFFDEF;
		display: block;
	}
	.ewm{
		width: 20px;
		height: 20px;
		position: absolute;
		top:100px;
		right: 20px;
	}
	.ewm image{
		width: 20px;
		height: 20px;
	}
	.membericon{
		position: absolute;
        top:50px;
		right: 15px;
		color: #FFFDEF;
		
	}
	.membericon i{
		margin-left: 15px;
	}
	.orderstatus{
		display: flex;
		
	}
	.orderitem{
		width: 30%;
	}
	.orderitem image{
		width: 40px;
		height: 30px;
		display: block;
		margin:10px auto 0;
		
	}
	.orderitem text{
		font-size: 14px;
		display: block;
		line-height: 20px;
		text-align: center;
		padding-bottom:10px;
		}
	.spliteline{
		height: 10px;
		width: 100%;
		background: #00C3F5;
	}
	.menuitem image{
		width: 25px;
		height: 25px;
		margin-right: 25rpx;
	}
	.menuitem {
		height: 90rpx;margin:0 30rpx;border-top: 1rpx solid #e5e5e5;
		font-size:28rpx ;display: flex;align-items: center;
		background: url(../../static/image/more.png) no-repeat;
		background-size: 26rpx 26rpx;
		background-position: right center;
	}
	.menuItem:nth-of-type(1){border-top:none;}
	.logout{margin:30rpx;height: 85rpx;border:1rpx solid #9A9A9A;font-size: 28rpx;text-align: center;
	color: #FFFDEF;
	background: #999999;
	margin-top: 30px;
line-height: 85rpx;}
</style>
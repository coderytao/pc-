<template>
	<view >
		<image src="../../static/image/logo2.png" class="logo"></image>
			<view class="fromlist">
				<view class="fromitem">
					<input type="text" v-model="telphone" placeholder="请输入手机号">
				</view>
				<view class="fromitem">
					<input type="text" v-model='code' placeholder="请输入验证码" >
					<button class="getcode active" @click="timeout">{{codetext}}</button>
				</view>
				<view class="fromitem">
					<input type="text" v-model="password" placeholder="请输入密码">
				</view>
				<view class="register" @click="register">
					注册
				</view>
				<view class="login">
					已有帐号?  <navigator url="../login/login">点击登录</navigator>
				</view>
			</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				codetext:'获取验证码',
				codeflag:true,
				telphone:'',
				password:'',
				code:''
			}
		},
		methods:{
			register(){
				uni.request({
					url:'http://www.mall.com/api/index/register',
					method:'POST',
					data:{
						telphone:this.telphone,
						password:this.password,
						code:this.code
					},
					success:(res)=>{
						console.log(res)
					}
				})
			},
			
			senMessage(){
				uni.request({
					url:'http://www.mall.com/api/index/getSmsCode',
					methods:'POST',
					data:{
						telphone:this.telphone
					},
					success:(res) =>{
						console.log(res.data.result!=0)
						uni.showToast({
							title:'获取成功',
							icon:'none'
						})
					}
				})
			},
			timeout(){
				//判断手机格式
				if(!this.check.telphone(this.telphone)){
					return ;
					
				}
				if(this.codeflag==false){
					return 
				}
				this.senMessage()
				
				
				
				
				
				
				this.codeflag=false;
				let time=60;
				this.codetext='重新获取'+time;
				var timer=setInterval(()=>{
					if(time==0)
					{
						clearInterval(timer)
						this.codetext='获取验证码'
						this.codeflag=true
					}else{
						time--;
						this.codetext=time+'s';
					}
					
				},1000)
			}
		}
	}
</script>

<style>
	.logo{
		width:150px;
		height: 140px;
		display: block;
		margin: 40px auto 60px;
	}
	.fromitem{
		height: 34px;
		padding-top: 16px;
		border-bottom: 1px solid #000000;
		margin:0 100px;
		display: flex;
		align-items: center;
	 justify-content: space-between;
	}
	.fromitem input{
		font-size: 14px;
	}
	.getcode{
		height: 30px;
		width: 105px;
		font-size: 12px;
		line-height: 30px;
		text-decoration: none;
		border: none;
	}
	.getcode.active{
		background-color: #00BFFF;
		
	}
	.register{
		margin:20px 180px;
		background: #007AFF;
		text-align: center;
		width: 80px;
		height: 30px;
		line-height: 30px;
	}
	.login{
		display: flex;
		text-align: center;
		margin-left: 140px;
		background-color: ;
		width: 150px;
		height: 100px;
		justify-content: center;
		align-items: center;
		font-size: 15px;
	}
	.login navigator{
		color:#23BAEF;
		padding-left: 20px;
	}
</style>

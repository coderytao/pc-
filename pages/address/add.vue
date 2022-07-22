<template>
	<view class="">
		<view class="username">
			<view class="itemtitle">
				收货人:
			</view>
			<input type="text" v-model="username" placeholder="收货人姓名"></input>
		</view>
		<view class="addressSex">
			<view class="itemtitle">
				
			</view>
			<text :class="{man:sex==0}" @click="sexChange(0)">先生</text>
			<text :class="{women:sex==1}" @click="sexChange(1)">女士</text>
		</view>
		<view class="username">
			
			<view class="itemtitle">
				电话号码：
			</view>
			<input type="text"  v-model="telphone" placeholder="收货人联系电话"></input>
		</view>
		<view class="username">
			
			<view class="itemtitle">
				收获地址
			</view>
			 <pickerAddress @change="change">
			<input type="text" v-model="address"  class="city"></input>
			</pickerAddress>
		</view>
		<view class="addressbox">
			
			<view class="itemtitle">
				详细地址
			</view>
			<textarea v-model="city" placeholder="请输入详细地址"></textarea>
		</view>
		<view class="defaultitem">
			<view class="itemtitle">
				默认地址
			</view>
			<switch checked="true" @change="defaultChange" color="#E5E5E5" style="transform:scale(0.8);"></switch>
		</view>
		<view class="saveaddress" @click="addresssave">
			保存收获地址
		</view>
		
	</view>
</template>

<script>
	 import pickerAddress from '../../components/wangding-pickerAddress/wangding-pickerAddress.vue'
	 export default{
		 components:{
			 pickerAddress
		 },
		 data() {
		            return {
		                txt: '请输入收获地址',
		                title: 'Hello',
						username:'',
						telphone:'',
						city:'',
						address:'请输入收获地址',
						sex:0,
						default:1
		            }
		        },
		        onLoad() {
		
		        },
		        methods: {
					sexChange(index){
						this.sex=index
					},
					defaultChange(e){
									if(e.target.value==true){
										this.default=1
									}else{
										this.default=0
									}
								},
		            change(data) {
		                this.address = data.data.join('')
		                console.log(data.data.join(''))
		            },
					addresssave(){
						if(!this.check.telphone(this.telphone)) {return ;} //取反的意思是当值不存在时就返回return
						if(!this.check.username(this.username)) {return ;}
						if(!this.check.address(this.address)){return ;}
						if(!this.check.city(this.city)){return ;}
						this.$request('/member/addressAdd',{
							username:this.username,	
							telphone:this.telphone,	
							city:this.city,	
							address:this.address,	
							default:this.default,
							sex:this.sex//男为0,女为1
						}).then(res=>{
							console.log(res)
						})
					}
		        }
	}
</script>

<style>
	.defaultitem{
		padding: 0 20px;
        display: flex;
		height: 60px;
		justify-content: space-between;
		
	}
	.itemtitle{
		margin-top: 5px;
	}
	.username{
		padding:0 20px;
		display: flex;
		height: 40px;
		align-items: center;
	}
	.itemtitle{
		width: 80px;
		font-size: 15px;
		
	}
	.username input{
		border-bottom: 1px solid #E5E5E5;
		flex: 1;
		line-height: 40px;
	}
	.addressSex{
		display: flex;
		padding:0 20px ;
		height: 40px;
		align-items: center;
		border-bottom: 1px solid #E5E5E5;
	}
	.man{
		border-style: solid;
		border-color: #00C3F5;
		
	}
	.women{
		margin-left:5px;
		border-style: solid;
		border-color: #00C3F5;
	}
	.addressbox{
		height: 70px;
		display: flex;
		padding: 0 20px;
		border-bottom: 1px solid #E5E5E5;
		line-height: 20px;
	}
	.addressbox textarea{
		flex:1;
		height: 70px;
		
	}
	.saveaddress{
		width: 70%;
		height: 60px;
		text-align: center;
		margin:150px auto;
		background: #0077AA;
		color: #FFFDEF;
		line-height: 60px;
		border-radius:80px;
		font-size: 20px;
	}
	.city{
		color: #000000 ;
		font-size: 14px;
	}
</style>

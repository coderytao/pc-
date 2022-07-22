import Vue from 'vue'
import App from './App'
import check from './check/index.js'
Vue.config.productionTip = false
Vue.prototype.imgUrl="http://www.mall.com/uploads/"
Vue.prototype.apiUrl="http://www.mall.com/api"
Vue.prototype.check=check 
Vue.prototype.$href=function(data,type=1){
	if(uni.getStorageSync("token")){
		
	
	if(type==1)
	{
		uni.navigateTo({
			url:data
		})
	}
	if(type==2)
	{
		uni.switchTab({
			url:data
		})
	}
	//没有登录的情况就要跳转到登录页面
	else{
		uni.navigateTo({
			url:'/pages/login/login.vue?backurl='+data
		})
	}
}
}
Vue.prototype.$back=function(data,type=1){
	if(uni.getStorageSync("token")){
		if(type==1){
			uni.navigateTo({
				url:data
			})
		}else{
			uni.switchTab({
				url:data
			})
		}
			

	}else{
		uni.navigateTo({
			url:"/pages/login/login?backurl=1"
		})
	}
}
Vue.prototype.$request=function(url,data=''){
	return new Promise((reslove,reject)=>{
			uni.request({
				url:this.apiUrl+url,
				method:'POST',
				data:data,
				header:{
					'token':uni.getStorageSync('token')
				},
			
				success:(res)=>{
					console.log(res.data)
					if(res.data.tcode==0)
				     {
						  this.code=0
						  reslove({"tcode":0,"msg":"未登录"})
					 }
					 if(res.data.code==1)
					 {
						 reslove(res.data.data)
						 this.code=1,
						 this.member=res.data.data
					 }
					 if(res.data.tcode==2){
					 					uni.setStorageSync('token',res.data.token)
					 					uni.request({
					 						url:this.apiUrl+url,
					 						method:"POST",
					 						header: {
					 							'token': uni.getStorageSync('token')
					 						},
					 						data:data,
					 						success:(res)=>{
					 							reslove(res.data)
					 						}
					 					})
					 				}
					 if(res.data.tcode==3){
						 reslove({"tcode":0,"msg":"token失效"})
						 this.code=0;
						 uni.setStorageSync('token','')
					 }
					 if(res.data.tcode==4){
						reslove({"tcode":0,"msg":"没有相关数据"})
						 this.code=0;
						 uni.setStorageSync('token','')
					 }
					 if(res.data.tcode){
						 reslove(res.data)
					 }
				}
			})
	})
	
	}

	

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

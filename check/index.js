const check={
	telphone(data){
		if(!(RegExp(/^1[34578]\d{9}$/).test(data))){
			
			uni.showToast({
				title:'手机格式错误'
			})
			return false
		}
		return true
	},
	password(data){
		if(data.length<7){
				uni.showToast({
					title:'登录成功'
				})
				return false
			}
			return true
		},
	username(data){
		if(data==''){
			uni.showToast({
				title:'姓名不能为空',
				icon:'none'
			})
			return false
		}
		return true
	},
	address(data){
		if(data==''||data=='请输入收获地址'){
			uni.showToast({
				title:'地址不能为空',
				icon:'none'
			})
			return false//如果地址为空的时候就等于false
		}
		return true//不为空的时候就返回 true
		
	},
	city(data){
		if(data=='')
		{
			uni.showToast({
				title:'详细地址不能为空',
				icon:'none'
			})
			return false
		}
		return true
	}
	}
export default check;
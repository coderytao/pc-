<template>
	<view >
		<view class="address">
		   <uniSwiperAction>
					<uniSwiperActionItem  :right-options="options2" @click="bindClick($event,index)" v-for="(item,index) in addressList" :key="index">
							<view class="addressitem">
								<view class="addressMain">
									<text class="username">{{item.username}}</text>
									<text class="telphone">{{item.telphone}}</text>
									<text class="text" v-if="item.default==1">默认</text>
								</view>
								
						<view class="addressInfo">
							{{item.address}}{{item.city}}
						</view>
						</view>
						
					</uniSwiperActionItem>
				 </uniSwiperAction>
		</view>
		
			
		
		<view class="" style="height: 50px;">
			
		</view>
		<view class="addressbutton" @click="addurl">
			添加新地址
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
				addressList:[],
	   			options1: [
	   				{
	   					text: '取消置顶'
	   				}
	   			],
	   			options2: [
	   				{
	   					text:'删除',
	   					style: {
	   						backgroundColor: '#007aff'
	   					}
	   				},
	   				{
	   					text: '编辑',
	   					style: {
	   						backgroundColor: '#dd524d'
	   					}
	   				}
	   			]
	   		};
	   
	   
	},
	onLoad(option2) {
		this.getData()
		console.log(option2.id)
		
	},
	methods: {
		getAdd(id){
			this.$request('/member/getAddressInfo',{id:option2}).then(res=>{
				console.log(res)
			})
		},
		getData(){
			this.$request('/member/addressList').then(res=>{
				this.addressList=res
				console.log(this.addressList)
			})
		},
			bindClick(e,index) {
				console.log(e,index)
				if(e.content.text=="删除"){
					console.log(index,e.content.text)
					//前端删除
					uni.showModal({
						 title: '是否要删除',
						    content: '这是一个模态弹窗',
						    success:res => {
						        if (res.confirm) {
									this.$request('/member/addressDel',{
										id:this.addressList[index].id,
										}
									).then(res=>{
										
									})
						          
						        } 
								if(e.content.text='编辑')
								{
									console.log(index,'你点击编辑')
									uni.navigateTo({
										url:'edit?id='+id
									})
								}
						    }
					})
				}
				/*uni.showToast({
					title: `点击了${e.position === 'index' ? '左侧' : '右侧'} ${e.content.text}按钮`,
					icon: 'none'
				});*/
			},
			addurl(){
				//页面跳转
				uni.navigateTo({
					url:'./add'
				})
			}
		}
	}
</script>

<style>
	.addressMain{
		line-height: 25px;
		font-size: 14px;
	}
	.addressitem{
		padding: 20px;
		border-bottom: 1px solid #0077AA;
	}
	.addressInfo{
		font-size: 16px;
		line-height: 40px;
		color: #999999;
		
	}
	.username{
		font-size: 18px;
	}
	.addressMain .telphone{
		margin:0px 10px 0px 10px;
		font-size: 18px;
	}
	.text{
		color: #FFFDEF;
		background: #00BFFF;
		font-size: 8px;
		padding: 0 5px;
	}
	.addressbutton{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom:0px;
		left:0px;
		background: #007AFF;
		color: #FFFDEF;
		text-align: center;
		line-height: 50px;
	}
</style>

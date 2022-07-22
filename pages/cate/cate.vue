<template>
	<view class="search">
			<view class="searchBox">
				<navigator url="#">
				<image src="../../static/mushroom/search.png"></image>
				搜索全部
				</navigator>
		</view>
		<view class="cate">
			<view class="cateleft">
				<scroll-view class="catenamelist" scroll-y="true" >
					<view class="catenameitem" v-for="(item,index) in cate" cateActive :key="index" :class="{cateActive:index==current}" @click="menuTab(index)">
					  {{item.catename}}
						<view class="cateline">
							
						</view>
					</view>
					
				</scroll-view>
			</view>
			<view class="cateright">
				<scroll-view class="cateRightScroll" scroll-y="true"
				:scroll-into-view="'cate'+main"
				scroll-with-animation
				@scroll="rightscroll">
					<view class="cateitem"
					v-for="(item,index) in cate " :key="index"
					:id="'cate'+index"
					>
					
				     <view class="caterightTitle">
					    <text> {{item.catename}}
						</text>
					 </view>
					<view class="cateRightList">
						<view class="cateRightItem"
						v-for="(child ,childindex) in item.product" :key="childindex">
							<navigator :url="'../detail/detail?id='+child.id">
							 <image :src="imgUrl +child.mainimage"></image>
						<text >{{child.smalltitle}}</text>
						</navigator>
						
						</view>
						
					</view>
					</view>
				
					</scroll-view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cate:[],//分类
				current:0,
				rectInfo:[],
				main:0,
			}
		},
		onLoad(){
			this.getDate()
		},
		mounted(){
			setTimeout(()=>{
				this.getRectInfo()
				//console.log(this.rectInfo)
			},200)
			
		},
		methods: {
			getDate(){
				uni.request({
				    url: this.apiUrl+'/index/cate', //仅为示例，并非真实接口地址。
				   
				    success: (res) => {
						console.log(res)
						const common=res.data.data
						this.cate=common
						console.log(this.cate=common)
				    }
				});
			},
			//滚动事件
			rightscroll(event){
				let scrollTop=event.detail.scrollTop;
				
				//console.log(event.detail.scrollTop)
			 for(let i=0;i<this.rectInfo.length;i++)
			 {
				 if(scrollTop>this.rectInfo[i].top&&scrollTop<this.rectInfo[i].bottom)
				 {
					this.current=i;
				   console.log(this.rectInfo[i].top)
				 }
			 }
			},
			//菜单选择
			menuTab(index){
				this.current=index;
				this.main=index;
				console.log(this.main)
				},
			
			//获取矩形信息
			getRectInfo(){
				
				let top=0;
				let bottom=0;
				let temp=0;
				for(var i=0;i<this.cate.length;i++)
				{
					let view = uni.createSelectorQuery().in(this).select("#cate"+i);

				view.fields({
				  size: true,
				 rect: true
				}, data => {
				  top=temp;
				  bottom=temp+data.height;
				  temp+=data.height;
				  this.rectInfo[i]={"top":top,"bottom":bottom};
				 // console.log(top,bottom)
				  
				}).exec();
				}
				
			}
		}
	}
</script>

<style>
	
.search{
	height:60px;
	width:100%;
	}
	.searchBox{
		width:100%;
		height:30px;
		border-radius: 5px;
		font-size: 15px;
		color:#999999;
		background: #f7f7f7;
		line-height: 30px;
		justify-content: center;
		align-items: center;
	}
	.searchBox image{
		width:15px;
		height:15px;
	}
	.searchBox navigator{
		display: flex;
		justify-content: center;
		align-items: center;
		height:30px ;
	}
	.cate{
		position: absolute;
		top:30px;
		bottom: 0;
		width:100%;
	
		display: flex;
	}
	.cateleft{
		width:100px;
		height: 100%;
		background: #FFFFFF;
	}
	.catenameitem{
		font-size: 14px;
		color:black;
		line-height: 50px;
		text-align: center;
		position: relative;
		
	}
	.catenamelist{
		overflow: auto;
		height: 100%;
	}
	.cateActive{
		background:#C0C0C0;
	}
	.cateline{
		width: 2px;
		height: 15px;
		position: absolute;
		top:20px;
		
	}
	.cateright{
		text-align: center;
		margin: 0 auto;
		padding-top: 20px;
		background: #FFFFFF;
		height: 100%;
		font-size: 15px;
	}
	.cateRightScroll{
		overflow: auto;
		height: 100%;	
	}
	.cateRightList image{
		width:150px;
		height: 150px;
		display: block;
		margin-bottom: 5px;
	}
	.caterightTitle text{
		padding: 0 30px;
	}
	
</style>

<template>
	<view class="content">
		<view class="status">
	    <!--顶部-->
		<MyHeader :content="recommend"></MyHeader>
		<!--首页轮播-->
		<Myswiper :comond="banner"></Myswiper>
		<!--首页服务和商品导航-->
		<Mypage :active="active" :icon="icon"></Mypage>
		<!--首页广告-->
		<Myimage :floor="ad"></Myimage>
		<!--分割线-->
		<view class="floor" v-for="(item,index) in page" :key="index">
		   <Myline :name="item.content[0].title"></Myline>
		   <template v-if="item.content.length==1">
			    <image :src="imgUrl+item.content[0].img" class="adImg">
					
				</image>
		   </template>
		   <template v-else>
			   <Myindextable :content="item.content"></Myindextable> 
		   </template>
		   <Myprice :content="item.product"></Myprice>
		</view>
		
	  </view>
	  
	</view>
</template>

<script>
	import Myindextable from "../../component/indextable.vue"
	import Myprice from "../../component/price.vue"
	import Myline from "../../component/line.vue"
	import Myimage from "../../component/image.vue"
    import Mypage   from "../../component/page.vue"
	import Myswiper from "../../component/indexswiper.vue"
	import MyHeader from "../../component/header.vue"
	
	export default {
		data() {
			return {
				title: '魅族声乐',
				iphone:'智能手机',
				banner:[],//轮播图
				recommend:[],//顶部推荐分类
				active:[],//分类
				icon:[],//商品分类导航、
				ad:[],//首页广告
				page:[],//首页图片,
				father:[]
			}
		},
		components:{
			MyHeader,
			Myswiper,
		   Mypage,
		   Myimage,
		   Myline,
		   Myprice,
		   Myindextable 
		},
		onLoad() {
          this.getData()
		},
		methods: {
			 getData(){
				 uni.request({
				     url: this.apiUrl+'/index/index', //仅为示例，并非真实接口地址。
				    
				     success: (res) => {
						 console.log(res.data)
						 const universal=res.data.data
					  this.recommend=universal.recommend_cate/////推荐分类
				      this.banner=universal.banner//轮播图
					  this.active=universal.active//分类
					  this.icon=universal.icon//导航分类
					  this.ad=universal.floor
					  this.page=universal.cate
					  console.log(this.page)
					  console.log(this.ad=universal.floor)
					   console.log(this.apiUrl)
				     }
				 });
			 }
        
		}
	}
</script>

<style>
  .adImg{
	  width: 100%;
  }
	.adImg image{width: 100%;height: 344rpx;}
</style>

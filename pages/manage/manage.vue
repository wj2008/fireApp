<template>
	<view class="page">
		<view class="header-box">
			<view class="diff-header">
				<view class="header-left"></view>
				<view class="header-content">
					我的管理
				</view>
				<view class="header-right">
					<!-- <text class="icon">&#xe622;</text> -->
				</view>
			</view>




			<view class="banner" v-if=" userinfo===null ">
				<image :src="defimg" />
				<view class="user-info">
					<view class="loginbtn" @tap="ways('login')">立即登录</view>
				</view>
			</view>


			<view class="banner" v-else>
				<image :src="userinfo.headimg" />
				<view class="user-info">
					<text>{{userinfo.personname}}</text>
					<text class="banner-desc">职务：{{userinfo.framename}}-{{userinfo.dutiesname}}</text>
				</view>
			</view>



		</view>

		<view class="list">
			<view class="item" @click="ways('userinfo')">
				<text class="gIcon mgl30 mgr20">&#xe77e;</text>
				<view class="item-name">用户信息</view>
				<text class="gIcon mgr30">&#xe661;</text>
			</view>
			<!-- <view class="item" @click="ways('xingzhengguanli')">
				<text class="gIcon mgl30 mgr20">&#xe608;</text>
				<view class="item-name">行政管理</view>
				<text class="gIcon mgr30">&#xe661;</text>
			</view> -->
		</view>
		
		
		<view style="margin-top:500px; margin-left: 100px; width: 500px; height:100px ;" @click="gologinout"> 
		<image src="../../static/loginout.png" style="width: 560px; height: 90px;"></image>
		
		</view>




	</view>

</template>
<script>
	import common from '../../common/common.js';
	import {
		mapState,mapMutations
	} from 'vuex';


	export default {
		data() {
			return {
				defimg: '../../static/user_3.png',
				userinfo: null,
			}


		},
		
		computed: {
			...mapState(['user']),
		},
		methods: {
			
			...mapMutations(['loginout']),

			getuser: function() {
				if(this.user.user===null)
				{
					this.userinfo=null
					return false
				}
				
				let that = this;
				uni.request({
					url: common.hosturl + "user/getuserinfo.html",
					method: "POST",
					data: {
						token: this.user.user.token,
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						
						//console.log(JSON.stringify(res.data))
						if (res.data.code == 0) {

							that.userinfo = res.data.userinfo;

						} else {
							that.userinfo=null;
							return false
						}
					},
					fail: function() {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					}
				})

			},
			gologinout:function(){
				
				this.loginout();
				uni.showToast({
					title: '退出成功',
					success: function () {
						uni.reLaunch({
							url: "../../pages/manage/login"
						});
					}
				});	
				
			}


		},
		onLoad() {
			this.getuser();

		}

	}
</script>
<style>
	.header-box {
		height: 420px;
		width: 750px;
		display: flex;
		flex-direction: column;
		background-image: linear-gradient(90deg, #e75551 0%, #c43164 100%);
		box-shadow: 0px 4px 8px 0px #e6e6e6;
	}

	/* 样式被重叠掉 */
	.diff-header {
		height: 128px;
		width: 100%;
		display: flex;
		padding-top: 40px;
		box-sizing: border-box;
		padding-top: 40px;
		align-items: center;
	}

	.banner {
		height: 292px;
		width: 750px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fff;
	}

	.banner image {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		margin: 30px 0;
	}

	.user-info {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.banner-desc {
		margin-top: 10px;
		font-size: 28px;
	}

	.loginbtn {
		width: 228px;
		height: 68px;
		background-color: #ffffff;
		border-radius: 44px;
		text-align: center;
		line-height: 68px;
		font-size: 32px;
		color: #e45252;
	}

	.list {
		min-height: 110px;
		width: 750px;
		display: flex;
		flex-direction: column;
	}

	.item {
		width: 750px;
		height: 110px;
		border-bottom: 2px solid #e6e6e6;
		background-color: #fff;
		display: flex;
		align-items: center;
		font-size: 32px;
		color: #6c6c6c;
	}

	.item-name {
		flex: 1;
	}
</style>

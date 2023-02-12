<template>
	<view class="about">
		<view class="box">
			<image class="logoImg"
				src="https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/6ded3379-af18-40b0-946c-e0847cabc33c.jpg">
			</image>
			<text class="tip appName">{{appName}}</text>
			<text class="tip">Version {{version}}</text>
			<!-- <view class="qrcode"> -->
			<!--uqrcode 组件来源，插件Sansnn-uQRCode 链接地址：https://ext.dcloud.net.cn/plugin?id=1287-->
			<!-- <uqrcode :size="100" canvas-id="qrcode" :value="about.download"></uqrcode> -->
			<!-- </view> -->
			<view class="group-margin">
				<text class="tip">本软件由@洛北辰Niyuta开发</text>
				<text class="tip">已在github开源</text>
				<text class="tip">如有问题，请发邮件至cheparity@qq.com</text>
			</view>

			<!-- </view> -->
			<view class="copyright">
				<view class="agreement-box">
					<!-- {{about}} -->
				</view>
				<!-- <view class="agreement-box" v-for="(agreement,index) in agreements" :key="index"> -->
				<!-- <text class="agreement" @click="navigateTo(agreement)">《{{agreement.title}}》</text> -->
				<!-- <text class="hint" v-if="agreements.length-1>index">{{$t('about.and')}}</text> -->
				<!-- </view> -->
				<!-- <text class="hint">Copyright © {{year}}</text> -->
				<!-- <text class="hint">{{about.company}}</text> -->
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				appName: "拾遗游记",
				version: "V1.0.0",
			};
		},

		methods: {
			navigateTo({
				url,
				title
			}) {
				uni.navigateTo({
					url: '/pages/common/webview/webview?url=' + url + '&title=' + title,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}

	.about {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.box {
		margin-top: 60px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logoImg {
		margin-bottom: 10rpx;
		width: 300rpx;
		height: 300rpx;
		border-radius: 15px;
	}

	.tip {
		text-align: center;
		font-size: 24rpx;
		margin-top: 10px;
		padding: 10rpx;
	}

	.appName {
		margin-top: 20px;
		font-size: 42rpx;
		font-weight: 500;
	}

	.qrcode,
	.qrcode .uqrcode {
		margin: 10px 0;
		width: 100px;
		height: 100px;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.copyright {
		font-size: 32rpx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		bottom: 20px;
		// left: 0;
		position: fixed;
	}

	.agreement-box {
		justify-content: center;
	}

	.agreement {
		color: #2285ff;
		font-size: 26rpx;
	}

	.hint {
		text-align: center;
		color: #999999;
		font-size: 26rpx;
	}
</style>

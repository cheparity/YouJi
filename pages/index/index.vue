<template>
	<!-- 页面 header 相关部分 -->
	<view class="header-box">
		<!-- 顶部大图 -->
		<image
			src="https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/ca54af9e-f786-420b-9ffe-13454ba882b4.jpg"
			mode="aspectFit" class="head-pic"></image>
		<!-- 遮罩使用弧形框 -->
		<!-- <image class="crile" src="@/static/crile.png" mode="aspectFill" /> -->
		<!-- 卡片 -->
		<view>
			<uni-card title="行程数"
				thumbnail="https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/6b6344c4-8feb-4071-98ba-7aa1c0b606ae.png"
				@click="onClick">
				<view class="sub-card">
					<text class="sub-card-text">{{kilometer}}公里</text>
				</view>
			</uni-card>

			<!-- 地图和日期 -->
			<uni-card title="出行计划" subTitle="从下面选择你计划出行的日期和地点吧!"
				thumbnail="https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/3e46bf52-5073-4342-b4d8-2d5ae2127029.png">
				<view slot="actions">
					<view class="date-picker">
						<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
					</view>
					<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude"
						:markers="covers" @tap="tapMap" :polyline="polyline">
					</map>
				</view>
			</uni-card>
		</view>
		<view class="wrap">
			<swiper class="swiper" :indicator-dots="true" :circular="true" :autoplay="false" :interval="2500"
				:duration="500">
				<swiper-item class="swiper-item" v-for="item in Piclist" :key="item.id">
					<navigator class="navigator" open-type="navigate"
						:url=" '/pages/common/webview/webview?url='+item.link">
						<image class="banner-swiper-img" :src="item.image" :mode="item.mode" />
					</navigator>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: '',
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [],
				polyline: [{}],
				kilometer: '10,000,000',
				Piclist: [{
						id: "xinjiang",
						link: "https://mp.weixin.qq.com/s/dn9BBQibzp8-zC5Sg7KH4w",
						image: 'https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/5c437c17-da02-4046-8583-428dede43f9f.jpg',
						mode: "scaleToFill"
					},
					{
						id: "guizhou",
						link: "",
						image: 'https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/4266822f-17d5-4252-a4ee-d5d73dbc635c.jpg',
						mode: "scaleToFill"
					},
					{
						id: "daxuesheng",
						link: "https://weixin.qq.com/r/1xOVjezEfbECraju90bF",
						image: 'https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/6def5e4e-71ec-49f0-8d26-8ef229469a87.jpg',
						mode: "scaleToFill"
					}
				]
			}
		},
		computed: {
			encode(s) {
				return encodeURI(s)
			}
		},
		onReady() {
			console.log('onReady')
			uni.getLocation({
				success: (res) => {
					console.log('当前地址信息', res)
					this.latitude = res.latitude
					this.longitude = res.longitude
					this.covers.push({
						id: 1,
						width: 20,
						height: 30,
						latitude: res.latitude,
						longitude: res.longitude,
					})

					console.log("初始cover长度", this.covers.length)
					console.log('address信息', res.address)
				},
				fail: (e) => {
					console.log('失败信息', e)
					this.covers.push({
						id: 2,
						width: 20,
						height: 30,
						latitude: this.latitude,
						longitude: this.longitude,
					})

				}
			})
		},
		methods: {
			tapMap(e) {
				//理论上讲更新covers数组也可以把covers[0]不动,只改变covers[1],但是不知道为什么有bug
				console.log(e)
				if (this.covers.length == 2) {
					this.covers.pop()
				}

				this.covers.push({
					id: 10,
					width: 20,
					height: 30,
					latitude: e.detail.latitude,
					longitude: e.detail.longitude
				})
				const routine = {
					points: this.covers,
					width: 1,
					dottedLine: true,
					color: '#007aff'
				}
				this.polyline[0] = routine

				console.log('tap后cover信息', this.covers)
				console.log('tap后polyline信息', this.polyline)
			}
		}
	}
</script>

<style>
	.head-pic {
		width: 100vh;
		height: 400rpx;
	}

	.header-box {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.date-picker {
		margin-bottom: 20rpx;
	}

	.crile {
		width: 750upx;
		height: 50upx;
		position: absolute;
		left: 0;
		top: 355upx;
		z-index: 9;
	}

	.card-section {
		position: relative;
		width: 500upx;
		top: -70upx;
	}

	.card-section uni-card {
		width: 500upx;
	}

	.sub-card-text {
		font-size: x-large;
	}

	.footer {
		position: relative;
		top: -5vh;
		flex-direction: row;
		width: 80vh;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.footer image {
		flex: auto;
		height: 200upx;
	}

	.wrap {
		height: 400rpx;
		width: 90%;
		margin-bottom: 90rpx;
	}

	.wrap .swiper {
		height: 100%;
		width: 100%;
	}


	.navigator {
		position: relative;
		display: block;
		height: 100%;
		width: 100%;
	}

	.banner-swiper-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>

<template>
	<view>
		<view class="dynamic" @click.stop="isInfo?'':goInfo(dyInfo)">
			<view class="dynamic_header">
				<view class="dynamic_header_user">
					<view class="dynamic_header_user_avatar">
						<!-- 头像 -->
						<cloud-image :src="dyInfo.user_id[0].avatar_file.url"></cloud-image>
					</view>
					<view class="dynamic_header_user_info">
						<!-- 作者名,最近修改日期 -->
						<view class="dynamic_header_user_info_name">{{dyInfo.user_id[0].nickname}}</view>
						<uni-dateformat :date="dyInfo.last_modify_date" :threshold="[6000,3600000]"></uni-dateformat>
					</view>
				</view>
				<!-- <view class="dynamic_header_operate">
					<u-button :ripple="true" ripple-bg-color="#003d99" size="mini" type="warning">关注</u-button>
				</view> -->
			</view>

			<view class="dynamic_cont">
				<u-read-more showHeight="1000" :shadowStyle="shadowStyle" :fontSize="10">
					<!-- 内容 -->
					<rich-text :nodes="dyInfo.content"></rich-text>
				</u-read-more>
				<!-- 图片 -->
				<view v-if="dyInfo.pictures.length!=0" class="dynamic_cont_img">
					<block>
						<!-- 单张 -->
						<block v-if="dyInfo.pictures.length == 1">
							<!-- <cloud-image src="this.dyInfo.pictures[0].src"></cloud-image> -->
							<image @tap.stop="previewImage(img, dyInfo.pictures.url)"
								v-for="(img,index1) in dyInfo.pictures" :src="img.url" class="img1" mode="aspectFill">
							</image>
						</block>
						<!-- 2张 -->
						<block v-if="dyInfo.pictures.length == 2">
							<view class="img2">
								<image v-for="(img,index2) in dyInfo.pictures" :src="img.url" :key="index2"
									mode="aspectFill">
								</image>
							</view>
						</block>
						<!-- 4张 -->
						<block v-if="dyInfo.pictures.length == 4 ">
							<view class="img4">
								<image v-for="(img,index3) in dyInfo.pictures" :src="img.url" :key="index3"
									mode="aspectFill">
								</image>
							</view>
						</block>
						<!-- 3/4张以上不包含4张 -->
						<block v-if="dyInfo.pictures.length > 4 || dyInfo.pictures.length == 3">
							<view class="img3">
								<image v-for="(img,index4) in dyInfo.pictures" :src="img.url" :key="index4"
									mode="aspectFill">
								</image>
							</view>
						</block>
					</block>
				</view>
			</view>
			<!-- 标签 -->
			<view class="dynamic_tag paddingT20 ">
				<uni-tag style="margin-left: 20rpx;" disabled circle inverted v-for="(tag,index) in dyInfo.tags"
					:text="tag" type="primary"></uni-tag>
			</view>

			<view class="operate" style="margin-top: 20rpx;">
				<!-- 评论和点赞数 -->
				<view class="operate_icon">
					<!-- 评论 -->
					<image
						src="https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/19ed4ce0-d08e-4b3b-9eae-c5a2cf40d905.png"
						mode="" @click="isInfo?comContent(dyInfo.id):''">
					</image>
					<view class="" @click="isInfo?comContent(dyInfo.user_id):''">
						{{dyInfo.comment_count}}
					</view>
					<!-- 点赞 -->
					<image
						:src="dyInfo.fabulous?'https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/8a9124e9-d9a2-4123-bec1-0358e5e3e24b.png':'https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/04fd0fcf-517a-454b-aa5c-1df141141b7c.png'"
						mode="" @click="isInfo?comLike(dyInfo.user_id):''"></image>
					<view class="" @click="isInfo?comLike(dyInfo.user_id):''">
						{{dyInfo.like_count}}
					</view>
				</view>

				<!-- 地理位置 -->
				<view v-if="dyInfo.publish_address!=null" class="operate_icon">
					<image
						src="https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/3e46bf52-5073-4342-b4d8-2d5ae2127029.png"
						mode=""></image>
					<view class="operate_text">{{dyInfo.publish_address}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "dynamics",
		props: {
			dyInfo: {
				type: Object
			},
			isInfo: {
				type: Boolean
			},
		},
		data() {
			return {
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "20rpx",
				},

			};
		},
		onReady() {
			console.log('dyInfo信息', this.dyInfo)
			console.log('pictures信息', this.dyInfo.pictures)
			console.log('pictures长度', this.dyInfo.pictures.length)
			console.log('this.dyInfo.pictures[0].src', this.dyInfo.pictures[0].url)
			console.log('this.dyInfo.pictures.url', this.dyInfo.pictures.url)
		},
		methods: {
			previewImage(url, urls) {
				uni.previewImage({
					current: url, // 当前显示图片的http链接
					urls: urls // 需要预览的图片http链接列表
				});
			},
			goInfo(info) {
				uni.navigateTo({
					url: '../../subpages_dynamic/dynamicInfo?obj=' + JSON.stringify(info),
					fail(e) {
						console.log('跳转页面失败', e)
					},
					success() {
						console.log('跳转页面成功')
					}
				})
			},
			comContent(id) {
				this.$emit('comContent', id)
			},
			comLike(id) {
				console.log(id);
				this.$emit('comLikes', id)
			},
		}
	}
</script>

<style lang="scss">
	// 动态css
	.dynamic {
		background-color: #ffffff;
		padding: 10px 10px 5px 10px;
		margin-bottom: 5px;

		&_header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			&_user {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;

				&_avatar {}

				&_info {
					margin-left: 10px;

					&_time {
						color: #bebebe;
						font-size: 12px;
					}
				}
			}

			&_operate {
				margin-top: 10px;
			}
		}

		&_cont {
			margin-top: 10rpx;

			&_img {
				margin-top: 10rpx;

			}

			video {
				width: 100%;
			}
		}




		&_tag {
			margin-top: 5px;

			&_info {
				margin: 10px 2px;
			}
		}
	}



	.operate {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		padding: 5px 8px;

		&_icon {
			display: flex;
			align-items: flex-end;

			image {
				width: 20px;
				height: 20px;
			}

		}

		&_text {
			font-size: 10px;
		}
	}

	.add {
		z-index: 1;
		position: fixed;
		right: 5%;
		bottom: 5%;
		height: 50px;
		width: 50px;
	}

	// 图片样式
	.img1 {
		display: block;
		max-height: 600rpx;
		border-radius: 5px;
		overflow: hidden;
	}


	.img2 {
		display: flex;
		flex-direction: row;

		image {
			margin: 5rpx;
			border-radius: 5px;
			width: 50%;
			height: 300rpx;
		}
	}

	.img3 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		image {
			width: 31.3%;
			height: 200rpx;
			margin: 1%;
			border-radius: 5px;
		}
	}

	.img4 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		image {
			width: 38%;
			height: 250rpx;
			margin: 1%;
			border-radius: 5px;
		}
	}

	.paddingT20 {
		padding-top: 20rpx;
	}
</style>

<template>
	<view class="warp">
		<view class="cot" v-for="(item,index) in commentList">
			<view class="cot_avatar">
				<u-avatar :src="item.avatarUrl" mode="square" size="80"></u-avatar>
			</view>
			<view class="cot_flirt">
				<view class="cot_flirt_name">
					{{item.nickName}}
				</view>
				<image @click="delCom(item.comId)" class="cot_flirt_shanchu"
					src="https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/4e046680-b1f5-4fc4-b2b4-036ead54f3c4.png">
				</image>
			</view>
			<view class="cot_content">
				{{item.comInfo}}
			</view>
			<view class="">
				<view class="img5">
					<image @tap.stop="previewImage(img, item.comImgs)" :src="img" v-for="(img,index2) in item.comImgs"
						:key="index2" mode="aspectFill"></image>
				</view>
			</view>
			<view class="cot_operate">
				<view class="cot_operate_time">
					{{item.comTime | timeago}}
				</view>
				<view class="cot_operate_icon">
					<image
						src="https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/19ed4ce0-d08e-4b3b-9eae-c5a2cf40d905.png"
						mode="" @click="replyContent(item.comId)"></image>
					<view class="" @click="replyContent(item.comId)">
						{{item.replyList.length}}
					</view>
					<image
						:src="item.fabulous?'https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/8a9124e9-d9a2-4123-bec1-0358e5e3e24b.png':'https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/04fd0fcf-517a-454b-aa5c-1df141141b7c.png'"
						mode="" @click="replyLike(index)"></image>
					<view class="" @click="replyLike(index)">
						{{item.comLike}}
					</view>
				</view>
			</view>

			<!-- 回复 -->
			<view class="reply" v-for="(rep,index2) in item.replyList">
				<view class="reply_user">
					<view class="reply_user_info">
						<u-avatar :src="rep.avatarUrlr" mode="square" size="50"></u-avatar>
						<view class="reply_user_info_name">
							{{rep.nickNamer}}
						</view>
					</view>
					<view class="reply_user_like">
						<!-- <image class="reply_user_shanchu" src="../../static/icon/like_fil.png"></image> 6 -->
					</view>

				</view>
				<view class="reply_content">
					{{rep.replyInfo}}
				</view>
				<u-line color="#FFC107" border-style="dotted" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "commont",
		props: {
			commentList: {
				type: Array
			}
		},
		data() {
			return {
				background: '',
				baseUrl: '',
			};
		},
		onLoad() {
			this.background = getApp().globalData.background
		},
		methods: {
			delCom(comId) {
				this.$emit('delCom', comId)
			},
			replyContent(comId) {
				this.$emit('replyContent', comId)
			},
			replyLike(index) {
				this.$emit('replyLike', index)
			},
			previewImage(url, urls) {
				uni.previewImage({
					current: url, // 当前显示图片的http链接
					urls: urls // 需要预览的图片http链接列表
				});
			},
		}
	};
</script>

<style lang="scss" scoped>
	// 评论
	.cot {
		margin: 15px;
		padding: 10px;
		box-shadow: 0 0 5px #d2d2d2;
		position: relative;
		border-radius: 5px;

		&_avatar {
			position: absolute;
			top: -5%;
		}

		&_flirt {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 50px;


			image {
				width: 22px;
				height: 22px;
			}
		}

		&_content {
			margin-top: 5px;
			margin-bottom: 5px;
			text-indent: 25px;
		}

		&_operate {
			display: flex;
			justify-content: space-between;
			align-items: center;

			&_icon {
				display: flex;
				align-items: flex-end;

				image {
					width: 20px;
					height: 20px;
				}

			}

			&_time {
				color: #bebebe;
				font-size: 12px;
			}
		}
	}

	// 回复
	.reply {
		margin: 10px;

		&_user {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			margin-bottom: 5px;

			&_info {
				display: flex;
				align-items: flex-end;

				&_name {
					margin-left: 5px;
				}
			}

			&_shanchu {
				width: 30px;
				height: 30px;
			}

			&_like {
				display: flex;
				align-items: center;
			}
		}

		&_content {
			margin-bottom: 5px;
		}
	}

	.img5 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		image {
			width: 20%;
			height: 120rpx;
			margin: 1%;
			border-radius: 5px;
		}
	}
</style>

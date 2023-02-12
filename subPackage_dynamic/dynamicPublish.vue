<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar style="margin-top: 10px;" shadow leftIcon="left" title="动态编辑" rightText="发表" @clickLeft="back"
				@clickRight="publishDynamic()" />
		</view>
		<view class="head-input">
			<textarea auto-focus style="margin-left: 30rpx;margin-right: 30rpx;height:100%" @input="onKeyInput"
				placeholder="请输入动态内容" />
		</view>
		<!-- 地址显示 -->
		<view class="operate" v-if="address!=null">
			<view class="operate_icon">
				<image
					src="https://mp-ba06b9ea-f551-45db-85e8-a1e1777c43f7.cdn.bspapp.com/cloudstorage/3e46bf52-5073-4342-b4d8-2d5ae2127029.png"
					mode=""></image>
				<text class="operate_text">
					{{address.name}}
				</text>
			</view>
		</view>
		<!-- 图片显示 -->
		<uni-section title="最多选择6张图片哦" type="line">
			<view class="example-body">
				<uni-file-picker v-model="imageValue" fileMediatype="image" limit="6" @select="select"
					@progress="progress" @success="success" @fail="fail"></uni-file-picker>
			</view>
		</uni-section>
		<view class="paddingT20">
			<uni-section title="选择话题" @click="openTagInput">
				<uni-tag v-slot:right style="margin-left: 10rpx;" disabled circle inverted v-for="(tag,index) in tags"
					:text="tag" type="primary"></uni-tag>
			</uni-section>
			<uni-section title="所在位置" @click="openPostionInput"></uni-section>
			<uni-section title="选择话题" @click="openTagInput">
				<template v-slot:right>
					<switch checked />
				</template>
			</uni-section>
		</view>

		<view>
			<!-- 输入框 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" title="请输入话题" :value="tagValue" placeholder="#示例1 #示例2"
					@confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// id是DB主键，如果id重复会造成在拖拽排序时候，会影响相同ID的元素
				show: false,
				list: [],
				commentSwitch: true,
				text: '',
				imageValue: [],
				tagValue: '',
				tags: [],
				address: null
			}
		},

		methods: {
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			openTagInput() {
				this.$refs.inputDialog.open()
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
				console.log(e.tempFilePaths)
				this.imageValue = e.tempFiles
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},
			open() {
				console.log('open执行')
			},
			back() {
				uni.navigateBack()
			},
			onKeyInput: function(event) {
				this.text = event.target.value
			},
			publishDynamic() {
				console.log('上传云图片数据,', this.imageValue)
				console.info('上传云图片总数:' + this.imageValue.length)
				// 处理tag标签,用#分割,去除空格
				const dyTable = uniCloud.database().collection("dynamic-articles")

				if (this.address != null) {
					dyTable.add({
						'content': this.text,
						'pictures': this.imageValue,
						'comment_status': this.commentSwitch,
						'tags': this.tags,
						'publish_address': this.address.name
					})
				} else {
					dyTable.add({
						'content': this.text,
						'pictures': this.imageValue,
						'comment_status': this.commentSwitch,
						'tags': this.tags,
					})
				}

				console.log('动态上传成功')
				uni.showToast({
					title: "动态上传中",
					duration: 2000,
					success() {
						uni.reLaunch({
							url: '/pages/dynamic/dynamic'
						})
					}
				})
			},
			openPostionInput() {
				console.log('进入openPostionInput')
				uni.chooseLocation({
					success: res => {
						this.address = res
						console.log('uni.chooseLocation成果')
						console.log('位置名称：' + this.address.name);
						console.log('详细地址：' + this.address.address);
						console.log('纬度：' + this.address.latitude);
						console.log('经度：' + this.address.longitude);
					},
					fail(e) {
						console.log(e)
					}
				});
			},
			dialogInputConfirm(val) {
				uni.showLoading({})

				setTimeout(() => {
					uni.hideLoading()
					console.log('输入框输入内容', val)
					this.tagValue = val
					//处理tagValue,分割为tags
					this.tags = this.tagValue.replaceAll(' ', '').split('#')

					console.log('处理完成的tags内容(应该是数组)', this.tags)
					// 关闭窗口后，恢复默认内容
					this.$refs.inputDialog.close()
				}, 700)
			}
		}
	}
</script>

<style>
	.album-content {
		width: 100%;
		height: calc(100vh - var(--window-top) - var(--window-bottom));
		font-size: 13px;
	}

	.operate {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 8px;
		margin: 20rpx
	}

	.operate_icon {
		display: flex;
		align-items: flex-end;

	}

	.head-input {
		height: 300rpx;
	}

	.operate_icon image {
		width: 20px;
		height: 20px;
	}

	.operate_text {
		font-size: 10px;
	}

	.paddingLR30 {
		padding-left: 30rpx;
		padding-right: 30rpx;
	}

	.paddingT20 {
		padding-top: 20rpx;
	}

	.paddingB20 {
		padding-bottom: 20rpx;
	}
</style>

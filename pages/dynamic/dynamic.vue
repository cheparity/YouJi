<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow rightText="发表动态" @clickRight="add" title="动态列表" />
		</view>
		<view class="content">
			<unicloud-db v-slot:default="{data, loading, error, options}" collection="dynamic-articles,uni-id-users"
				field="_id,title,last_modify_date,publish_address,tags,pictures,comment_count,like_count,content,user_id.avatar_file,user_id.nickname,user_id._id">
				<view v-if="error">{{error.message}}</view>
				<view v-else>
					<block v-for="(item,index) in data">
						<kgDynamics :dyInfo="item" :key="index"></kgDynamics>
						<view class="line">
							<u-line color="#f3e5e0" margin="5px 0px;" class="deviation"></u-line>
						</view>
					</block>
				</view>
			</unicloud-db>

		</view>
	</view>

</template>
<script>
	import kgDynamics from "../../components/kg-dy/kg-dynamic.vue"
	export default {
		components: {
			kgDynamics
		},
		data() {
			return {};
		},
		onPullDownRefresh() {
			uni.reLaunch({
				url: '../../pages/dynamic/dynamic'
			})
		},
		methods: {
			add() {
				uni.navigateTo({
					url: "../../subPackage_dynamic/dynamicPublish",
					success: res => {
						console.log("开始跳转到dynamicPublish界面")
					},
					fail: (e) => {
						console.log("跳转到dynamicPublish界面失败", e)
					},
					complete: () => {
						console.log("跳转到dynamicPublish界面完成")
					}
				});
			}
		}
	};
</script>


<style lang="scss">

</style>

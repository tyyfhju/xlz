<template>
	<div>
		<div>
			<img src="../../public/img/16.png" />
			<el-divider></el-divider>
			<div style="text-align: center;">
				<span>
					<h1>客户服务</h1>
				</span>
				<el-divider content-position="center">
					<h5>客户服务留言</h5>
				</el-divider>
			</div>
			<br>
			<h4>发表您的留言</h4>
		</div>
		<div>
			<el-input type="text" placeholder="请输入你的名字" v-model="messageBoard.author" maxlength="16" show-word-limit>
			</el-input>
			<div style="margin: 20px 0;"></div>
			<el-input type="textarea" placeholder="请输入留言" v-model="messageBoard.message" show-word-limit>
			</el-input>
			<div style="margin: 20px 0;"></div>
			<el-button type="primary" plain @click="postMessage">留言</el-button>
			<el-divider></el-divider>
			<el-table :data="messages" height="250" border style="width: 100%">
				<el-table-column prop="id" label="序号" width="100">
				</el-table-column>
				<el-table-column prop="author" label="名字">
				</el-table-column>
				<el-table-column prop="message" label="留言">
				</el-table-column>
				<el-table-column prop="time" label="时间" width="160">
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "Home",
		data() {
			return {
				messageBoard: {
					author: '',
					message: ''
				},
				messages: []
			}
		},
		methods: {
			postMessage() {
				if (this.messageBoard.author === '') {
					this.$message.error('请输入你的名字');
					return
				}

				if (this.messageBoard.message === '') {
					this.$message.error('请输入留言');
					return
				}

				axios.post("http://116.62.64.78:10086/postMessage?author=" + this.messageBoard.author + "&message=" + this
					.messageBoard.message).then((t) => {
					if (t.data === 'success') {
						this.$message({
							message: '留言成功',
							type: 'success'
						});
					} else {
						this.$message.error('留言失败');
					}
				})
			}
		},
		created() {
			axios.post("http://116.62.64.78:10086/getMessages").then((t) => {
				this.messages = t.data
			})
		}
	}
</script>
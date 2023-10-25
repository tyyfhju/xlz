<template>
	<body id="login_box">
		<el-form class="login-container" label-position="left" label-width="0px">
			<h2>登录</h2>
			<el-form-item label="">
				<el-input type="text" v-model="loginForm.loginName" autocomplete="off" placeholder="请输入账号"></el-input>
			</el-form-item>
			<el-form-item label="">
				<el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="请输入密码">
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="width: 100%; background: #505458; border: none;" v-on:click="Login()">
					登录
				</el-button>
			</el-form-item>
		</el-form>
	</body>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				loginForm: {
					loginName:'',
					password:''
				}
			}
		},
		methods: {
			Login() {
				console.log('this.login.From')
				axios.post('http://116.62.64.78:10086/login', this.loginForm).then((resp) => {
					let data = resp.data;
					if (data.success) {
						this.loginForm = {};
						this.$message({
							message: '登录成功',
							type: 'success'
						});
						this.$router.push({
							path: '/'
						})
					}
				})
			},
		}
	}
</script>

<style>
	#login_box {
		background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
		background-size: 100% 130%;
		width: 20%;
		height: 400px;
		background-color: #00000060;
		margin: auto;
		margin-top: 10%;
		text-align: center;
		border-radius: 10px;
		padding: 50px 50px;
	}

	h2 {
		color: #ffffff90;
		margin-top: 5%;
	}

	input {
		border: 0;
		width: 60%;
		font-size: 15px;
		color: #fff;
		background: transparent;
		border-bottom: 2px solid #fff;
		padding: 5px 10px;
		outline: none;
		margin-top: 10px;
	}
</style>

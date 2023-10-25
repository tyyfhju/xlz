<template>
	<div id="poster">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" label-position="left"
			class="sigin_container">
			<h3 class="sigin_title">
				注册页面
			</h3>
			<el-form-item label="" prop="username">
				<el-input type="name" v-model="ruleForm.username" placeholder="请输入用户名" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="" prop="password">
				<el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item label="" prop="checkPass">
				<el-input type="password" v-model="ruleForm.checkPass" placeholder="请确认密码" autocomplete="off">
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="background: #505458;border: none" @click="submitForm(ruleForm)">注册
				</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					username: '',
					password: '',
					checkPass: ""
				},
				rules: {
					username: [{
							required: true,
							message: "请输入你的名称",
							trigger: 'blur'
						},
						{
							min: 2,
							max: 9,
							message: "长度2到9个字符",
							trigger: 'blur'
						}
					],
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(ruleForm) {
				axios.post("http://116.62.64.78:10086/register", this.ruleForm).then((resp) => {
					console.log(resp);
					let data = resp.data;
					console.log(data);
					if (data.success) {
						this.ruleForm = {};
						this.$message({
							message: '注册成功，点击登录按钮进行登录！！！',
							type: 'success'
						});
					}
				})
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
		}
	}
</script>

<style>
	#poster {
		background-position: center;
		height: 100%;
		width: 100%;
		background-size: cover;
		position: fixed;

		margin: 0px;
		padding: 0px;
	}

	.sigin_container {
		border-radius: 15px;
		background-clip: padding-box;
		margin: 90px auto;
		width: 80%;
		padding: 30px 30px 30px 30px;
		background: #fff;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 25px #cac6c6;
	}

	.sigin_title {
		margin: 0px auto 40px auto;
		text-align: center;
		font-size: 30px;
		color: #505458;
	}
</style>

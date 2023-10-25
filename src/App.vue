<template>
	<div id="app">
		<div>
			<el-container>
				<el-header>
					<!-- 头部loge -->
					<div>
						<div style="width: 20%; margin: 10px 10px;">
							<a href=" /"><img src="../public/img/21.jpg"></a>
						</div>
					</div>
				</el-header>
				<el-container>
					<el-container>
						<el-footer>
							<div>
								<div class="flex-container" style="margin: 10px;">
									<div class="flex-item">
										<router-link to="/">
											<el-button type="text" style="border: 0;" plain>
												<h4>首页</h4>
											</el-button>
										</router-link>
									</div>
									<div class="flex-item">
										<router-link to="/introduce">
											<el-button type="text" style="border: 0;" plain>
												<h4>景区介绍</h4>
											</el-button>
										</router-link>
									</div>
									<div class="flex-item">
										<router-link to="/recommend">
											<el-button type="text" style="border: 0;" plain>
												<h4>度假推荐</h4>
											</el-button>
										</router-link>
									</div>
									<div class="flex-item">
										<router-link to="/dynamic">
											<el-button type="text" style="border: 0;" plain>
												<h4>景区动态</h4>
											</el-button>
										</router-link>
									</div>
									<div class="flex-item">
										<router-link to="/serve">
											<el-button type="text" style="border: 0;" plain>
												<h4>客服服务</h4>
											</el-button>
										</router-link>
									</div>

									<!--登录-->
									<router-link to="/login">
										<el-button type="text">登录</el-button>
									</router-link>
									<!-- 注册 -->
									<router-link to="/register">
										<el-button type="text">注册</el-button>
									</router-link>
								</div>
							</div>
						</el-footer>
					</el-container>
				</el-container>
			</el-container>
		</div>
		<el-divider></el-divider>
		<router-view />
	</div>

</template>

<style>
	#app {
		font-family: 楷体 20px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
</style>
<script>
	export default {
		data() {
			return {
				input: '',
				select: '',
				state: '',
				timeout: null,
			};
		},
	};
</script>

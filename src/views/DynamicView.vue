<!-- 景区动态 -->

<template>
	<div class="dynamic">

		<img src="../../public/img/17.png" />

		<el-divider></el-divider>

		<div style="text-align: center;">
			<span>
				<h1>景点资讯</h1>
			</span>
			<el-divider content-position="center">
				<h5>推荐游记</h5>
			</el-divider>
		</div>

		<el-row>
			<el-col :span="12">
				<b-card-group deck>
					<div style="padding-left: 20%;">
						<b-card no-body class="overflow-hidden" style="max-width: 540px;">
							<b-row no-gutters>
								<b-col md="6">
									<img src="../../public/img/46.jpg" />
								</b-col>
								<b-col md="6">
									<b-card-body title="巴厘岛 | 总有一个假日，要属于bali">
										<b-card-text>
											是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。
										</b-card-text>
									</b-card-body>
								</b-col>
							</b-row>
						</b-card>
					</div>
				</b-card-group>
			</el-col>
			<el-col :span="12">
				<b-card-group deck>
					<div style="padding-left: 10%;">
						<b-card no-body class="overflow-hidden" style="max-width: 540px;">
							<b-row no-gutters>
								<b-col md="6">
									<img src="../../public/img/47.jpg" />
								</b-col>
								<b-col md="6">
									<b-card-body title="马来西亚｜惬意在槟城，纵身一跃仙本那">
										<b-card-text>
											马来西亚是我一直很想要去的地方，想去沙巴潜水，想去看看这个被称做世界上最后的伊甸园
										</b-card-text>
									</b-card-body>
								</b-col>
							</b-row>
						</b-card>
					</div>
				</b-card-group>
			</el-col>
		</el-row>
		
		<el-divider></el-divider>
		<el-row>
			<el-col :span="12">
				<b-card-group deck>
					<div style="padding-left: 20%;">
						<b-card no-body class="overflow-hidden" style="max-width: 540px;">
							<b-row no-gutters>
								<b-col md="6">
									<img src="../../public/img/48.jpg"/>
								</b-col>
								<b-col md="6">
									<b-card-body title="手绘琅勃拉邦 | 来日方长，在美丽旧世界浪费时光">
										<b-card-text>
											世界每天都在变，幸运的是，总有一些固守原貌的地方。
										</b-card-text>
									</b-card-body>
								</b-col>
							</b-row>
						</b-card>
					</div>
				</b-card-group>
			</el-col>
			
			<el-col :span="12">
				<b-card-group deck>
					<div style="padding-left: 10%;">
						<b-card no-body class="overflow-hidden" style="max-width: 540px;">
							<b-row no-gutters>
								<b-col md="6">
									<img src="../../public/img/49.jpg" />
								</b-col>
								<b-col md="6">
									<b-card-body title="成都在左，幸福在右，人间烟火，理想生活">
										<b-card-text>
											在想到动笔开始写这篇游记之前，突然发现有一种和 成都 久违的感觉
										</b-card-text>
									</b-card-body>
								</b-col>
							</b-row>
						</b-card>
					</div>
				</b-card-group>
			</el-col>
		</el-row>
<el-divider></el-divider>
		<el-row>
			<el-col :span="12">
				<b-card-group deck>
					<div style="padding-left: 20%;">
						<b-card no-body class="overflow-hidden" style="max-width: 540px;">
							<b-row no-gutters>
								<b-col md="6">
									<img src="../../public/img/50.jpg" />
								</b-col>
								<b-col md="6">
									<b-card-body title="来葛仙村过几天神仙日子！！！">
										<b-card-text>
											上次来江西旅行还是三年前了,今年出国旅行暂停了,全国各地的旅游也都复苏了,而江西作为旅游大省,又是小众冷门,怎能不来一次？
										</b-card-text>
									</b-card-body>
								</b-col>
							</b-row>
						</b-card>
					</div>
				</b-card-group>
			</el-col>
			<el-col :span="12">
				<b-card-group deck>
					<div style="padding-left: 10%;">
						<b-card no-body class="overflow-hidden" style="max-width: 540px;">
							<b-row no-gutters>
								<b-col md="6">
									<img src="../../public/img/51.jpg" />
								</b-col>
								<b-col md="6">
									<b-card-body title="雨季的大理，没有风花雪月，却依旧惊艳了时光">
										<b-card-text>
											这次的 大理 之行，算是一次说走就走的家庭旅行。
										</b-card-text>
									</b-card-body>
								</b-col>
							</b-row>
						</b-card>
					</div>
				</b-card-group>
			</el-col>
		</el-row>
		<el-divider></el-divider>
		<el-container>
			<el-header>
				<h1 style="text-align: center;">出行帮助</h1>
			</el-header>
			<el-main>
				<div class="flex-container">
					<h2>
						<div class="flex-item el-icon-phone-outline">常用电话</div>
					</h2>
					<h2>
						<div class="flex-item el-icon-phone-outline">常用电话</div>
					</h2>
					<h2>
						<div class="flex-item el-icon-phone-outline">常用电话</div>
					</h2>
					<h2>
						<div class="flex-item el-icon-phone-outline">常用电话</div>
					</h2>
					<h2>
						<div class="flex-item el-icon-phone-outline">常用电话</div>
					</h2>
				</div>
			</el-main>
		</el-container>

	</div>
</template>

<script>
	import DynamicWorld from '@/components/DynamicWorld.vue'
	//引用DynamicWorld.vue的内容

	export default {
		name: 'DynamicWorld',
		components: {},
	}
</script>

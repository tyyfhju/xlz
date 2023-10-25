<!-- 度假推荐 -->

<template>
	<div class="recommend">

		<img src="../../public/img/18.png" />

		<el-divider></el-divider>

		<div style="text-align: center;">
			<span>
				<h1>景点住宿</h1>
			</span>
			<el-divider content-position="center">
				<h5>轻松度假从此开始</h5>
			</el-divider>
		</div>

		<div style="margin: 50px 50px;">
			<el-row :gutter="20">
				<el-col :span="6"><img src="../../public/img/10.png">
					<h1>景点住宿</h1>
					<h6>建立于1950年</h6>
				</el-col>
				<el-col :span="6"><img src="../../public/img/11.png">
					<h4>lien 民宿酒店</h4>
					<el-button type="text">
						<h6>预定<i class="el-icon-arrow-right"></i></h6>
					</el-button>
				</el-col>
				<el-col :span="6"><img src="../../public/img/12.png">
					<h4>INCHING 民宿酒店</h4>
					<el-button type="text">
						<h6>预定<i class="el-icon-arrow-right"></i></h6>
					</el-button>
				</el-col>
				<el-col :span="6"><img src="../../public/img/13.png" />
					<h4>VANDA 民宿酒店</h4>
					<el-button type="text">
						<h6>预定<i class="el-icon-arrow-right"></i></h6>
					</el-button>
				</el-col>
				<el-col :span="6" :offset="6"><img src="../../public/img/14.png">
					<h4>MIAOU 民宿酒店</h4>
					<el-button type="text">
						<h6>预定<i class="el-icon-arrow-right"></i></h6>
					</el-button>
				</el-col>
			</el-row>
		</div>

		<el-divider></el-divider>

		<div style="text-align: center;">
			<span>
				<h1>景点饮食</h1>
			</span>
			<el-divider content-position="center">
				<h5>多种多样大饱口福</h5>
			</el-divider>
		</div>

		<div style="margin: 50px 50px;">
			<el-row :gutter="20">
				<el-col :span="6"><img src="../../public/img/22.png">
					<h1>Life Color美食街</h1>
					<h6>建立于1950年</h6>
				</el-col>
				<el-col :span="6"><img src="../../public/img/23.png">
					<h4>TIME 老茶馆</h4>
					<el-button type="text">
						<h6>预定<i class="el-icon-arrow-right"></i></h6>
					</el-button>
				</el-col>
				<el-col :span="6"><img src="../../public/img/24.png">
					<h4>DREAm 特色火锅</h4>
					<el-button type="text">
						<h6>预定<i class="el-icon-arrow-right"></i></h6>
					</el-button>
				</el-col>
				<el-col :span="6"><img src="../../public/img/9.png" />
					<h4>NANG 特色酒庄</h4>
					<el-button type="text">
						<h6>预定<i class="el-icon-arrow-right"></i></h6>
					</el-button>
				</el-col>
				<el-col :span="6" :offset="6"><img src="../../public/img/25.png" />
					<h4>MIAOU 民宿酒店</h4>
					<el-button type="text">
						<h6>预定<i class="el-icon-arrow-right"></i></h6>
					</el-button>
				</el-col>
			</el-row>
		</div>
		<el-divider></el-divider>

		<el-container>
			<el-header>
				<h1>出行帮助</h1>
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


	export default {
		components: {},
	}
</script>

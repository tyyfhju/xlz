<!-- 首页 -->

<template>
	<div class="home">
		<el-container>
			<!-- 左边菜单栏 -->
			<!-- <el-aside width="200px" style="height: 20em;">
				<el-menu style=" width: 200px;">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-s-shop"></i>酒店</template>
						<el-submenu index="3-4">
							<template slot="title">国内酒店</template>
							<el-menu-item index="3-4-1">五星级酒店</el-menu-item>
							<el-menu-item index="3-4-2">五星级酒店</el-menu-item>
							<el-menu-item index="3-4-3">五星级酒店</el-menu-item>
							<el-menu-item index="3-4-4">五星级酒店</el-menu-item>
						</el-submenu>
						<el-submenu index="3-5">
							<template slot="title">国外酒店</template>
							<el-menu-item index="3-4-1">希尔顿酒店</el-menu-item>
							<el-menu-item index="3-4-2">希尔顿酒店</el-menu-item>
							<el-menu-item index="3-4-3">希尔顿酒店</el-menu-item>
							<el-menu-item index="3-4-4">希尔顿酒店</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-s-grid"></i>景点</template>
						<el-submenu index="3-4">
							<template slot="title">国内</template>
							<el-menu-item index="3-4-1">安徽</el-menu-item>
							<el-menu-item index="3-4-2">上海</el-menu-item>
							<el-menu-item index="3-4-3">江西</el-menu-item>
							<el-menu-item index="3-4-4">湖南</el-menu-item>
						</el-submenu>
						<el-submenu index="3-5">
							<template slot="title">国外</template>
							<el-menu-item index="3-4-1">美国</el-menu-item>
							<el-menu-item index="3-4-2">法国</el-menu-item>
							<el-menu-item index="3-4-3">英国</el-menu-item>
							<el-menu-item index="3-4-4">德国</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-location-outline"></i>出行方式</template>
						<el-menu-item index="3-4-1">汽车</el-menu-item>
						<el-menu-item index="3-4-2">飞机</el-menu-item>
						<el-menu-item index="3-4-3">火车</el-menu-item>
					</el-submenu>
					<el-menu style=" width: 200px;">
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-s-shop"></i>用车</template>
							<el-menu-item index="3-4-1">国内用车</el-menu-item>
							<el-menu-item index="3-4-2">境外租车</el-menu-item>
							<el-menu-item index="3-4-3">接送机站</el-menu-item>
							<el-menu-item index="3-4-4">按天包车</el-menu-item>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title"><i class="el-icon-s-grid"></i>全球购</template>
							<el-menu-item index="3-4-1">名店购</el-menu-item>
							<el-menu-item index="3-4-2">银联特惠</el-menu-item>
							<el-menu-item index="3-4-3">外币兑换</el-menu-item>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title"><i class="el-icon-location-outline"></i>礼品卡</template>
							<el-menu-item index="3-4-1">礼品卡首页</el-menu-item>
							<el-menu-item index="3-4-2">企业采购</el-menu-item>
							<el-menu-item index="3-4-3">心意送礼</el-menu-item>
							<el-menu-item index="3-4-4">礼品卡福袋</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-menu>
			</el-aside> -->

			<el-main>
				<!-- 一号轮播图 -->
				<template>
					<el-carousel :interval="5000" arrow="always">
						<el-carousel-item v-for="user in users">
							<img class="image" :src="'http://116.62.64.78:10086/img/'+user.images">
						</el-carousel-item>
					</el-carousel>
				</template>
			</el-main>
		</el-container>

		<el-divider></el-divider>

		<!-- 卡片 -->
		<el-container>
			<el-row :gutter="20" style="margin-top: 20px;">
				<el-col :span="8">
					<el-col :span="50">
						<el-card shadow="always">
							<router-link to="/essayone" style="text-decoration: none; color: #a1a1a1;">
							30省30城上百家旅游景点疫后为医务人员开放
							2月15日，浙江省旅游集团牵头全国省级国有旅游集团联盟、浙江省国有旅游集团联盟20个省级国有旅游集团、浙江省20座城市国有旅游集团共同发起“致敬逆行、感恩天使，期待胜利，重启美好”公益活动，以山水的力量传递文旅的温度。目前，该活动已吸引了全...
							2020-02-22
							</router-link>
						</el-card>
					</el-col>
				</el-col>
				<el-col :span="8">
					<el-col :span="50">
						<el-card shadow="always" style="margin-top: 10px;">
							<router-link to="/essaytwo" style="text-decoration: none; color: #a1a1a1;">
							2020亚洲乐园及景点博览会5月精彩来袭！
							中国旅游业发展迅猛,产业规模持续扩大,产品体系日益完善,市场秩序不断优化,旅游业逐渐成为国民经济新的增长点。数据显示,2018年中国旅游业总收入达6.0万亿元,对中国GDP的综合贡献为9.94万亿元,占国内GDP总量的11.04%。旅游直接...
							2020-02-22
							</router-link>
						</el-card>
					</el-col>
				</el-col>
				<el-col :span="8">
					<el-col :span="50">
						<el-card shadow="always" style="margin-top: 10px;">
							<router-link to="/essatthree" style="text-decoration: none; color: #a1a1a1;">
							重庆不知名的小县城，曾经是桃花源发源地
							重庆市是我国面积大的一个直辖市和西南地区的龙头城市，近年来由于旅游业的发展，已经晋升为新兴的热门旅游网红城市。但是在重庆市内有一个名气不是很高的县城，叫作酉阳。从重庆的主城区开车过去大概要四个多小时，可以说这是一个比较偏的小县城了。酉阳桃...
							2020-02-22
							</router-link>
						</el-card>
					</el-col>
				</el-col>
			</el-row>
		</el-container>

		<el-divider></el-divider>
		
		<!-- 中心文字 -->
		<el-container>
			<h1 style="text-align: center;">中国XX景点景区</h1>
			<el-footer style="text-align: center;">建立于1950年</el-footer>
		</el-container>

		<!-- 二号轮播图 -->
		<div style="height: inherit;">
			<el-header>
				<template style="width: 100%; height: 100%;">
					<el-carousel height="200px" direction="vertical" :autoplay="false">
						<el-carousel-item v-for="user in users">
							<img class="image" :src="'http://116.62.64.78:10086/img/'+user.images">
						</el-carousel-item>
						</el-carousel-item>
					</el-carousel>
				</template>
			</el-header>
		</div>

		<div style="margin-top: 150px;">
			<el-container>
				<el-footer style="height:120px;">
					<el-col :span="46" style="text-align: center; color: rgb(128, 128, 128);">
						XX镇拥有7000多年文明史和1300年建镇史。据XX镇近郊的谭家湾古文化遗址考证表明，大约在7000年前，XX镇的先民就在这一带繁衍生息了。
						XX镇名乌墩、乌戍。从地理、历史、典故都可找到相关记载,1950年,乌、青两镇合并后称XX镇今。
					</el-col>
				</el-footer>
			</el-container>
		</div>
		<el-divider></el-divider>

		<div style="text-align: center;">
			<h1 style=" rgba(0, 0, 0, 0.047);">景点特色</h1>
			<h6 style="#6b6b6bW">建立于1950年</h6>
		</div>

		<div class="flex-container" style="margin: 50px 50px;">

			<b-card class="card" style="width: 18rem;">
				<img src="img/7.png">
				<div class="card-body">
					<div>
						<h4>度假</h4>
					</div></br>
					<b-card-text class="card-text">
						专业、认、谨慎的精神策划每一场活动让每一次盛典都成为人生与众不同的美好经历。
					</b-card-text>
				</div>
			</b-card>

			<b-card class="card" style="width: 18rem;">
				<img src="img/8.png">
				<div class="card-body">
					<div>
						<h4>文化</h4>
					</div></br>
					<b-card-text class="card-text">
						传统碰撞现代，在乌镇感受中国古老文化的非凡魅力和现代东方生活的融合。
					</b-card-text>
				</div>
			</b-card>

			<b-card class="card" style="width: 18rem;">
				<img src="img/9.png">
				<div class="card-body">
					<div>
						<h4>饮食</h4>
					</div>
					</br>
					<b-card-text class="card-text">
						江南水乡，枕水人家。在乌镇享受精神和身体的放松。
					</b-card-text>
				</div>
			</b-card>

		</div>


		<el-divider></el-divider>

		<el-row :gutter="20" style="margin: 50px;">
			<el-col :span="16">
				<img src="img/15.png">
			</el-col>
			<el-col :span="8">
				<h1>景点建设</h1><br />
				将先进的管理理念实践于对古镇的保护中，对古镇保护开发方式作了有效的探索，积累了成功的经验。
				如管线地埋、河道清淤、修旧如故等工作，都是在全国古镇保护开发中首创或成功运作的典范，
				受到了专家和同行的肯定，被联合国专家考察小组誉为古镇保护之“XX镇模式”。
			</el-col>
		</el-row>

		<el-divider></el-divider>

		<el-row style="text-align: center;">
			<el-col :span="8">
				<h1>景点住宿</h1>
				<h6>轻松度假从此开始</h6>
			</el-col>
		</el-row>

		<div style="margin: 50px 50px;">
			<el-row :gutter="20">
				<el-col :span="6"><img src="img/10.png">
					<h1>景点住宿</h1>
					<h6>建立于1950年</h6>
				</el-col>
				<el-col :span="6"><img src="img/11.png">
					<h4>lifeng 民宿酒店</h4>
					<h6>酒店预定<i class="el-icon-arrow-right"></i></h6>
				</el-col>
				<el-col :span="6"><img src="img/12.png">
					<h4>JINCHENG 民宿酒店</h4>
					<h6>酒店预定<i class="el-icon-arrow-right"></i></h6>
				</el-col>
				<el-col :span="6"><img src="img/13.png" />
					<h4>VANHAO 民宿酒店</h4>
					<h6>酒店预定<i class="el-icon-arrow-right"></i></h6>
				</el-col>
				<el-col :span="6" :offset="6"><img src="img/14.png">
					<h4>MIGUO 民宿酒店</h4>
					<h6>酒店预定<i class="el-icon-arrow-right"></i></h6>
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
	import axios from 'axios'
	import HomeWorld from '@/components/HomeWorld.vue'
	//引用helloword.vue的内容

	export default {
		name: 'HomeView',
		components: {

		},

		data: function() {
			return {
				users: {}
			}
		},
		created: function() {
			axios.get("http://116.62.64.78:10086/findAll")
				.then((Response) => {
					this.users = Response.data
				})
		}
	}
</script>
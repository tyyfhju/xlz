<!-- 景区介绍 -->

<template>
	<div class="Introduce">

		<img src="../../public/img/19.png" />

		<el-divider></el-divider>

		<div style="text-align: center;">
			<span>
				<h1>中国XX景点景区</h1>
			</span>
			<el-divider content-position="center">
				<h5>建立于1945年</h5>
			</el-divider>
		</div>

		<img src="../../public/img/20.png" />

		<el-divider></el-divider>

		<div class="tradition">
			<el-divider content-position="center">
				<h4>传统级景区-十大历史文化名镇</h4>
			</el-divider>
		</div>
		
		<br>

		<div class="container">
			<h5>XX镇作为中国首批十大历史文化名镇和中国十大魅力名镇、全国环境优美乡镇，素有“中国的枕水人家”之誉。
				2003年，XX镇被联合国授予亚太地区遗产保护杰出成就奖；2006年，
				被列入联合国世界文化遗产保护预备清单和中国世界文化遗产预备名单重设目录；
				2010年，XX镇旅游荣膺嘉兴市专业国家优秀旅游景区称号。</h5>
		</div>

		<el-divider></el-divider>

		<div style="width: 30%; padding-right: 100%;">
			<img src="../../public/img/28.png" />
		</div>

		<el-row>
			<el-col :span="8">
				<b-card-group deck>
					<h1>
						<b-card header="当季热卖·跟团旅游">
							<el-collapse v-model="activeName" accordion>
								<el-collapse-item title="热卖1" name="1">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/31.jpg" />
									</div>
									<div id="content">
										<div id="text">苏州+乌镇+杭州3日2晚跟团游</div>
										<div id="news">4.9分18961人出游<el-divider direction="vertical"></el-divider>￥899元起
										</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="热卖2" name="2">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/32.jpg" />
									</div>
									<div id="content">
										<div id="text">南京三日两晚跟团游</div>
										<div id="news">4.8分583人出游<el-divider direction="vertical"></el-divider>￥999元起
										</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="热卖3" name="3">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/33.jpg" />
									</div>
									<div id="content">
										<div id="text">上海崇明岛两日一晚私家团</div>
										<div id="news">5.0分38人出游<el-divider direction="vertical"></el-divider>￥1311元起
										</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="热卖4" name="4">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/34.jpg" />
									</div>
									<div id="content">
										<div id="text">浙江普陀山两日一晚跟团游</div>
										<div id="news">4.8分23174人出游<el-divider direction="vertical"></el-divider>￥350元起
										</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="热卖5" name="5">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/35.jpg" />
									</div>
									<div id="content">
										<div id="text">上海崇明区两日一晚跟团游</div>
										<div id="news">4.9分626人出游<el-divider direction="vertical"></el-divider>￥388元起
										</div>
									</div>
								</el-collapse-item>
							</el-collapse>
						</b-card>
					</h1>
				</b-card-group>
			</el-col>

			<el-col :span="8">
				<b-card-group deck>
					<h1>
						<b-card header="周末畅游·特价机票">
							<el-collapse v-model="activeName1" accordion>
								<el-collapse-item title="热卖1" name="1">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/36.jpg" />
									</div>
									<div id="content">
										<div id="text">上海 <i class="el-icon-sort"></i>大连<el-divider
												direction="vertical"></el-divider>￥238起</div>
										<div id="news">携程精选<el-divider direction="vertical"></el-divider>0.8折</div>
										<div id="news">12-02去12-03回</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="热卖2" name="2">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/37.jpg" />
									</div>
									<div id="content">
										<div id="text">上海 <i class="el-icon-sort"></i>大连<el-divider
												direction="vertical"></el-divider>￥298起</div>
										<div id="news">携程精选<el-divider direction="vertical"></el-divider>1.2折</div>
										<div id="news">12-09去12-11回</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="热卖3" name="3">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/38.jpg" />
									</div>
									<div id="content">
										<div id="text">上海 <i class="el-icon-sort"></i>北京<el-divider
												direction="vertical"></el-divider>￥301起</div>
										<div id="news">携程精选<el-divider direction="vertical"></el-divider>0.9折</div>
										<div id="news">12-03去12-04回</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="热卖4" name="4">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/39.jpg" />
									</div>
									<div id="content">
										<div id="text">上海 <i class="el-icon-sort"></i>郑州<el-divider
												direction="vertical"></el-divider>￥305起</div>
										<div id="news">携程精选<el-divider direction="vertical"></el-divider>1.2折</div>
										<div id="news">12-03去12-06回</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="热卖5" name="5">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/40.jpg" />
									</div>
									<div id="content">
										<div id="text">上海 <i class="el-icon-sort"></i>太原<el-divider
												direction="vertical"></el-divider>￥238起</div>
										<div id="news">携程精选<el-divider direction="vertical"></el-divider>1.3折</div>
										<div id="news">12-24去12-25回</div>
									</div>
								</el-collapse-item>
							</el-collapse>
						</b-card>
					</h1>
				</b-card-group>
			</el-col>
			<el-col :span="8">
				<b-card-group deck>
					<h1>
						<b-card header="节日热卖·全场五折">
							<el-collapse v-model="activeName2" accordion>
								<el-collapse-item title="优惠点1" name="1">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/41.jpg" />
									</div>
									<div id="content">
										<div id="text">斐登（滨海湾金沙购物中心）
											FRED(Marina Bay Sands)</div>
										<el-divider></el-divider>
										<div id="news">法国珠宝品牌FRED斐登由「现代珠宝设计师」Fred Samuel先生于1936年创立。 Fred
											Samuel先生擅长以圆浑浑的结构和几何图案将其个人对海岸明媚风光的想像和热爱呈现出来，创造出一件件如诗如画、经典隽永的珠宝作品。
										</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="优惠点2" name="2">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/42.jpg" />
									</div>
									<div id="content">
										<div id="text">伯爵（圆方）
											Piaget(Elements)</div>
										<el-divider></el-divider>
										<div id="news">
											自1874年创立以来，PIAGET伯爵不断以精湛细腻的珠宝艺术融合复杂制表技术，推出诸多奢华腕表与高级珠宝臻品。这种卓尔不群的工艺源自PIAGET伯爵引以为傲的高级珠宝工艺奥秘。
										</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="优惠点3" name="3">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/43.jpg" />
									</div>
									<div id="content">
										<div id="text">卡地亚（澳门永利皇宫店）
											Cartier(Wynn Palace)</div>
										<el-divider></el-divider>
										<div id="news">
											法国品牌卡地亚始创于1847年，是珠宝界历史悠久的品牌之一。卡地亚也是受贵族明星喜爱的珠宝品牌。无论高级珠宝还是腕表系列，卡地亚都本着出色的制作工艺、专业技术和独特风格，传递着专属其品牌的高贵价值。
										</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="优惠点4" name="4">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/44.jpg" />
									</div>
									<div id="content">
										<div id="text">卡地亚（法国香榭丽舍大道精品店）
											Cartier（France Champs-Élysées）</div>
										<el-divider></el-divider>
										<div id="news">
											卡地亚是知名度高、历史悠久的品牌之一，同时卡地亚也是受贵族明星喜爱的品牌。无论珠宝还是腕表系列，卡地亚都本着出色的制作工艺、专业技术和独特风格，传递着专属其品牌的高贵价值。
										</div>
									</div>
								</el-collapse-item>

								<el-collapse-item title="优惠点" name="5">
									<div id="photo" style="width: 40%;">
										<img src="../../public/img/45.jpg" />
									</div>
									<div id="content">
										<div id="text">博洛茗（南海岸店）
											Bloomingdales(South Coast Plaza)</div>
										<el-divider></el-divider>
										<div id="news">自 1872 年以来，Bloomingdale's
											一直雄踞于时尚潮流的中心，汇集了人们梦寐以求的名牌时装、鞋包、化妆品、精品首饰和礼品。
										</div>
									</div>
								</el-collapse-item>
							</el-collapse>
						</b-card>
					</h1>
				</b-card-group>
			</el-col>
		</el-row>
		<el-divider></el-divider>
		<baidu-map :center="{lng:104.116729,lat:30.629222} " zoom="17" style="height:300px"></baidu-map>
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
	import Introduce from '@/components/IntroduceWorld.vue'
	//引用IntroduceWorld.vue的内容

	export default {
		name: 'IntroduceWorld',
		components: {},
		data() {
			return {
				activeName: '1',
				activeName1: '1',
				activeName2: '1',
			};
		}
	}
</script>

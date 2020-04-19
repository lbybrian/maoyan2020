<template>
	<div>
		<Header title="喵喵影院"/>
		<!--Cinema-->
		<div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城<i class="iconfont iconpull_down"></i>
				</div>
				<div class="brand_switch">
					品牌<i class="iconfont iconpull_down"></i>
				</div>
				<div class="feature_switch">
					特色<i class="iconfont iconpull_down"></i>
				</div>
			</div>
			<CinemaList />
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import CinemaList from '@/components/CinemaList';

export default {
	name:'Cinema',
	components :{
		Header,
		TabBar,
		CinemaList
	}
}
</script>
<style scoped="scoped">
	#content .cinema_menu{
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #E6E6E6;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: white;
	}
</style>












<template>
<div class="movie_body">
	<ul>
		<li>
			<div class="pic_show"><img src="../../../public/images/3.jpg" /></div>
			<div class="info_list">
				<h2>西游记之大圣归来</h2>
				<p>观众评<span class="grade">9.3</span></p>
				<p>主演：张磊（配音）</p>
				<p>2015年7月10日公映</p>
			</div>
			<div class="btn_mall">
				购票
			</div>
		</li>
		<li>
			<div class="pic_show"><img src="../../../public/images/1.jpg" /></div>
			<div class="info_list">
				<h2>木兰·横空出世</h2>
				<p>观众评<span class="grade">暂无评分</span></p>
				<p>主演：？？？？</p>
				<p>未上映</p>
			</div>
			<div class="btn_mall">
				购票
			</div>
		</li>
		<li>
			<div class="pic_show"><img src="../../../public/images/2.jpg" /></div>
			<div class="info_list">
				<h2>恋上美人鱼</h2>
				<p>观众评<span class="grade">暂无评分</span></p>
				<p>主演：？？？？</p>
				<p>未上映</p>
			</div>
			<div class="btn_mall">
				购票
			</div>
		</li>
		<li>
			<div class="pic_show"><img src="../../../public/images/3.jpg" /></div>
			<div class="info_list">
				<h2>西游记之大圣归来</h2>
				<p>观众评<span class="grade">9.3</span></p>
				<p>主演：张磊（配音）</p>
				<p>2015年7月10日公映</p>
			</div>
			<div class="btn_mall">
				购票
			</div>
		</li>
		<li>
			<div class="pic_show"><img src="../../../public/images/1.jpg" /></div>
			<div class="info_list">
				<h2>木兰·横空出世</h2>
				<p>观众评<span class="grade">暂无评分</span></p>
				<p>主演：？？？？</p>
				<p>未上映</p>
			</div>
			<div class="btn_mall">
				购票
			</div>
		</li>
		<li>
			<div class="pic_show"><img src="../../../public/images/2.jpg" /></div>
			<div class="info_list">
				<h2>恋上美人鱼</h2>
				<p>观众评<span class="grade">暂无评分</span></p>
				<p>主演：？？？？</p>
				<p>未上映</p>
			</div>
			<div class="btn_mall">
				购票
			</div>
		</li>
	</ul>
</div>
</template>

<script>
	export default{
		name:'ComingSoon'
	}
</script>

<style scoped="scoped">
/*#content .movie_body{flex:1;overflow: auto;}*/
.movie_body ul{margin: 0 12px; overflow: hidden;}
.movie_body ul li{margin-top: 12px; display: flex;align-items:center;border-bottom:1px #e6e6e6 solid;padding-bottom: 10px;}
.movie_body .pic_show{width: 64px;height: 90px;}
.movie_body .pic_show img{width: 100%;}
.movie_body .info_list{margin-left: 10px;flex:1;position: relative;}
.movie_body .info_list h2{font-size: 17px;line-height: 24px;width: 150px;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
.movie_body .info_list p{font-size: 13px;color: #666666;line-height: 22px;width: 200px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.movie_body .info_list .grade{font-weight: 700;color: #faaf00;font-size: 15px;}
.movie_body .info_list img{width: 50px; position: absolute;right: 10px;top: 5px;}
.movie_body .btn_mall,.movie_body .btn_pre{width: 47px; height: 27px;line-height: 28px;text-align: center;background-color:#F03D37 ;color: #FFFFFF;border-radius: 4px;font-size: 12px;cursor: pointer;}
.movie_body .btn_pre{background-color: #3c9fe6;}
</style>
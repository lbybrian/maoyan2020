<template>
	<!--<div class="movie_body">
		<ul>
			<li>
				<div class="pic_show"><img src="../../../public/images/1.jpg"></div>
				<div class="info_list">
					<h2>无名之辈</h2>
					<p>观众评 <span class="grade">9.2</span></p>
					<p>主演: 陈建斌,任素汐,潘斌龙</p>
					<p>今天55家影院放映607场</p>
				</div>
				<div class="btn_mall">
					购票
				</div>
			</li>
			
		</ul>
	</div>-->
	<div class="movie_body" ref="movie_body">
		<Loading v-if='isloading'></Loading>
		<Scroller v-else :Toscroll='handleToscroll' :TotouchEnd='handleTotouchEnd'>
			<ul>
				<li class="pullDown">{{pulldownMsg}}</li>
				<li v-for="item in movieList" :key="item.index">
					<div class="pic_show" @tap="handleToDetail(item.id)"><img :src="item.img | setimg('128.180')" ></div>
					<div class="info_list">
						<h2 @tap="handleToDetail(item.id)">{{item.nm}}<img v-if="item.version" src="@/assets/maxs.png"/></h2>
						<p>观众评 <span class="grade">{{item.sc}}</span></p>
						<p>主演：{{item.star}}</p>
						<p>上映时间：{{item.comingTitle}}</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
			</ul>
		</Scroller>
	</div>
</template>

<script>
//	import BScroll from 'better-scroll'

export default {
	name:'Nowpling',
	data(){
		return{
			movieList:[],
			pulldownMsg:'',
			isloading:true,
			prevCityId:-1
		}
	},
	activated(){
//		console.log(this.$root);
		var cityid = this.$store.state.city.id;
		if(this.prevCityId===cityid){return;}
		this.isloading=true;
		console.log(1111)
		this.axios.get('/api/movieOnInfoList?cityId='+cityid).then((res)=>{
			var msg = res.data.msg;
			if(msg==='ok'){
				this.movieList = res.data.data.movieList;
				this.isloading=false;
				this.prevCityId=cityid;
//				this.$nextTick(()=>{
//  				var scroll = new BScroll(this.$refs.movie_body,{
//  					tap:true,
//  					probeType:1
//  				});
//  				scroll.on('scroll',(p)=>{
//  					if(p.y>30){
//  						this.pulldownMsg='正在更新...'
//  					}
////  					console.log('scroll')
//  				});
//  				scroll.on('touchEnd',(p)=>{
//						if(p.y>30){
//							this.axios.get('/api/movieOnInfoList?cityId=13').then((res)=>{
//								var msg = res.data.msg;
//								if(msg==='ok'){
//									this.pulldownMsg='更新完后!'
//									setTimeout(()=>{
//										this.movieList = res.data.data.movieList;
//										this.pulldownMsg='';
//									},1000);
//								}
//							})
//						}
//					})
//				})
			}
		})
	},
	methods:{
//		pullDown(){
//			console.log('')
//		}
//		headleTonewpage(){
//			console.log('headleTonewpage')
//		},
		handleToDetail(movieId){
            //console.log(movieId);
            this.$router.push('/movie/detail/1/' + movieId);
        },
		handleToscroll(p){
			if(p.y>50){
				this.pulldownMsg='正在更新...'
			}
		},
		handleTotouchEnd(p){
			if(this.pulldownMsg!=''){
				this.axios.get('/api/movieOnInfoList?cityId=13').then((res)=>{
					var msg = res.data.msg;
					if(msg==='ok'){
						this.pulldownMsg='更新完后!'
						setTimeout(()=>{
							this.movieList = res.data.data.movieList;
							this.pulldownMsg='';
						},1000);
					}
				})
			}
		}
	}
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;margin-top: 45px;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{ margin:0; padding:0; border:none;color: blue;}
</style>

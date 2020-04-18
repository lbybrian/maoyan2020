<template>
	<div class="city_body">
		<div class="city_list">
			<Loading v-if='isloading'></Loading>
			<Scroller v-else ref="city_list">
				<div>
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li v-for="item in hotList" :key="item.id" @tap="handleTocity(item.nm,item.id)">{{item.nm}}</li>
						</ul>
					</div>
					<div class="city_sort" ref="city_sort">
						<div v-for="a in cityList" :key="a.id">
							<h2>{{a.index}}</h2>
							<ul>
								<li v-for="itemList in a.list" :key="itemList.id" @tap="handleTocity(itemList.nm,itemList.id)">{{itemList.nm}}</li>
							</ul>
						</div>
					</div>
			</div>
			</Scroller>
		</div>
			<div class="city_index">
					<ul>
						<!--源数据-->
						<!--<li v-for="(item,check) in cityList" :key="item.index" @touchstart="handleToIndex(check)">{{item.index}}</li>-->
						<li v-for="(item,check) in cityList" :key="item.id" @touchstart="handleToIndex(check)">{{item.index}}</li>
					</ul>
			</div>
	</div>
</template>

<script>
	export default{
		name:'City',
		data(){
			return{
				cityList:[],
				hotList:[],
				isloading:true,
			}
		},
		activated(){
			
			var hotList = window.localStorage.getItem('hotList');
			var cityList = window.localStorage.getItem('cityList');
			
			if(cityList&&hotList){
				this.cityList=JSON.parse(cityList);
				this.hotList=JSON.parse(hotList);
				
			}
			this.axios.get('/api/cityList').then((res)=>{
//				console.log(res);
				var msg = res.data.msg;
				if(msg ==='ok'){
					this.isloading=false;
					var cities = res.data.data.cities;
					var {cityList,hotList}= this.formatCityList(cities);
					this.cityList = cityList;
					this.hotList = hotList;
					window.localStorage.setItem('citiList',JSON.stringify(cityList));
					window.localStorage.setItem('hotList',JSON.stringify(hotList));
				}
			});
		},
		methods:{
			formatCityList(cities){
				var cityList = [];
				var hotList = [];
				
				for(var r=0;r<cities.length;r++){
					if(cities[r].isHot === 1){
						hotList.push(cities[r]);
					}
				}
				
				for(var i=0;i<cities.length;i++){
					var firstLetter = cities[i].py.substring(0,1).toUpperCase();
					if(toCom(firstLetter)){
						cityList.push({index:firstLetter,list:[{nm:cities[i].nm,id:cities[i].id}]});
					}
					else{
						for(var j=0;j<cityList.length;j++){
							if(cityList[j].index===firstLetter){
								cityList[j].list.push({nm:cities[i].nm,id:cities[i].id});
							}
						}
					}
				}
				
				cityList.sort((n1,n2)=>{
					if(n1.index>n2.index){
						return 1;
					}else if(n1.index<n2.index){
						return -1;
					}else{
						return 0;
					}
				})
				
				function toCom(firstLetter){
					for (var i=0;i<cityList.length;i++){
						if(cityList[i].index === firstLetter){
							return false;
						}
					}
					return true;
				}
//				console.log(cityList);
//				console.log(hotList);
				return {
					cityList,
					hotList
				}
			},
			handleToIndex(index){
	            var h2 = this.$refs.city_sort.getElementsByTagName('h2');
//	            this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
	            this.$refs.city_list.ToscrollTop(-h2[index].offsetTop);
	        },
	        handleTocity(nm,id){
	        	this.$store.commit('city/CITY_INFO',{nm,id});
	        	window.localStorage.setItem('nowNm',nm);
	        	window.localStorage.setItem('nowId',id);
	        	this.$router.push('movie/NowPlaying')
	        }
		}
	}
</script>

<style scoped="scoped">
#content .city_body{margin-top: 45px;display: flex;width: 100%;position: absolute;top: 0;bottom: 0;}
.city_body .city_list{flex: 1;overflow: auto;background: #fff5f0;}
.city_body .city_list::-webkit-scrollbar{background-color: transparent;width: 0;}
.city_body .city_hot{margin-top: 20px;/*display: flex;flex-direction: column;*/}
.city_body .city_hot h2{padding-left: 15px;line-height: 30px;font-size: 14px;background: #f0f0f0;font-weight: normal;}
.city_body .city_hot ul li{float: left;background: #ffffff;width: 29%;height: 33px;margin-top: 15px;margin-left: 3%;padding:0 4px; border: 1px solid #E6E6E6;border-radius: 3px;line-height: 33px;text-align: center;box-sizing: border-box;}
/*.city_body .city_sort{float: left;}*/
.city_body .city_sort div{margin-top: 20px;}
.city_body .city_sort h2{padding-left: 15px;line-height: 30px;font-size: 14px;background: #F0F0F0;font-weight: normal;}
.city_body .city_sort ul{padding-left: 10px;margin-top: 10px;}
.city_body .city_sort ul li{line-height: 30px;}
.city_body .city_index{width: 20px; display: flex;flex-direction: column;justify-content: center;text-align:center;border-left:1px #E6E6E6 solid;/*float: right;margin-top: 50%;background-color: #FFFFFF;*/}
</style>

<!--<style scoped>
#content .city_body{margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{background-color:transparent;width:0;}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>-->
 
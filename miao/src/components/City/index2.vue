<template>
	<div class="city_body">
		<!--地图插件待加载-->
		<div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li>上海</li>
					<li>北京</li>
					<li>武汉</li>
					<li>杭州</li>
					<li>深圳</li>
					<li>邢台</li>
					<li>隆尧</li>
				</ul>
			</div>
			<div class="city_sort">
				<div>
					<h2>A</h2>
					<ul>
						<li>阿里山</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>B</h2>
					<ul>
						<li>北京</li>
						<li>保定</li>
						<li>包头</li>
						<li>北方</li>
					</ul>
				</div>
				<div>
					<h2>C</h2>
					<ul>
						<li>沧州</li>
						<li>曹碑店</li>
						<li>草原</li>
						<li>苍岩山</li>
					</ul>
				</div>
				<div>
					<h2>D</h2>
					<ul>
						<li>德州</li>
						<li>保定</li>
						<li>包头</li>
						<li>北方</li>
					</ul>
				</div>
			</div>
				<div class="city_index">
					<ul>
						<li>A</li>
						<li>B</li>
						<li>C</li>
						<li>D</li>
						<li>E</li>
						<li>F</li>
						<li>G</li>
						<li>H</li>
						<li>I</li>
						<li>J</li>
						<li>K</li>
						<li>L</li>
						<li>M</li>
					</ul>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'City',
		mounted(){
			this.axios.get('/api/cityList').then((res)=>{
//				console.log(res);
				var msg = res.data.msg;
				if(msg ==='ok'){
					var cities = res.data.data.cities;
					this.formatCityList(cities);
				}
			});
		},
		methods:{
			formatCityList(cities){
				var cityList = [];
//				var hotList = [];
				for(var i=0;i<cities.length;i++){
					var firstLetter = cities[i].py.substring(0,1).toUpperCase();
					function toCom(firstLetter){
						for (var i=0;i<cityList.length;i++){
							if(cityList[i].index === firstLetter){
//								return false;
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
//						return true;
					}
					toCom(firstLetter);
					
//					if(toCom(firstLetter)){
//						cityList.push({index:firstLetter,list:[{nm:cities[i].nm,id:cities[i].id}]});
//					}
//					else{
//						for(var j=0;j<cityList.length;j++){
//							if(cityList[j].index===firstLetter){
//								cityList[j].list.push({nm:cities[i].nm,id:cities[i].id});
//							}
//						}
//					}
					
					
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
				
				console.log(cityList);
			}
		}
	}
</script>

<style scoped="scoped">
	#content .city_body{margin-top: 45px;display: flex;width: 100%;position: absolute;top: 0;bottom: 0;}
	.city_body .city_list{flex: 1;overflow: auto;background: #fff5f0;}
	.city_body .city_list::-webkit-scrollbar{background-color: transparent;width: 0;}
	.city_body .city_hot{margin-top: 20px;display: flex;flex-direction: column;}
	.city_body .city_hot h2{padding-left: 15px;line-height: 30px;font-size: 14px;background: #f0f0f0;font-weight: normal;}
	.city_body .city_hot ul li{float: left;background: #ffffff;width: 29%;height: 33px;margin-top: 15px;margin-left: 3%;padding:0 4px; border: 1px solid #E6E6E6;border-radius: 3px;line-height: 33px;text-align: center;box-sizing: border-box;}
	.city_body .city_sort{float: left;}
	.city_body .city_sort div{margin-top: 20px;}
	.city_body .city_sort h2{padding-left: 15px;line-height: 30px;font-size: 14px;background: #F0F0F0;font-weight: normal;}
	.city_body .city_sort ul{padding-left: 10px;margin-top: 10px;}
	.city_body .city_sort ul li{line-height: 30px;}
	.city_body .city_index{width: 20px; display: flex;flex-direction: column;justify-content: center;text-align:center;border-left:1px #E6E6E6 solid;float: right;margin-top: 50%;/*color: #FFFFFF;*/}
	
</style>
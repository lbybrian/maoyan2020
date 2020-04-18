<template>
	<div class="wapper" ref="wapper">
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:'Scroller',
		props:{
			Toscroll:{
				type:Function,
				default:function () {}
			},
			TotouchEnd:{
				type:Function,
				default:function () {}
			}
		},
		mounted(){
			var scroll = new BScroll(this.$refs.wapper,{
				tap:true,
				probeType:1
			});
			
			this.scroll = scroll;
			
			scroll.on('scroll',(p)=>{
				this.Toscroll(p);
			});
			scroll.on('touchEnd',(p)=>{
				this.TotouchEnd(p)
			})
				
		},
		methods:{
			ToscrollTop(y){
				this.scroll.scrollTo(0,y)
			}
		}
	}
</script>

<style scoped="scoped">
	.wapper{height: 100%;}
</style>
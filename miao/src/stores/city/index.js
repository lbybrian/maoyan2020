const state={
	nm:window.localStorage.getItem('nowNM')|| '北京',
	id:window.localStorage.getItem('nowID')|| 1
}
const mutations:{
	CITY_INFO(state,payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }
}
export default {
	namespaced:true,
	state,
	mutations
}

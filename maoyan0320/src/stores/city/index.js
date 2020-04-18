const state = {
   nm : window.localStorage.getItem('nowNm') || '北京',
    id : window.localStorage.getItem('nowId') || 1
};

const actions = {

};

const mutations = {
	//修改所选城市
    CITY_INFO(state , payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}
import { createStore } from 'vuex'

import { getData as getListCashService } from '../services/cash'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
      async listCash({commit}, data) {
          try {
              const response = await getListCashService(data)

              if(response.status){
                  return response
              }
          } catch (error) {
              console.log(error);
          }
      }
  },
  modules: {
  }
})
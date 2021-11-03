import { createStore } from 'vuex'

import { 
    getData as getListCashService ,
    addData as addDataCashService 
} from '../services/cash'

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
      },

      async addCash({commit}, data) {
          try {
              const response = await addDataCashService(data)

              if(response.status){
                  return response
              }
          } catch (error) {
              console.log(error);
          }
      },

      async editCash({commit}, data) {
          try {
              const response = await editDataCashService(data)

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
const {defineStore}=Pinia;  //在用pinia之前要引入defineStore，告訴 vue 說我要開始使用 store 囉!

export default defineStore('productStore',{ //用defineStore去建立一個store  兩參數：1、自定義名稱，2、建立物件
    //data,methods,computed ＝> Vue寫法
    //state,action,getters ＝> Store寫法 
    state:()=>({
      products: [
        {
          id: 1,
          title: '多色餅乾',
          imageUrl: 'https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: 80
        },
        {
          id: 2,
          title: '綠色馬卡龍',
          imageUrl: 'https://images.unsplash.com/photo-1623066463831-3f7f6762734d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80',
          price: 120
        },
        {
          id: 3,
          title: '甜蜜左擁右抱',
          imageUrl: 'https://images.unsplash.com/photo-1558312657-b2dead03d494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: 200,
        },
        {
          id: 4,
          title: '巧克力心連心',
          imageUrl: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: 160
        },
        {
          id: 5,
          title: '粉係馬卡龍',
          imageUrl: 'https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: 120
        }
      ]
    }),
    getters:{  //讓元件可以取用相關的資料狀態 getters操作資料邏輯
      sortProducts:({products})=>{  //透過解構的方式，將products做使用
        return products.sort((a,b)=>a.price-b.price);
      }
    }
})
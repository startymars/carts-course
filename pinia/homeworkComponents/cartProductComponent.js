import productStore from '../store/productStore.js'
import cartStore from '../store/cartStore.js'
const { mapState,mapActions} =Pinia; //取的多個資料狀態，使用mapState方法
 
export default{
  data(){
    return{
      
    }
  },
    template:`<div class="row row-cols-3 my-4 g-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <div class="card">
        <img :src="product.imageUrl"
        class="card-img-top"
        alt="" />
      </div>
      <div class="card-body">
        <h6 class="card-title">{{product.title}}
          <span class="float-end">$ {{product.price}}</span>
        </h6>
  
        <a href="#" class="btn btn-outline-primary w-100" @click="addToCart(product.id)">加入購物車</a>
      </div>
    </div>
  </div>`,
  computed:{
    ...mapState(productStore,['sortProducts']) //使用展開形式 兩參數1、引入的store名稱  2、Store使用到的getter名稱
  },
  methods:{
    ...mapActions(cartStore,['addToCart'])
  }
}
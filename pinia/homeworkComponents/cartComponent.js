import cartStore from "../store/cartStore.js"
const { mapState,mapActions} =Pinia; //取的多個資料狀態，使用mapState方法

export default{
    template:`<div class="bg-light my-4 p-4">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div> <!--v-if-->
    <!--v-else-->
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td>
            <a href="#" class="text-dark" @click.prevent="removeCartItem(item.id)">x</a>
          </td>
          <td>
            <img :src="item.product.imageUrl"
            class="table-image"
            alt=""
          />
          </td>
          <td>{{item.product.title}}</td>
          <td>
            <select name="" id="" class="form-select" :value="item.qty" @change="(evt)=>setCartQty(item.id,evt)">
              <option :value="1" v-for="i in 20" :key="i">{{i}}</option>
            </select>
          </td>
          <td class="text-end">
            $ {{ item.subtotal }}
          </td>
        </tr>
      </tbody>
      <tfoot>
  
      </tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額NT$ {{ cartList.total }}</td>
        </tr>
    </table>
  </div>`,
  computed:{
    ...mapState(cartStore,['cartList']) //使用展開形式 兩參數1、引入的store名稱  2、Store使用到的getter名稱
  },
  methods:{
    ...mapActions(cartStore,['removeCartItem','setCartQty'])
  }
}
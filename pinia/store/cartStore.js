//管理購物車的所有方法都會儲存在這個地方

const {defineStore}=Pinia;  //在用pinia之前要引入defineStore，告訴 vue 說我要開始使用 store 囉!
import productStore from "./productStore.js";

export default defineStore("cart",{
    state:()=>({  //購物車列表
        cart:[]
    }),
    actions:{  //加入購物車的行為
        addToCart(productId,qty=1){
            console.log(productId,qty);
            //取得已經有加入購物車的項目
            const currentCart=this.cart.find((item)=>item.productId===productId)
            console.log(currentCart,"還沒被加入");
            //進行判斷，如果已將該項目加入購物車 數量加1 ，否則新增該項目

            if(currentCart){
                console.log(currentCart,"我有了");
                currentCart.qty+=qty;
                console.log(currentCart.qty); 
            }else{

                this.cart.push({
                    id:new Date().getTime(),
                    productId,
                    qty})
                // console.log(this.cart);
            }
           
           
        },
        removeCartItem(id){
            const index=this.cart.findIndex((item)=>item.id===id);//取的索引值
            this.cart.splice(index,1);
        },
        setCartQty(id,event){
            console.log(id,event);
            console.log(event.target.value);
            const currentCart=this.cart.find((item)=>item.id===id);
            console.log(currentCart);
            currentCart.qty=event.target.value*1;
           
        }
    },
    getters:{ //讓元件可以取用相關的資料狀態 getters操作資料邏輯
         cartList:({cart})=>{
             //1.購物車的產品資訊，需要整合產品資訊
            //2.必須計算小計
            //3.必須提供總金額
            const {products}=productStore(); //元件中取出store資訊=>用mapState，從另一個store取用資訊到另一個store會直接執行會直接執行並用展開形式取出
            // console.log(products);
            // console.log(cart);

            const carts=cart.map((item)=>{
                console.log(item,"是你嗎");
                //單一產品取出
                const product=products.find((product)=>product.id===item.productId);
                console.log("相同",product);
                return{
                    ...item, //購物車原本產品資訊
                    product, //單一產品資訊
                    subtotal:product.price*item.qty
                }
            })
            const total=carts.reduce((a,b)=>a+b.subtotal,0);
            console.log(total);

            console.log("我在這裡",carts);
            

             return{
                carts,
                total
             }
         }
    }
});
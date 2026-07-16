"use client";

import { useCart } from "@/context/CartContext";

const CartPage = () => {

const {

cartItems,
increaseQuantity,
decreaseQuantity,
removeItem,

} = useCart();


const totalPrice = cartItems.reduce(

(total,item)=>

total + item.price * item.quantity,

0

);


return (

<div className="max-w-6xl mx-auto p-10">

<h1 className="text-4xl font-bold">

My Cart

</h1>


{
cartItems.length === 0 ?

(

<h2 className="mt-10">

Your Cart is Empty

</h2>

)

:

(

<>

{

cartItems.map((item)=>(

<div key={item.id}>

<h2>{item.name}</h2>

<p>৳ {item.price}</p>

<p>Qty : {item.quantity}</p>

<button
onClick={()=>
decreaseQuantity(item.id)
}
>
-
</button>

<button
onClick={()=>
increaseQuantity(item.id)
}
>
+
</button>

<button
onClick={()=>
removeItem(item.id)
}
>
Remove
</button>

</div>

))

}

<h2>

Total Price : ৳ {totalPrice}

</h2>

</>

)

}

</div>

);

};

export default CartPage;
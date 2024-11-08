import toast from "react-hot-toast"

// get all products
const getAllProduct =() => {
    const all = localStorage.getItem('addCart')
   
   if(all) {
     return JSON.parse(all)

   }
   else{
    
    return []
   }
}


// add to card local storage
const addToCard  = (product) => {
    const cart = getAllProduct()
    const isExist = cart.find(item => item.product_id === product.product_id)

    if(isExist) return toast.error('This product already add to cart!');


    cart.push(product)
    localStorage.setItem('addCart', JSON.stringify(cart))
    toast.success('Successfully add to cart')
}



export {addToCard,getAllProduct}
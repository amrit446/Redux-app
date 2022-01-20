import React from 'react'

function Home(prop) {
    console.warn("prop", prop)
    return (
        <div>
           <div className='add-to-cart'>
           
           </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1432&q=80" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                <button onClick={()=>
                    prop.addToCartHandler({price:'1000', name:"i ohone"})}>Add To Cart</button>
                <button 
                className='remove-cart-btn'
                onClick={()=>
                    prop.removeToCartHandler({price:'1000', name:"i ohone"})}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home
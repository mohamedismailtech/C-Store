import React, {Component} from 'react';
import {Switch, Route} from 'react-router'
import Navbar from './Components/NavBar'
import Cart from './Components/Cart/Cart'
import ProductsGrid from './Components/Products/ProductsGrid'
import ProductDetails from './Components/Products/ProductDetails'
import {GridData} from './data'
import Default from './Components/Default'
import './App.css';


class App extends Component {

  state = {
   products: GridData ,
   productDetails: {},
   cart: [],
   totalPrice: 0,
   modalInfo:{},
   modalVisibility:false
  }

  // function to get the selected product
  getProduct = (id)=>{
    let productTemp = this.state.products.filter(product => product.id === id)[0]
    this.setState({
      productDetails : productTemp
    })
    return productTemp
  }
  
  // function to add the selected product from the cart
  addToCart = (id) => {
    let productTemp = this.state.products.filter(product => product.id === id)[0] 
    let totalPriceTemp = this.state.totalPrice + productTemp.total
    this.setState(
      (preState) => {
      return {cart: [productTemp,...preState.cart],totalPrice: totalPriceTemp}
      },
      ()=>{
        this.totalPriceHandler()
      }
    )
    this.inCartHandler(id,true)
  }

  // function to delete the selected product from the cart
  removeFromCart = (id) => {
    this.setState(()=>{
      return {cart : this.state.cart.filter(product => product.id !== id)}
    },
      ()=>{
        this.totalPriceHandler()
      }
    )
    this.inCartHandler(id,false)
    this.productInfoReset(id)
  }

  // function to handle either the product on the cart or not.
  inCartHandler = (id,type) => {
    let productsTemp = [...this.state.products];
    const index = productsTemp.indexOf(this.getProduct(id))
    const productTemp = productsTemp[index]
    if(type === true)
      productTemp.inCart = true;
    else
      productTemp.inCart = false;
    this.setState({product:productsTemp})
    this.totalPriceHandler()

  }

  //function to increase quantity of the seleced product
  increaseQuantity = (id) => {
    this.state.cart.filter(product => product.id === id)[0].count++
    this.forceUpdate()
    this.productTotalPriceHandler(id,'increase')
    this.totalPriceHandler()

  }
  
  //function to decrease quantity of the seleced product
  decreaseQuantity = (id) => {
    this.state.cart.filter(product => product.id === id)[0].count--
    this.forceUpdate()
   
    if(this.state.cart.filter(product => product.id === id)[0].count === 0)
      this.removeFromCart(id)
    
      this.productTotalPriceHandler(id,'decrease')

    if(this.state.cart.filter(product => product.id === id)[0].total === 0 )
      this.productInfoReset(id)
    this.totalPriceHandler()

  }

  //function to increase or decrease the total price depend on the quantity of the selected product
  productTotalPriceHandler = (id,type) => {
    let productsTemp = [...this.state.products];
    const index = productsTemp.indexOf(this.getProduct(id))
    const productTemp = productsTemp[index] 
    
    if(type === 'increase')
     productTemp.total += productTemp.price
    else
     productTemp.total -= productTemp.price
    
    this.setState({product:productsTemp})
    this.totalPriceHandler()
  }

  //function to get the total price of the cart
  totalPriceHandler = () => {
    let totalPriceTemp = 0
    this.state.cart.map(item => totalPriceTemp += item.total)
    this.setState({totalPrice:totalPriceTemp})
  }

  //fuction that handle the count and total attributes if the quantity decreased to less than 1 be setting both to the default 
  productInfoReset = (id) => {
    let productsTemp = [...this.state.products];
    const index = productsTemp.indexOf(this.getProduct(id))
    const productTemp = productsTemp[index] 
    productTemp.count = 1
    productTemp.total = productTemp.price
    this.setState({product:productsTemp})
    this.setState({totalPrice:0})
  }

  // function to show the modal 
  openModal = () => {
    this.setState({modalVisibility:true})
  }

  // function to hide the modal 
  closeModal = () => {
    this.setState({modalVisibility:false})
  }

  // function to get information that must be shown in modal
  modalInfoHandler = (id) => {
    let modalInfoTemp = this.state.products.filter(product => product.id === id)[0]
    this.setState({modalInfo:modalInfoTemp})
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <ProductsGrid products = {this.state.products} 
                          addToCart = {this.addToCart} 
                          getProduct = {this.getProduct} 
                          modalInfo = {this.state.modalInfo}
                          modalVisibility = {this.state.modalVisibility}
                          openModal = {this.openModal}
                          closeModal = {this.closeModal}
                          modalInfoHandler = {this.modalInfoHandler}
            />
          </Route>
         
          <Route path='/cart'>
            <Cart cart={this.state.cart} 
                  totalPrice = {this.state.totalPrice} 
                  removeFromCart = {this.removeFromCart} 
                  increaseQuantity = {this.increaseQuantity} 
                  decreaseQuantity = {this.decreaseQuantity}
                  productInfoReset = {this.productInfoReset}
            />
          </Route>
         
          <Route path='/details'>
            <ProductDetails productDetails = {this.state.productDetails} 
                            addToCart = {this.addToCart}
            />
          </Route>
         
          <Route component={Default}/>
        </Switch>
      </div>
    );
  }
}

export default App;

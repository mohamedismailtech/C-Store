import React, {Component} from 'react';
import {Switch, Route} from 'react-router'
import {Redirect} from 'react-router-dom'
import Navbar from './Components/NavBar'
import Cart from './Components/Cart/Cart'
import ProductsGrid from './Components/Products/ProductsGrid'
import ProductDetails from './Components/Products/ProductDetails'
import {Data, mainRange, productType} from './data'
import Profile from './Components/Auth/Profile'
import ChangePassword from './Components/Auth/ChangePassword'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import ForgetPassword from './Components/Auth/forgetPassword'
import DashBoard from './Components/dashboard/Dashboard'
import Default from './Components/Default'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from './constant/Config'


class App extends Component {

  state = {
   products: Data,
   filteredProducts:Data,
   productDetails: {},
   cart: [],
   totalPrice: 0,
   modalInfo:{},
   modalVisibility:false,
   mainRange: mainRange,
   productType: productType,
   currentUserInfo:{
     email:'',
     isAdmin:false
   },
   currentUserId:-1,
   isAuthenticated:false,
   currentUserState:0,
   priceRange:[0,0],
   userhistory:[]
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let isAdminTemp = false
        if(user.email.includes('@admin.com'))
          isAdminTemp = true
        // User is signed in.
        let currentUserInfoTemp = {
          email: user.email,
          isAdmin: isAdminTemp
        } 
        //make user auth and get user id to get his data from firestore
        this.setState({isAuthenticated:true,currentUserId:user.uid,currentUserInfo:currentUserInfoTemp})
        toast.success(`Welcome, ${this.state.currentUserInfo.email}`)

      }else{
        this.setState({isAuthenticated:false})
      }
    });
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
    console.log(id, productTemp)
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

  //check out handle
  checkOutHandler = (history) => {
    // Working on it
    console.log(history)
    if (this.state.isAuthenticated){ 
    toast.success('The purchase was completed successfully! (Just testing not working yet!)',{
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      history.replace('/')
    } else {
        toast.warn('Please login!',{
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          history.replace('/login')
    }
   
  }

  //search for product
  searchingHandler = (name) =>{
    this.setState((preState) => ({
      filteredProducts: preState.products.filter((product)=> product.name.toUpperCase().indexOf(name.toUpperCase()) !== -1)
    }))
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
  
  //filter the price of products
  productsPriceFilter = (event, newValue) => {
    // let filteredProductsTemp = this.state.products.filter(product => {
    //   if(priceFilter.endPrice === 'or less')
    //    return (product.price <= priceFilter.startPrice)
    //    else if (priceFilter.endPrice === '& Above'){
    //     return (product.price >= priceFilter.startPrice)
    //   }
    //   else if(priceFilter.endPrice === 'reset'){
    //     return (product.price > priceFilter.startPrice)
    //   }
    //   else{
    //     return (product.price >= priceFilter.startPrice && product.price <= priceFilter.endPrice)
    //   }
    // })
    // this.setState({filteredProducts:filteredProductsTemp})
    this.setState({priceRange:newValue});
    let min = newValue[0];
    let max = newValue[1];
    let filteredProductsTemp = [];

        if(min === 0 && max === 0)
          this.setState({filteredProducts:this.state.products})
        else{
          filteredProductsTemp = this.state.products.filter(product => (product.price >= min && product.price <= max));
            this.setState({filteredProducts:filteredProductsTemp})
        }
  }
  
  //filter the company of products
  productsCompanyFilter = (companyFilter) => {
    let filteredProductsTemp = Data;
    this.setState({filteredProducts:filteredProductsTemp})
    if(typeFilter === 'reset'){
        this.setState({filteredProducts:Data})
      }
      else{
         filteredProductsTemp = this.state.filteredProducts.filter(product =>{
          return (product.type === typeFilter)
        })
      }
    this.setState({filteredProducts:filteredProductsTemp})
  }

  //login function
  changePasswordHandler = (data,props) =>{

    const user = firebase.auth().currentUser;
    const newPassword = data.newPassword;

    user.updatePassword(newPassword).then(function() {
      
      toast.success('Password has been changed', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        props.history.replace('/');     
      }).catch(function(error) {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });            
      });
    }

  //register function
  registerHandler = (data, props) =>{
    firebase.auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(()=>{
              firebase.firestore()
                      .collection('Users')
                      .doc(firebase.auth().currentUser.uid)
                      .set({
                        name: data.name,
                        email: data.email,
                        admin: false
                      }).then(() => {this.props.History.push("/")})
                        .catch((e)=>console.log(e.message));
              this.setState({isAuthenticated:true,currentUserState:1})     
              props.history.replace('/');     
            })
            .catch((error) => {
              toast.error(error.message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              }); 
  }

  //login function
  loginHandler = (data,props) =>{
    firebase.auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then(()=>{
              this.setState({isAuthenticated:true,currentUserState:1})
              if(data.email.includes('@admin.com')){
                let currentUserInfoTemp = {
                  isAdmin:true,
                  email: data.email
                }
                this.setState({currentUserInfo:currentUserInfoTemp})
              }

              props.history.replace('/');
            })
            .catch((error) => {
              toast.error(error.message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              }); 
  }

  //forget password function
  forgetPasswordHandler = (email, props) =>{
    firebase.auth()
            .sendPasswordResetEmail(email)
            .then(() => {
              props.history.replace('/login');
              toast.success('Reset email has been sent!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              
            })
            .catch((error) => {
              toast.error('This email is not correct!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              }); 
  }
  
  //sign out function
  signOutHandler = () => {
    firebase.auth()
            .signOut() 
            .then(() => {
              const currentUserInfoTemp = {
                isAdmin: false,
                email:''
              }
              this.setState({isAuthenticated:false,currentUserState:0,currentUserInfo:currentUserInfoTemp})
              toast.success('Sign out', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            })
            .catch((error) => {
              toast.error(error.message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
             }); 
  }

  render(){
    const isAuthenticated = this.state.isAuthenticated

    return (
      <div className="App">
        <Navbar currentUserInfo = {this.state.currentUserInfo} 
                isAuthenticated = {this.state.isAuthenticated}
                signOutHandler = {this.signOutHandler}
        />
        <ToastContainer/>
        <Switch>
          <Route exact path='/'>
            <ProductsGrid products = {this.state.filteredProducts} 
                          addToCart = {this.addToCart} 
                          getProduct = {this.getProduct} 
                          modalInfo = {this.state.modalInfo}
                          modalVisibility = {this.state.modalVisibility}
                          openModal = {this.openModal}
                          closeModal = {this.closeModal}
                          modalInfoHandler = {this.modalInfoHandler}
                          mainRange = {this.state.priceRange}
                          productType = {this.state.productType}
                          productsPriceFilter = {this.productsPriceFilter}
                          productsCompanyFilter = {this.productsCompanyFilter}
                          searchingHandler ={this.searchingHandler}/>
          </Route>
          <Route path='/cart' render={ props => (
            <Cart cart={this.state.cart} 
                  totalPrice = {this.state.totalPrice} 
                  removeFromCart = {this.removeFromCart} 
                  increaseQuantity = {this.increaseQuantity} 
                  decreaseQuantity = {this.decreaseQuantity}
                  productInfoReset = {this.productInfoReset}
                  checkOutHandler = {this.checkOutHandler}
                  isAuthenticated = {this.state.isAuthenticated}
                  {...props}
                  />
          )}>
          </Route>     
          <Route path='/products/:id' render={props=>(

            <ProductDetails productDetails = {this.state.products} 
                            addToCart = {this.addToCart}
                            {...props}
            />
          )}>
          </Route>
          <Route path='/Profile' render={ props =>{
            return !isAuthenticated ?  <Redirect to="/" /> : <Profile  email={this.state.currentUserInfo.email} history={this.state.userhistory} {...props}/>;
          }
          }>
          </Route>
          <Route path='/register' render={ props =>{
            return isAuthenticated ?  <Redirect to="/" /> : <Register registerHandler = {this.registerHandler} {...props}/>;
          }
          }>
          </Route>
          <Route path='/login' render={ props => {
            return isAuthenticated ?  <Redirect to="/" /> : <Login loginHandler = {this.loginHandler} {...props}/>;
          }}>
          </Route>
          <Route path='/changePassword' render={ props => {
            return !isAuthenticated ?  <Redirect to="/" /> : <ChangePassword changePasswordHandler = {this.changePasswordHandler} {...props}/>;
          }}>
          </Route>
          <Route path='/forgetpassword' render={ props => (
            <ForgetPassword forgetPasswordHandler = {this.forgetPasswordHandler} {...props}/>
          )}>
          </Route>
          <Route path='/dashboard'>
            <DashBoard/>
          </Route>
          <Route component={Default}/>
        </Switch>
      </div>
    ); 
  }
}

export default App;

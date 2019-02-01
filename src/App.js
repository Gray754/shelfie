import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import routes from './routes'
import {BrowserRouter, Link} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();
    this.state={
      inventory: []
    }
  }

  getData=()=>{
    axios.get('/api/inventory').then(response=>{
      // console.log(response.data)
      this.setState({inventory:response.data})
    }).catch(err=>console.log(err))
  }

  componentDidMount(){
    this.getData()
  }
  

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.inventory.length !== this.state.inventory.length){
  //     axios.get('/api/inventory').then(response=>{
  //       // console.log(response.data)
  //       // this.setState({inventory:response.data})
  //     }).catch(err=>console.log(err))
  //   }
  // }

  render() {
    console.log(this.state)
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
        <Link to='/'>Home </Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to="/add" getData={this.getData}>Form</Link>
        <Dashboard inventory={this.state.inventory}
                   getData={this.getData}/>
        {/* <Form /> */}
        {routes}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

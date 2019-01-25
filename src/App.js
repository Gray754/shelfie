import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inventory: []
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(response=>{
      // console.log(response.data)
      this.setState({inventory:response.data})
    }).catch(err=>console.log(err))
  }

  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
      </div>
    );
  }
}

export default App;

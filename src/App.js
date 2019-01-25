import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import routes from './routes'
import {BrowserRouter, Link} from 'react-router-dom'

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
    // console.log(this.state.inventory)
    return (
      <BrowserRouter>
      <div className="App">
        <Link to="/add">Form</Link>
        <Header/>
        <Dashboard inventory={this.state.inventory}
                   componentDidMount={this.componentDidMount}/>
        <Form componentDidMount={this.componentDidMount}/>
        {routes}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

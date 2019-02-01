import React, {Component} from 'react';
import Product from '../Product/Product'
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            priceUpdate: '',
            editBtn: false
        }
    }

    deleteProduct=(id)=>{
        axios.delete(`/api/product/${id}`).then(()=>{
            this.props.getData();
        }).catch(err=>{
            console.log(err)
        })
    }

    editProduct=(id)=>{
        axios.put(`/api/product/${id}`, {
            price:this.state.priceUpdate
        }).then(()=>{
            // this.props.getData();
        })
    }

    setPriceUpdate=(e)=>{
        this.setState({priceUpdate:e})
    }

    setEdit=()=>{
        this.setState({editBtn:true})
    }

    render(props){
        let {inventory} = this.props
        return(
            <div>
                <h1>Dashboard</h1>
                {inventory.map((e,i)=>
                    <Product key={i}
                             id={e.product_id}
                             name={e.name}
                             price={e.price}
                             image={e.image}
                             deleteProduct={this.deleteProduct}
                             editProduct={this.editProduct}
                             setPriceUpdate={this.setPriceUpdate}
                             setEdit={this.setEdit}/>
                )}
            </div>
        )
    }
}

export default Dashboard;
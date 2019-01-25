import React, {Component} from 'react';
import Product from '../Product/Product'
import axios from 'axios';

class Dashboard extends Component{
    deleteProduct=(id)=>{
        axios.delete(`/api/inventory/${id}`).then(()=>{
            this.props.componentDidMount();
        }).catch(err=>{
            console.log(err)
        })
        
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
                             deleteProduct={this.deleteProduct}/>
                )}
            </div>
        )
    }
}

export default Dashboard;
import React, {Component} from 'react';
import Product from '../Product/Product'

class Dashboard extends Component{
    render(props){
        let {inventory} = this.props
        return(
            <div>
                <h1>Dashboard</h1>
                {/* {this.props.inventory.map((e,i)=><Product/>)} */}
                {inventory.map((e,i)=>
                    <Product key={i} 
                             name={e.name}
                             price={e.price}
                             image={e.image}/>
                )}
                {/* <Product inventory={this.props.inventory}/> */}
            </div>
        )
    }
}

export default Dashboard;
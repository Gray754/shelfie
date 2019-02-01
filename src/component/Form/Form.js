import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(){
        super();
        this.state={
            image: '',
            name: '',
            price: ''
        }
        this.onChange = this.onChange.bind(this)
        this.clearForm = this.clearForm.bind(this)
        this.postProduct = this.postProduct.bind(this)
        // this.editProduct = this.editProduct.bind(this)
    }

    onChange(value, id){
        this.setState({[id]: value})
    }

    clearForm(){
        this.setState({image:''})
        this.setState({name:''})
        this.setState({price:''})
    }

    postProduct(){
        axios.post('/api/product',{
            name: this.state.name,
            price: this.state.price,
            image: this.state.image
        }).then(()=>{
            this.props.getData();
            this.clearForm();
            
        }).catch(err=>{
            console.log(err)
        });
    }

    render(){
        // console.log(this.state.price)
        return(
            <div>
                <h1>Form</h1>
                
                <input  placeholder='image' 
                        onChange={e=>this.onChange(e.target.value, 'image')} 
                        value={this.state.image}/>

                <input  placeholder='name' 
                        onChange={e=>this.onChange(e.target.value, 'name')} 
                        value={this.state.name}/>

                <input  placeholder='price' 
                        onChange={e=>this.onChange(e.target.value, 'price')} 
                        value={this.state.price}/>

                <button onClick={()=>this.clearForm()}>Cancel</button>
                <button onClick={()=>this.postProduct()}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;
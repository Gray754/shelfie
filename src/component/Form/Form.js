import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super();
        this.state={
            imageUrl: '',
            name: '',
            price: ''
        }
        this.onChange = this.onChange.bind(this)
        this.cancelForm = this.cancelForm.bind(this)
    }

    onChange(value, id){
        this.setState({[id]: value})
    }

    cancelForm(){
        this.setState({imageUrl:''})
        this.setState({name:''})
        this.setState({price:''})
    }

    render(){
        // console.log(this.state.price)
        return(
            <div>
                <h1>Form</h1>
                <input placeholder='image url' onChange={e=>this.onChange(e.target.value, 'imageUrl')} value={this.state.imageUrl}/>
                <input placeholder='name' onChange={e=>this.onChange(e.target.value, 'name')} value={this.state.name}/>
                <input placeholder='price' onChange={e=>this.onChange(e.target.value, 'price')} value={this.state.price}/>
                <button onClick={this.cancelForm}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;
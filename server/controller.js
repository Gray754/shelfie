const getDb=(req, res, next)=>{
    const db = req.app.get('db');
    db.getAllProducts().then(results=>{
        // console.log(results)
        res.status(200).json(results)
    }).catch(err=>{
        console.log(err)
        res.status(500).send('There was an error.')
    })
}

const postProduct=(req, res, next)=>{
    const db = req.app.get('db')
    let {name, price, image} =  req.body
    db.addNewProduct([name, price, image]).then(results=>{
        res.status(200).json(results)
    }).catch(err=>{
        console.log(err)
        res.status(500).send('There was an error.')
    })
}

const deleteProduct=(req,res,next)=>{
    const db = req.app.get('db');
    let {id}=req.params;
    db.deleteProduct(id).then(results=>{
        res.status(200).send(`it's all good`).json(results);
    }).catch(err=>{
        console.log(err);
        res.status(500).send('There was an error with the server.')
    })
}

module.exports={
    getDb,
    postProduct,
    deleteProduct
}
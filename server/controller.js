const getDb=(req, res, next)=>{
    const db = req.app.get('db');
    db.getAllProducts().then(results=>{
        console.log(results)
        res.status(200).json(results)
    }).catch(err=>{
        console.log(err)
        res.status(500).send('There was an error.')
    })
}

// const postProduct=(req, res, next)=>{
//     then(response=>{
//         db.
//     })
// }

module.exports={
    getDb,
    // postProduct
}
const productsController = require('../controller/productsController')
const userController = require('../controller/userController')

module.exports = app => {
    app.get('/', productsController.home)

    //api
    app.get('/products', productsController.listProduct)
    app.get('/products/:id', productsController.detailProduct)
    app.post('/products/', productsController.tambahProduct)
    app.put('/products/:id', productsController.ubahProduct)
    app.delete('/products/:id', productsController.hapusProduct)
}

module.exports = app => {
    app.get('/', userController.home)

    //api
    app.get('/user', userController.listUser)
    app.get('/user/:id', userController.detailUser)
    app.post('/user/', userController.tambahUser)
    app.put('/user/:id', userController.ubahUser)
    app.delete('/user/:id', userController.hapusUser)
}
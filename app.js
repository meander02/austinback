const express = require('express');
const app = express();
require('dotenv').config()
const morgan = require('morgan');
const mongoose = require('mongoose');

// const authRoutes = require('./api/routes/auth');
// const userRoutes = require('./api/routes/user');
const categoryRoutes = require('./api/routes/category');
const productRoutes = require('./api/routes/product');
// const makerRoutes = require('./api/routes/maker');
// const minewRoutes = require('./api/routes/minew');
// const loggerRoutes = require('./api/routes/logger');
// const url = 'mongodb+srv://20211036:' +  process.env.MONGO_ATLAS_PW   + '@cluster0.6qjq7cq.mongodb.net/e-commerce-covid?retryWrites=true&w=majority'
const url = 'mongodb+srv://20211036:' +  process.env.MONGO_ATLAS_PW   + '@cluster0.6qjq7cq.mongodb.net/'
    mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Conexión ak MongoDB exitosa');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err.message);
  });
mongoose.Promise = global.Promise;

app.use(morgan('dev'));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//         return res.status(200).json({})
//     }
//     next();
// }); 

// app.use('/uploads', express.static('uploads'));
app.use(express.json());

// app.use('/auth', authRoutes);
// app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
// app.use('/maker', makerRoutes);
// app.use('/minew', minewRoutes);
// app.use('/logger', loggerRoutes);

app.use((req, res, next) => {
    const error = new Error(' corro Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});


module.exports = app;
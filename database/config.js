const mongoose = require('mongoose');

const dbConnection = async () => {


    try {
        await mongoose.connect('mongodb+srv://adminAerounion:tbMYegKfT9GLPAlE@cluster0.lxvt6.mongodb.net/aerounionDb', {
            //await mongoose.connect(process.env.DB_CNN, {

            useUnifiedTopology: true,
            useNewUrlParser: true,

        });

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion de la base de datos');
    }
}

module.exports = {
    dbConnection
}








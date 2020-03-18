import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://mongo:27017/projects' , {useNewUrlParser: true, useUnifiedTopology: true });

const erroDb = mongoose.connection.on('error', err => { logError(err)} );


function connectDb (connection) {
    return new Promise((resolve, reject) => {
        () => resolve('Connection successfuly', connection);
    })
};

export const realConnection  = async function() {

    try {
        let v = await connectDb(db);
    } catch (e) {
        console.log(erroDb)
    }
};




import mongoose, { connection } from "mongoose";


export async function connect() {
    try {
        // mongoose.connect(process.env.MONGO_URI!);

        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        })



        connection.on('connection', () => {
            console.log('connected!');
        });
        connection.on('errors', () => {
            console.log('some errors!');
            process.exit()
        });
    } catch (error) {
        console.log(error);
    }
}
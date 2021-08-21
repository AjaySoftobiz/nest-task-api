import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://admin:K7nQAz3FeeJX4xD@nestroughcluster.jctnu.mongodb.net/proshop?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log("MongoDB connected.....")
    } catch (error) {
        console.log("Error:", error)
        process.exit(1)
    }
}

export default connectDB
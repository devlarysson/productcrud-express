import mongoose from 'mongoose'

const uri = ''

const connectDb = () => {
  mongoose.connect(uri)
    .then(() => console.log('banco conectado'))
    .catch(err => console.log(err))
}

export default connectDb

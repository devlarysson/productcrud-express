import mongoose from 'mongoose'

const connectDatabase = () => {
  const uri = process.env.DB_URI

  mongoose.connect(uri)
    .then(() => console.log('banco conectado'))
    .catch(err => console.log(err))
}

export default connectDatabase
import Product from '../database/models/product'

class ItemsController {
  async list(req, res) {
    const products = await Product.find()

    return res.send(products)
  }

  async create(req, res) {
    const { name, price } = req.body

    const product = new Product({
      name,
      price
    })

    const data = await product.save()

    return res.send(data)
  }

  async retrieve(req, res) {
    const { id } = req.params

    const product = await Product.findById(id)

    return res.send(product)
  }

  async update(req, res) {
    const { id } = req.params
    const { name, price } = req.body

    const product = await Product.findByIdAndUpdate(id, { name, price })

    return res.send(product)
  }

  async delete(req, res) {
    const { id } = req.params

    await Product.deleteOne({_id: id})

    return res.send({message: 'Deletado com sucesso'})
  }
}

export default ItemsController
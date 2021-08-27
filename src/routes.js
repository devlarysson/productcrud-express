import express from 'express'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()

const itemsController = new ItemsController()

const itemsUrl = '/items'
const itemsDetailUrl = `${itemsUrl}/:id`

routes.get(itemsUrl, itemsController.list)
routes.post(itemsUrl, itemsController.create)
routes.get(itemsDetailUrl, itemsController.retrieve)
routes.put(itemsDetailUrl, itemsController.update)
routes.delete(itemsDetailUrl, itemsController.delete)

export default routes
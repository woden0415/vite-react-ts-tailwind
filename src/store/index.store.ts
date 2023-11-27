import { createStore } from 'easy-peasy'
import storeModel from '../model/index.model'
import * as userService from './../model/user/user.service'

const injections = {
  userService,
}

export type Injections = typeof injections

const store = createStore(storeModel, {
  injections,
})

export default store

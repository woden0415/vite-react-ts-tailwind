import { Injections } from '@/store/index.store'
import { Action, Thunk, action, thunk } from 'easy-peasy'

export interface User {
  uid?: string
  name?: string
  email?: string
}

export interface UserModel {
  info: User
  updateUser: Action<UserModel, User>
  getUser: Thunk<UserModel, User, Injections>
}

const userModel: UserModel = {
  info: { uid: '123123', name: 'wangdong', email: 'woden@163.com' },
  updateUser: action((state, payload) => {
    state.info = payload
  }),
  getUser: thunk(async (actions, _payload, { injections }) => {
    try {
      const { userService } = injections
      const user = await userService.getUser()
      actions.updateUser(user)
    } catch (error) {
      actions.updateUser({})
    }
  }),
}

export default userModel

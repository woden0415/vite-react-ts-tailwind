import { persist } from 'easy-peasy'
// import deviceModel, { DeviceModel } from './device/device.model'
import userModel, { UserModel } from './user/user.model'

export interface StoreModel {
  user: UserModel
  // device: DeviceModel
}

const storeModel: StoreModel = {
  user: persist(userModel),
  // device: persist(deviceModel),
}

export default storeModel

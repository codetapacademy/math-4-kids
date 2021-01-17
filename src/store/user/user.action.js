import * as constant from './user.constant'

export const updateParentProfileAction = parent => ({
  type: constant.UPDATE_PARENT_PROFILE,
  payload: { parent }
})

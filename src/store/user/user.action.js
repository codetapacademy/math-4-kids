import * as constant from './user.constant'

export const updateParentProfileAction = profile => ({
  type: constant.UPDATE_PARENT_PROFILE,
  payload: { profile }
})

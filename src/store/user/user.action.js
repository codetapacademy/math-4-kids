import * as constant from './user.constant'

export const setSelectedChildAction = id => ({
  type: constant.SET_SELECTED_CHILD_ID,
  payload: { id }
})

export const updateParentProfileAction = profile => ({
  type: constant.UPDATE_PARENT_PROFILE,
  payload: { profile }
})

export const updateChildProfileAction = profile => ({
  type: constant.UPDATE_CHILD_PROFILE,
  payload: { profile }
})

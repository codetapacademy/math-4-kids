import * as constant from './user.constant'
const localUser = JSON.parse(window.localStorage.getItem('user'))

export const initialState = {
  parent: {
    firstName: '',
    lastName: '',
    age: 18,
    sex: '',
    formName: 'parent'
  },
  children: [
    {
      formName: 'parent',
      firstName: '',
      age: 4,
      settings: {
        difficulty: 1,
        bonus: 0
      },
      earnings: {
        cash: 0,
        time: 0
      },
      spendings: [
        {
          type: 'cash',
          title: 'buy toy ball',
          amount: 550 // penny
        },
        {
          type: 'time',
          title: 'YouTube fun videos',
          amount: 3600 // second
        }
      ]
    }
  ],
  ...localUser
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.UPDATE_PARENT_PROFILE:
      return {
        ...state,
        parent: action.payload.parent
      }

    default:
      return state
  }
}

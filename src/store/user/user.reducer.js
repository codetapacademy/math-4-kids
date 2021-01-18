import * as constant from './user.constant'
const localUser = JSON.parse(window.localStorage.getItem('user'))

export const defaultChildProfile = {
  profile: {
      firstName: '',
      age: 4,
      sex: '',
  },
  formName: 'child',
  settings: {
    level: 1,
    bonus: 0
  },
  earnings: {
    cash: [{
      d: 1,
      b: 0,
      date: 0
    }],
    time: [{
      d: 1,
      b: 0,
      date: 0
    }]
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

export const initialState = {
  parent: {
    profile: {
      firstName: '',
      lastName: '',
      age: 18,
      sex: '',
    },
    formName: 'parent'
  },
  children: [
    defaultChildProfile,
    defaultChildProfile,
  ],
  selected: 0,
  ...localUser
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.SET_SELECTED_CHILD_ID:
      return {
        ...state,
        selected: action.payload.id
      }

    case constant.UPDATE_PARENT_PROFILE:
      return {
        ...state,
        parent: {
          ...state.parent,
          profile: action.payload.profile
        }
      }

    case constant.UPDATE_CHILD_CASH_OR_TIME:
      return {
        ...state,
        children: state.children.map((child, cheie) => cheie === state.selected
          ? ({
            ...child,
            earnings: {
              ...child.earnings,
              [action.payload.type]: [
                ...child.earnings[action.payload.type],
                {
                  d: child.settings.level,
                  b: child.settings.bonus,
                  date: Date.now()
                }
              ]
            }
          })
          : child
        )
      }

    case constant.UPDATE_CHILD_SETTINGS:
      return {
        ...state,
        children: state.children.map((child, cheie) => cheie === state.selected
          ? ({
            ...child,
            settings: {
              ...child.settings,
              [action.payload.settings.type]: action.payload.settings.value
            }
          })
          : child
        )
      }
    case constant.UPDATE_CHILD_PROFILE:
      return {
        ...state,
        children: state.children.map((child, cheie) => cheie === state.selected
          ? ({
            ...child,
            profile: action.payload.profile
          })
          : child
        )
      }

    default:
      return state
  }
}

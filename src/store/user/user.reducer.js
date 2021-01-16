const initialState = {
  parent: {
    firstName: '',
    lastName: '',
    age: 18,
    sex: ''
  },
  children: [
    {
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
  ]
}


export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const initialState = {
  data: [
    {
      'id': 1,
      'first_name': 'Scot',
      'last_name': 'Hainning',
      'email': 'shainning0@so-net.ne.jp',
      'country': 'Thailand',
      'car_model': 'Lincoln',
      'car_model_year': 1996,
      'car_color': 'Maroon',
      'gender': 'Male',
      'job_title': 'Staff Accountant III',
      'bio': 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.'
    }
  ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'OWNERS_DATA':
      return { ...state, data: payload }

    default:
      return state
  }
}

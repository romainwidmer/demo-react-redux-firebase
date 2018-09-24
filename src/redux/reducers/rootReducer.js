const initialState = {
  posts: [
    {id: '0', title: 'Project 1 title', postedBy: 'romain', date: '3rd September, 2am'},
    {id: '1', title: 'Project 2 title', postedBy: 'toto', date: '3rd September, 3am'},
    {id: '2', title: 'Project 3 title', postedBy: 'mario', date: '3rd September, 4am'},
    {id: '3', title: 'Project 4 title', postedBy: 'Ryu', date: '3rd September, 5am'},
  ]
}

const rootReducer = (state = initialState, action) => {
  return state
}

export default rootReducer

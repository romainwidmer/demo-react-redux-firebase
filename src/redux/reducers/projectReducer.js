const initialState = [
  {id: '0', title: 'Project 1 title', postedBy: 'romain', date: '3rd September, 2am'},
  {id: '1', title: 'Project 2 title', postedBy: 'toto', date: '3rd September, 3am'},
  {id: '2', title: 'Project 3 title', postedBy: 'mario', date: '3rd September, 4am'},
  {id: '3', title: 'Project 4 title', postedBy: 'Ryu', date: '3rd September, 5am'}
]


const projectReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error')
      return state
    default:
      return state
  }
};

export default projectReducer;

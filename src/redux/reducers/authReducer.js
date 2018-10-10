const initialState = {
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      console.log('Login success')
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR':
      console.log('login error')
      return {
        ...state,
        authError: 'Login error'
      }
    default:
      return state;
  }
};

export default authReducer;

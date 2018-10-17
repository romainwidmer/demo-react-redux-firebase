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
    case 'SIGNOUT_SUCCESS':
      console.log('SignOut success')  
      return state
    case 'SIGNUP_SUCCESS':
      console.log('SignUp Success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('SignUp Error')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
};

export default authReducer;

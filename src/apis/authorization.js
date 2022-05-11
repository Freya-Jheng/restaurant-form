import {apiHelper} from './../utilities/helpers'

export default {
  signIn ({email, password}) {
    return apiHelper.post('./signin', {
      email,
      password
    })
  },
  signUP (data) {
    return apiHelper.post('./signup', {
      ...data
    })
  }
}


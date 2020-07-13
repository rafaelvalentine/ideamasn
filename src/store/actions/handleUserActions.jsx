// import type from '../type'
import { HTTP } from '../../api/index'

/**
 * types for reducer action
 */
// const {  LOGIN_DATA } = type
/**
 * @name handleSetUser
 * @description redux action function passes payload and action for reducer 
 * @param {Object} payload 
 * @return {NUll} null
 */
// const handleSetUser = payload => ({
//   type: LOGIN_DATA,
//   payload
// })


 
/**
 * @name handleUserLogin 
 * @description  function handles user logins 
 * @param {Object} data 
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleUserLogin = data => dispatch => {
  return HTTP.growthApi()
    .get(`/`)
    .then(res => {
      let result = res.data
      // dispatch(handleSetCats({data: result, paginationCount, paginationLimit, paginationPage}))
      return result
    })
    .catch(err => {
      console.log(err)
    })
}
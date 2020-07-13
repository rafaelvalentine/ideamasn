import type from '../type'
import { HTTP } from '../../api/index'

/**
 * types for reducer action
 */
const { LOADING_PAGE } = type
/**
 * @name handleSetUser
 * @description redux action function passes payload and action for reducer 
 * @param {Object} payload 
 * @return {NUll} null
 */
const handleSetLoader = payload => ({
  type: LOADING_PAGE,
  payload
})


 
/**
 * @name handlePageLoader
 * @description  function handles page loader
 * @param {Object} value
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handlePageLoader = value => dispatch => {
 dispatch(handleSetLoader(value))
}
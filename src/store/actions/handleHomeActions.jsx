import type from '../type'
import { HTTP } from '../../api/index'

/**
 * types for reducer action
 */
const { OWNERS_DATA, SET_RESULT } = type
/**
 * @name handleSetOwners
 * @description redux action function passes payload and action for reducer
 * @param {Object} payload
 * @return {NUll} null
 */
const handleSetOwners = payload => ({
  type: OWNERS_DATA,
  payload
})

/**
 * @name handleSetResult
 * @description redux action function passes payload and action for reducer
 * @param {Object} payload
 * @return {NUll} null
 */
const handleSetResults = payload => ({
  type: SET_RESULT,
  payload
})

/**
 * @name handleUserLogin
 * @description  function handles user logins
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFetchFilters = () => dispatch => {
  return HTTP.filterApi()
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

/**
 * @name handleFilterRequest
 * @description  function fetches a filtered list for server
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFilterRequest = data => dispatch => {
  return HTTP.serverApi()
    .post(`/carowners`,
      data
    )
    .then(res => {
      let result = res.data
      dispatch(handleSetOwners(result.data))
      return result
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * @name handleFetchResults
 * @description  function handles MLB results
 * @param {Null} null
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFetchResults = () => dispatch => {
  const date = new Date()
  const month = date.getMonth() < 10 ? `${date.getMonth() + 1 === 10 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`}` : date.getMonth() + 1
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const year = date.getFullYear()
  const url = `/components/game/mlb/year_${year}/month_${month}/day_${day}/master_scoreboard.json`
  return HTTP.mblResultApi()
    .get(url)
    .then(res => {
      let result = res.data
      // if (result.data.games.game === null || result.data.games.game === undefined) {
      //   dispatch(handleSetResults({ games: { game: [] } }))
      // } else if (result.data && typeof result.data.games.game === 'object') {
      //   dispatch(handleSetResults({ games: { game: [result.data.games.game] } }))
      // } else {
      //   dispatch(handleSetResults({ games: { game: result.data.games.game } }))
      // }
      return result
    })
    .catch(err => {
      console.log(err)
    })
}

import $axios from './requester'
import $ from './address'

export default {
  test () {
    return $axios.get(`${$.common}/test`)
      .then(response => response.data)
  },
  fetchRanking (mode = 0, page = 0, rx = 0, country = '') {
    return $axios.get(`${$.kafuuWebApi}/leaderboard?mode=${mode}&p=${page}&l=50&rx=${rx}&country=${country}`)
      .then(response => response.data)
      .catch(() => { return { code: -1, message: '获取排行榜失败' } })
  }
}

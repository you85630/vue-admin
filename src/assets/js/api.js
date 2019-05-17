import axios from 'axios'
// import VueCookie from 'vue-cookie'
import env from './../../../vue.config.js'

let baseURL

if (env.outputDir === 'pro-dist') {
  baseURL = 'https://api.psyread.com'
} else {
  baseURL = 'https://api.silaishi.com'
}

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  baseURL,
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params: getUtils(params)
    })
  },
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: getUtils(data),
      transformRequest: [
        function (data) {
          let ret = ''
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret.slice(0, -1)
        }
      ]
    })
  }
}

function getUtils (data) {
  // let now = new Date()
  // let Y = now.getFullYear()
  // let M = now.getMonth() + 1
  // let D = now.getDate()
  // let H = now.getHours()
  // let I = now.getMinutes()
  // let S = now.getSeconds()
  // let time = String(Y) + String(M) + String(D) + String(H) + String(I) + String(S)
  // let tokenData = JSON.parse(VueCookie.get('EDUCATIONAL-INSPECTOR-USER'))
  // data.timestamp = time
  // data.token = tokenData ? tokenData.token : ''
  // data.token_id = tokenData ? tokenData.token_id : ''

  return data
}

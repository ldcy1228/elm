import axios from 'axios'
// 使用geolocation获取定位信息
export function fetchLocation () {
  let options = {
    timeout: 8000 // 超时时间
  }
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve(pos)
    }, (err) => {
      reject(err)
    }, options)
  })
}

// 根据经纬度获取地址信息
export function getAddress (latitude, longitude) {
  let url = 'https://restapi.ele.me/bgs/poi/reverse_geo_coding'
  let params = {latitude, longitude}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 根据关键字搜索地址
export function searchAddress (keyword) {
  let url = 'https://restapi.ele.me/bgs/poi/search_poi_nearby'
  let params = {keyword}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

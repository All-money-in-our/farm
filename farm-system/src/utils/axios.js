import axios from 'axios'
import {getItem} from '../utils/webStorage'
import store from  '../store/store'
import ActionCreator from  '../store/actionCreator'

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  //从缓存获取token 添加
  if (config.url === '/weather/mojiweather/forecast.php') {
    return config
  } else {
    config.data.token=getItem('token')||''
    return config;
  }
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  let list=[-996,-997,-998,-999]
  if(list.indexOf(response.data.err)!==-1){
    // token 出问题了
    console.log('token 出问题了',response.data.err)
    store.dispatch(ActionCreator.setTokenModal(true))

    return Promise.reject(response);
  }
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios

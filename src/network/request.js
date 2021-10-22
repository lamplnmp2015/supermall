import axios from 'axios'
export function request(config,success,failure){
  // 创建axios实例
  const instance = axios.create({
    // baseURL:'http://81.68.162.14:3000',
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //拦截器
  instance.interceptors.request.use(config=>{
    // console.log(config);
    return config
  },err=>{
    console.log(err);
  });
  instance.interceptors.response.use(res=>{
   
    return res.data
  },err=>{
    console.log(err);
  });
  // 发送网络请求
  // return instance(config)
  // .then(res=>{
  //   success(res)
  // })
  // .catch(err=>{
  //   failure(err)
  // })
  return instance(config)
}
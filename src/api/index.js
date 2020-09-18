/*
包含n个接口函数请求的函数
*/
import ajax from './ajax.js'
// 1、根据经纬度获取位置详情（经纬度组合geohash）
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')
// 3、根据经纬度获取商铺列表(经度，纬度)
export const reqShops = (longitude, latitude) => ajax('/shops', { longitude, latitude })
// 4、根据经纬度和关键字搜索商铺列表
// export const reqAddress = () => ajax('/search_shops',)
// 5、获取一次性验证码
// export const reqAddress = () => ajax()
// 6、用户名密码登陆
// export const reqAddress = () => ajax()
// 7、发送短信验证码
// export const reqAddress = () => ajax()
// 8、手机号验证码登陆
// export const reqAddress = () => ajax()
// 9、根据会话获取用户信息
// export const reqAddress = () => ajax()
// 10、用户登出
// export const reqAddress = () => ajax()

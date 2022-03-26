import Mock from 'mockjs'
import homeApi from './mockServeData/home.js'

// 调用
Mock.mock('/home/getData', homeApi.getStatisticalData,)
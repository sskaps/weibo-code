/**
 * @description Redis配置
 * @author sskaps
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

// 线上环境
if (isProd) {
    REDIS_CONF = {
        port: 6379,
        host: '47.94.171.117'
    }
}

module.exports = {
    REDIS_CONF
}
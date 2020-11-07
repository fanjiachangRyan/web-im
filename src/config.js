const getDomain = () => {
  const { host } = window.location
  /*
   * 已将本地开发使用的几个域名配置完成，如需访问指定环境的api, 可以通过域名访问，不再再更新此文件
   * */
  const list = {
    'localhost:3000': { api: 'baidu.com', protocol: 'https:' }
  }

  let api = null
  let { protocol } = window.location

  // 线上测试环境配置项，忽动！！！
  list['im-testing.com'] = {
    api: 'im-api.com',
    protocol: 'https:'
  }
  list['im.com'] = {
    api: 'im-api.com',
    protocol: 'https:'
  }

  const info = list[host]

  if (!info) {
    api = `${window.location.hostname}:7001`
  } else {
    api = info.api
    protocol = info.protocol
  }

  return `${protocol}//${api}`
}
export const API_BASE_URL = getDomain()

import request from '@/utils/request'

export function reqLogin(data) {
  return request({
    url: '/v1/auth/login',
    method: 'post',
    data
  })
}

export function reqLogout(data) {
  return request({
    url: '/v1/auth/logout',
    method: 'post',
    data
  })
}
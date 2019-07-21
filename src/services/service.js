/*
 * @Date: 2019-06-15 14:07:39
 * @LastEditors: 李文华
 * @LastEditTime: 2019-06-24 13:47:46
 */
import request from '../utils/request';

// 获取主列表的 我发起的 部分
export async function fetchMyInitiateListViewData(payload) {
  return request('/api/myInitiateList/get', { params: payload });
}

// 获取主列表的 待审批 部分
export async function fetchPendingListViewData(payload) {
  return request('/api/pendingList/get', { params: payload });
}

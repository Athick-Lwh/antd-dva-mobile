/*
 * @Company: 嘉略信息
 * @Date: 2019-06-15 10:43:21
 * @LastEditors: 李文华
 * @LastEditTime: 2019-06-24 13:47:33
 */
import { fetchMyInitiateListViewData, fetchPendingListViewData } from '../services/service';

export default {
  namespace: 'model',
  state: {
    myInitiateList: [],
    pendingList: [],
  },

  // 返回新数据
  reducers: {
    _saveMyInitiateListViewData(state, action) {
      const { data } = action.payload;
      return {
        ...state,
        myInitiateList: state.myInitiateList.concat(data.myInitiateList),
      };
    },

    _savePendingListViewData(state, action) {
      const { data } = action.payload;
      return {
        ...state,
        pendingList: state.pendingList.concat(data.pendingList),
      };
    },
  },

  // 用于异步操作
  effects: {
    *getMyInitiateListViewData({ payload }, { call, put }) {
      const response = yield call(fetchMyInitiateListViewData, payload);
      yield put({
        type: '_saveMyInitiateListViewData',
        payload: response,
      });
    },

    *getPendingListViewData({ payload }, { call, put }) {
      const response = yield call(fetchPendingListViewData, payload);
      yield put({
        type: '_savePendingListViewData',
        payload: response,
      });
    },
  },
};

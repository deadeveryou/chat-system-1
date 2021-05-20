/*
 * @Descripttion: 
 * @version: 
 * @Author: Qyc
 * @Date: 2021-05-12 17:08:23
 * @LastEditors: Qyc
 * @LastEditTime: 2021-05-18 09:26:01
 */
// redux中的state数据不允许直接更改，需要进行拷贝。
// 使用lodash.cloneDeep()方法进行深拷贝
import { cloneDeep } from 'lodash';

export type ReduxState = {
  msg: string;
  routeName: string;
}

type ReduxAction = {
  type: string;
  [index: string]: unknown;
}

export type ReduxDispatch = (action: ReduxAction) => void;

const defaultState: ReduxState = {
  msg: '消息',
  routeName: 'message'
};

const reducer = (state: ReduxState = defaultState, action: ReduxAction) => {
  if (action.type === 'MSG') {
    const cloneState = cloneDeep(state);
    cloneState.msg = action.msg;
    return cloneState;
  }
  if (action.type === 'ROUTENAME') {
    const cloneState = cloneDeep(state);
    cloneState.routeName = action.routeName;
    return cloneState;
  }

  return state;
};

export default reducer;

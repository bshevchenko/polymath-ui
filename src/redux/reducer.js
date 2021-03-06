// @flow

import { combineReducers } from 'redux'
import type { NetworkState } from 'polymath-auth'

import common from './common/reducer'
import toaster from '../modules/toaster/reducer'
import tx from '../modules/tx/reducer'
import account from '../modules/account/reducer'
import type { TxState } from '../modules/tx/reducer'
import type { ToasterState } from '../modules/toaster/reducer'
import type { CommonState } from './common/reducer'
import type { AccountState } from '../modules/account/reducer'

export default combineReducers({
  common,
  toaster,
  tx,
  account,
})

export type PUIState = {
  common: CommonState,
  tx: TxState,
  toaster: ToasterState,
  account: AccountState,
}

export type RootState = {
  form: any, // redux-form
  network: NetworkState,
  pui: PUIState,
}

export type GetState = () => RootState

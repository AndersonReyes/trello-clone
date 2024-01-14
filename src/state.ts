import { atom } from 'recoil'
import {CardListProps} from './components/CardList'

export const boardListsState = atom({
  key: 'boardListsState',
  default: Array<CardListProps>()
});

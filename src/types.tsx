export type AddListAction = {
  listId: string
}

export type MoveListAction = {
  oldIndex: number,
  newIndex: number
}

export type DeleteListAction = {
  listId: string
}

export enum BoardListdAction {
  Add = 1, Move, Delete
}

export type BoardListdActionPayload = AddListAction | MoveListAction | DeleteListAction;

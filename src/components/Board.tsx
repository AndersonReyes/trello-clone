import {AddListAction, BoardListdAction, BoardListdActionPayload} from '../types.tsx';

import '../styles/Board.css'
import {useRecoilState} from 'recoil'
import {boardListsState} from '../state'

import {CardList, CardListProps} from './CardList'

export interface Props {
  action: BoardListdAction,
  payload: BoardListdActionPayload
}

const actionHandler = (props: Props, lists: CardListProps[]) => {
  switch (props.action) {
    case BoardListdAction.Add: {
      const payload = props.payload as AddListAction;
      return [...lists, {"id": payload.listId, title: "New List", cards: []}];

    }

    default:
      return [];
  }

};

export function Board() {
  const [lists, setLists] = useRecoilState(boardListsState);
  const addListOnClick = () => {
    const updatedList = actionHandler({
      action: BoardListdAction.Add,
      payload: {listId: crypto.randomUUID()}
    }, lists);
    setLists(updatedList);
  }

  return (
    <>
      <div className='Board'>
        <div id="BoardCardLists">
          {lists.map(l => <CardList key={l.id} id={l.id} cards={l.cards} title={l.title}/>)}
        </div>
        <button style={{width: "256px"}} onClick={addListOnClick} id='AddListButton'>
          + Add a list
        </button>
      </div>
    </>
  );
}

export default Board;

import {Card, CardProps} from './Card';
import {useState} from 'react'
import '../styles/CardList.css'

export type CardListProps = {
  id: string,
  title: string,
  cards: CardProps[]
}


export function CardList(props: CardListProps) {
  const [cards, setCards] = useState(props.cards);

  const cardDeleteCallback = (cardId: string) => {
    setCards(cards.filter(c => c.id != cardId));
  };
  const addCardToListOnClick = () => {
    setCards([...cards, {id: crypto.randomUUID(), title: "New Card"}])
  };

  return (
    <>
      <div className="CardList">
        <div className="CardListTitle">{props.title}</div>
        <div className="CardListItems">
          {cards.map(c => (
            <Card deleteCallback={cardDeleteCallback} key={c.id} id={c.id} title={c.title}/>))}
        </div>
        <button className="CardListAddCard" onClick={addCardToListOnClick}>+ Add Card</button>
      </div>
    </>
  );
}

import '../styles/Card.css'
import IonIcon from '@reacticons/ionicons'
import {useState} from 'react'
import ContentEditable from 'react-contenteditable'

export type CardProps = {
  id: string,
  title: string,
  deleteCallback?: (cardId: string) => void
}

function noOpOnDelete(cardId: string) {
  console.error(`Delete  on card: ${cardId} called but no callback define`)
  return;
}

export function Card(props: CardProps) {
  const deleteCallback = props.deleteCallback || noOpOnDelete;
  const [cardTitle, setCardTitle] = useState(props.title);
  const [isEditMode, setToggleEditMode] = useState(false);
  const editModeOnClick = () => {
    setToggleEditMode(!isEditMode);
  };
  const [isMouseHover, setMouseHover] = useState(false);

  return (
    <>
      <div onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}
           className="Card">
        <div className="CardMainContent">
          <div className="CardTitle">
            <ContentEditable
              disabled={!isEditMode} html={cardTitle}
              onChange={(e) => setCardTitle(e.target.value)}/>
          </div>
          {isMouseHover && <IonIcon className="CardIcon" onClick={editModeOnClick}
                                    name="create-outline"></IonIcon>}
        </div>
        {isEditMode &&
            <button onClick={() => deleteCallback(props.id)} style={{
              textDecoration: "none",
              background: "red",
              fontSize: "10px",
              width: "min-content"
            }}>Delete</button>
        }
      </div>
    </>
  );
}

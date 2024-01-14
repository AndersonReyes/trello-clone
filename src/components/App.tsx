import './../styles/App.css'
import {RecoilRoot} from 'recoil'
import Board from './Board'

function App() {

  return (
    <RecoilRoot>
      <>
        <div className='App'>
          <div className='Header'>Anderson Trello Clone</div>
          <Board/>
        </div>
      </>
    </RecoilRoot>
  )
}

export default App

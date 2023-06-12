import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const initBoard = [
    null, null, null, null, null, null, null, null, null
  ]
  const [winner, setWinner] = useState(null)
  const [board,setBoard] = useState(initBoard)

  const posible = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,3,6],
    [2,4,7],
    [3,5,8],
    [0,4,8],
    [2,4,6],
  ]

  const TURNS = { // turnos
    X: '❌',
    O: '⚪'
  }

  const [turno,setTurno] = useState('X') 

  const updateBoard = (index)=>{
    if(board[index] || winner) return
    const newBoard =  [...board]
    newBoard[index] = turno
    setBoard(newBoard)
    fnGanadores(newBoard,turno)
  
    setTurno(turno=='X'?'O':'X')
  }

  const fnGanadores = (actBoard, ultimoValor)=>{
    posible.map((valor,indice)=>{
      const [a,b,c] = valor

      console.log(actBoard) 
    
 
      if(actBoard[a] &&
        actBoard[a] === actBoard[b] &&
        actBoard[a] === actBoard[c]
        ){
          console.log(`Ganador es ${actBoard[a]}`)
          setWinner(actBoard[a])
        }
    })
  }
  const marcarCuadrado = (index)=>{
    
  }

  return (
    <>
      <div className='board'>
        <div className='game'>
         {
          board.map((square, index)=>{
            return <div className="square" onClick={()=>updateBoard(index)}>{square}</div>
          })
         }
        </div>
      </div> 

      <button value={`X`} style={{paddind:`10px`}} onClick={marcarCuadrado}>holas</button>
    </>
  )
}

export default App

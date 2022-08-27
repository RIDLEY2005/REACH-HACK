import './index.css'

export function SeeOutcome({ winner }){
  return(
    <div className='section'>
      <h3>
        {
          winner === 2 && 'Player One '
        }
        {
          winner === 0 && 'Player Two '
        }
        {
          winner === 1 && 'Nobody '
        }
         Wins!!
      </h3>
    </div>
  )
}
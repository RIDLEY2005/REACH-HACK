import { Loader } from "../utils";


export function WaitForOpponent({guess}){
  return(
    <div className="section">
      {
        guess && <h4>You played {guess}</h4>
      }
      <Loader />
      <h4>Waiting for opponent...</h4>
    </div>
  )
}
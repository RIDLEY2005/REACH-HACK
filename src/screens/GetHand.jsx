

export function GetHand({ guess, setGuess, resolve}){

  return(
    <div className="section">
      <h4>Pick a number between 2 and 50</h4>
      <input 
        className="input-number" 
        type='text'
        value={guess}
        min={2}
        max={50}
        onChange={ e => {
          const number = e.target.value
          setGuess(number)
        }}
      />
      <button disabled={(guess < 2) || (guess > 50)} onClick={() => resolve(parseInt(guess))} className="button" >Submit Guess</button>
    </div>
  )
}
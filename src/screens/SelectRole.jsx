import { useState } from 'react'
import './index.css'

export function SelectRole({deploy, attach, setWager}){
  const [ isDeployer, setIsDeployer ] = useState(false)
  return(
    <div className='section'>
      {
        isDeployer ? 
        <>
          <h4>Set Wager</h4>
          <input className='input-number' type={'number'} onChange={(e) => setWager(parseInt(e.target.value))} />
          <button className='button' onClick={() => deploy()}>Next</button>
        </>
        :
        <>
          <button className='button' onClick={() => setIsDeployer(true)}>Deploy Contract</button>
          <hr />
          <button className='button' onClick={() => attach()}>Attach to existing contract</button>  
        </>
      }
      
    </div>
  )
}
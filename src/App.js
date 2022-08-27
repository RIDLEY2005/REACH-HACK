import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs'
import { useState } from 'react';
import { views, Loader } from './utils/';
import { AcceptWager, ConnectAccount, GetHand, PasteContractInfo, SeeOutcome, SelectRole, WaitForAttacher, WaitForOpponent, Timeout } from './screens';
import { getRandom } from './utils/random';


const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [ account, setAccount ] = useState({})
  const [ view, setView ] = useState(views.CONNECT_ACCOUNT)
  const [ contractInfo, setContractInfo ] = useState()
  const [ wager, setWager ] = useState(0)
  const [ guess, setGuess ] = useState(0)
  const [ resolver, setResolver ] = useState({ resolve: () => {}})
  const [ outcome, setOutcome ] = useState(0)

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = ""
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = 'success';
      } catch (error) {
        result = 'failed';
      }
      return result;
    },

    deploy: async () => {
      const contract = account.contract(backend);
      backend.Alice(contract, {
        ...Alice,
        wager,
        deadline: 20
      });
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo())
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER)
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Bob(contract, Bob)
      setView(views.ATTACHING)
    },
  }

  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),

    getHand: () => {
      return new Promise((resolve) => {
        setView(views.GET_HAND)
        setResolver({
          resolve: (hand) => {
            setView(views.WAIT_FOR_OPPONENT)
            resolve(hand)
          }
        })
      })
    },

    seeOutcome: (outcome) => {
      const outcomeDecimal = parseInt(outcome)
      setOutcome(outcomeDecimal)
      setView(views.SEE_OUTCOME)
    },

    informTimeout: () => {
      setView(views.TIME_OUT)
    },

    getRandom1: () => {
      const ran = getRandom(1, 5)
      console.log('ran1',ran)
      return(ran)
    },
    
    getRandom2: () => {
      const ran = getRandom(5, 10)
      console.log('ran2',ran)
      return(ran)
    },

    getRandom3: () => {
      const ran = getRandom(10, 15)
      console.log('ran3',ran)
      return(ran)
    },

    getRandom4: () => {
      const ran = getRandom(15, 20)
      console.log('ran4',ran)
      return(ran)
    },

    getRandom5: () => {
      const ran = getRandom(20, 25)
      console.log('ran5',ran)
      return(ran)
    },
  }

  const Alice = {
    ...Common,
    wager: 0,
  }


  const Bob = {
    ...Common,

    acceptWager: (wager) => {
      return new Promise((resolve) => {
        setWager(fmt(reach.parseCurrency(wager)))
        setView(views.ACCEPT_WAGER)
        setResolver({ 
          resolve: () => {
            setView(views.WAIT_FOR_OPPONENT)
            resolve()}
          })
      })
    }
  }

  console.log(view)
  
  return (
    <div className="App">
      <div className='top'>
        <h1>UNIQUE NUMBERS</h1>
      </div>
      <header className="App-header">
        {
          view === views.CONNECT_ACCOUNT && 
          <ConnectAccount connect={reachFunctions.connect}/>
        }

        {
          view === views.DEPLOY_OR_ATTACH &&
          <SelectRole deploy={reachFunctions.deploy} attach={() => setView(views.PASTE_CONTRACT_INFO)} setWager={(w) => setWager(w)}/>
        }

        {
          (view === views.DEPLOYING || view === views.ATTACHING) &&
          <Loader />
        }

        {
          view === views.PASTE_CONTRACT_INFO &&
          <PasteContractInfo attach={reachFunctions.attach}/>
        }

        {
          view === views.WAIT_FOR_ATTACHER &&
          <WaitForAttacher info={contractInfo}/>
        }

        {
          view === views.ACCEPT_WAGER &&
          <AcceptWager wager={wager} accept={resolver.resolve} decline={() => setView(views.DEPLOY_OR_ATTACH)}/>
        }

        {
          view === views.WAIT_FOR_OPPONENT &&
          <WaitForOpponent guess={guess}/>
        }

        {
          view === views.GET_HAND &&
          <GetHand guess={guess} setGuess={setGuess} resolve={resolver.resolve}/>
        }

        {
          view === views.SEE_OUTCOME &&
          <SeeOutcome  winner={outcome}/>
        }

        {
          view === views.TIME_OUT &&
          <Timeout />
        }
      </header>
    </div>
  );
}

export default App;

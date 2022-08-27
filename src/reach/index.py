# flake8: noqa

import time
import random
from threading import Thread
from reach_rpc import mk_rpc

def main():
    rpc, rpc_callbacks = mk_rpc()

    starting_balance = rpc('/stdlib/parseCurrency', 100)
    acc_alice        = rpc('/stdlib/newTestAccount', starting_balance)
    acc_bob          = rpc('/stdlib/newTestAccount', starting_balance)

    def fmt(x):
        return rpc('/stdlib/formatCurrency', x, 4)

    def get_balance(w):
        return fmt(rpc('/stdlib/balanceOf', w))

    before_alice = get_balance(acc_alice)
    before_bob   = get_balance(acc_bob)

    ctc_alice    = rpc('/acc/contract', acc_alice)

    
    OUTCOME      = ['Bob wins', 'Draw', 'Alice wins,']
    

    def player(who):
        def getHand():
            hand = int(input(who + " ENTER A NUMBER FROM 2 TO 50: "))
            print('%s played %s' % (who, hand))
            return hand

        def getRandom1():
            time.sleep(1)
            getRandom1.num1 =random.randrange(1,5)
            return getRandom1.num1

        def getRandom2():
            time.sleep(1)
            getRandom2.num2 =random.randrange(5,10)
            return getRandom2.num2

        def getRandom3():
            time.sleep(1)
            getRandom3.num3 =random.randrange(10,15)
            return getRandom3.num3

        def getRandom4():
            time.sleep(1)
            getRandom4.num4 =random.randrange(15,20)
            return getRandom4.num4

        def getRandom5():
            time.sleep(1)
            getRandom5.num5 =random.randrange(20,25)
            return getRandom5.num5

        def informTimeout():
            print('%s observed a timeout' % who)

        def seeOutcome(n):
            print('%s saw outcome %s'
                  % (who, OUTCOME[rpc('/stdlib/bigNumberToNumber', n)]))
        def randi():
            z = [getRandom1.num1, getRandom2.num2, getRandom3.num3, getRandom4.num4, getRandom5.num5]
            print(z)
     

        return {'stdlib.hasRandom': True,
                'getHand':          getHand,
                'getRandom1':        getRandom1,
                'getRandom2':        getRandom2,
                'getRandom3':        getRandom3,
                'getRandom4':        getRandom4,
                'getRandom5':        getRandom5,
                'informTimeout':    informTimeout,
                'seeOutcome':       seeOutcome,
                'randi':            randi,
               
                }

    def play_alice():
        
        rpc_callbacks(
            '/backend/Alice',
            ctc_alice,
            dict(wager=rpc('/stdlib/parseCurrency', 5), deadline=10,  **player('Alice')))

    alice = Thread(target=play_alice)
    alice.start()

    def play_bob():
        def acceptWager(amt):
            print('Bob accepts the wager of %s' % fmt(amt))

        ctc_bob = rpc('/acc/contract', acc_bob, rpc('/ctc/getInfo', ctc_alice))
        rpc_callbacks(
            '/backend/Bob',
            ctc_bob,
            dict(acceptWager=acceptWager, **player('Bob')))
        rpc('/forget/ctc', ctc_bob)
        

    bob = Thread(target=play_bob)
    bob.start()

    alice.join()
    bob.join()

    after_alice = get_balance(acc_alice)
    after_bob   = get_balance(acc_bob)

    print('Alice went from %s to %s' % (before_alice, after_alice))
    print('  Bob went from %s to %s' % (before_bob,   after_bob))

    rpc('/forget/acc', acc_alice, acc_bob)
    rpc('/forget/ctc', ctc_alice)


if __name__ == '__main__':
    main()
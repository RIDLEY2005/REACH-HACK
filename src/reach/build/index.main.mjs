// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v566 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v567 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v570 = stdlib.protect(ctc0, await interact.getRandom1(), {
    at: './index.rsh:111:56:application',
    fs: ['at ./index.rsh:108:13:application call to [unknown function] (defined at: ./index.rsh:108:17:function exp)'],
    msg: 'getRandom1',
    who: 'Alice'
    });
  const v571 = stdlib.protect(ctc0, await interact.getRandom2(), {
    at: './index.rsh:112:56:application',
    fs: ['at ./index.rsh:108:13:application call to [unknown function] (defined at: ./index.rsh:108:17:function exp)'],
    msg: 'getRandom2',
    who: 'Alice'
    });
  const v572 = stdlib.protect(ctc0, await interact.getRandom3(), {
    at: './index.rsh:113:56:application',
    fs: ['at ./index.rsh:108:13:application call to [unknown function] (defined at: ./index.rsh:108:17:function exp)'],
    msg: 'getRandom3',
    who: 'Alice'
    });
  const v573 = stdlib.protect(ctc0, await interact.getRandom4(), {
    at: './index.rsh:114:56:application',
    fs: ['at ./index.rsh:108:13:application call to [unknown function] (defined at: ./index.rsh:108:17:function exp)'],
    msg: 'getRandom4',
    who: 'Alice'
    });
  const v574 = stdlib.protect(ctc0, await interact.getRandom5(), {
    at: './index.rsh:115:56:application',
    fs: ['at ./index.rsh:108:13:application call to [unknown function] (defined at: ./index.rsh:108:17:function exp)'],
    msg: 'getRandom5',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v567, v566, v570, v571, v572, v573, v574],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:118:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
    pay: [v567, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v576, v577, v578, v579, v580, v581, v582], secs: v584, time: v583, didSend: v41, from: v575 } = txn1;
      
      sim_r.txns.push({
        amt: v576,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v593 = stdlib.add(v583, v577);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v576, v577, v578, v579, v580, v581, v582], secs: v584, time: v583, didSend: v41, from: v575 } = txn1;
  ;
  const v593 = stdlib.add(v583, v577);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0],
    timeoutAt: ['time', v593],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v575, v576, v577, v578, v579, v580, v581, v582, v593],
      evt_cnt: 0,
      funcNum: 2,
      lct: v583,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v914, time: v913, didSend: v532, from: v912 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v575,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v914, time: v913, didSend: v532, from: v912 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:98:29:application',
      fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:96:28:function exp)', 'at ./index.rsh:136:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v603, v604, v605, v606, v607], secs: v609, time: v608, didSend: v60, from: v602 } = txn2;
    const v611 = stdlib.add(v576, v576);
    ;
    const v612 = stdlib.add(v578, v603);
    const v613 = stdlib.add(v579, v604);
    const v614 = stdlib.add(v580, v605);
    const v615 = stdlib.add(v581, v606);
    const v616 = stdlib.add(v582, v607);
    let v617 = stdlib.checkedBigNumberify('./index.rsh:149:26:decimal', stdlib.UInt_max, '0');
    let v618 = stdlib.checkedBigNumberify('./index.rsh:149:28:decimal', stdlib.UInt_max, '0');
    let v619 = v608;
    let v626 = v611;
    
    while (await (async () => {
      const v631 = stdlib.eq(v617, v612);
      const v633 = stdlib.eq(v617, v613);
      const v635 = v631 ? v631 : v633;
      const v636 = stdlib.eq(v617, v614);
      const v638 = v635 ? v635 : v636;
      const v639 = stdlib.eq(v617, v615);
      const v641 = v638 ? v638 : v639;
      const v642 = stdlib.eq(v617, v616);
      const v644 = v641 ? v641 : v642;
      const v647 = stdlib.eq(v618, v612);
      const v649 = stdlib.eq(v618, v613);
      const v651 = v647 ? v647 : v649;
      const v652 = stdlib.eq(v618, v614);
      const v654 = v651 ? v651 : v652;
      const v655 = stdlib.eq(v618, v615);
      const v657 = v654 ? v654 : v655;
      const v658 = stdlib.eq(v618, v616);
      const v660 = v657 ? v657 : v658;
      const v661 = v660 ? false : true;
      const v662 = v644 ? false : v661;
      
      return v662;})()) {
      const v669 = stdlib.add(v619, v577);
      const v673 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:156:42:application',
        fs: ['at ./index.rsh:155:15:application call to [unknown function] (defined at: ./index.rsh:155:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v674 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:158:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:155:15:application call to [unknown function] (defined at: ./index.rsh:155:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v675 = stdlib.digest(ctc1, [v674, v673]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v575, v576, v577, v602, v612, v613, v614, v615, v616, v626, v669, v675],
        evt_cnt: 1,
        funcNum: 4,
        lct: v619,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:161:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v678], secs: v680, time: v679, didSend: v156, from: v677 } = txn3;
          
          ;
          const v688 = stdlib.add(v679, v577);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v669],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v575, v576, v577, v602, v612, v613, v614, v615, v616, v626, v669],
          evt_cnt: 0,
          funcNum: 5,
          lct: v619,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v754, time: v753, didSend: v267, from: v752 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v602,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v754, time: v753, didSend: v267, from: v752 } = txn4;
        ;
        const v755 = stdlib.addressEq(v575, v752);
        const v756 = stdlib.addressEq(v602, v752);
        const v757 = v755 ? true : v756;
        stdlib.assert(v757, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:162:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:98:29:application',
          fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:96:28:function exp)', 'at ./index.rsh:162:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v678], secs: v680, time: v679, didSend: v156, from: v677 } = txn3;
        ;
        const v681 = stdlib.addressEq(v575, v677);
        stdlib.assert(v681, {
          at: './index.rsh:161:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v688 = stdlib.add(v679, v577);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v688],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v575, v576, v577, v602, v612, v613, v614, v615, v616, v626, v678, v688],
            evt_cnt: 0,
            funcNum: 7,
            lct: v679,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v736, time: v735, didSend: v233, from: v734 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v575,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v736, time: v735, didSend: v233, from: v734 } = txn5;
          ;
          const v737 = stdlib.addressEq(v575, v734);
          const v738 = stdlib.addressEq(v602, v734);
          const v739 = v737 ? true : v738;
          stdlib.assert(v739, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:171:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:98:29:application',
            fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:96:28:function exp)', 'at ./index.rsh:171:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v694], secs: v696, time: v695, didSend: v166, from: v693 } = txn4;
          ;
          const v697 = stdlib.addressEq(v602, v693);
          stdlib.assert(v697, {
            at: './index.rsh:170:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v704 = stdlib.add(v695, v577);
          const txn5 = await (ctc.sendrecv({
            args: [v575, v576, v577, v602, v612, v613, v614, v615, v616, v626, v678, v694, v704, v674, v673],
            evt_cnt: 2,
            funcNum: 8,
            lct: v695,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:178:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v709, v710], secs: v712, time: v711, didSend: v176, from: v708 } = txn5;
              
              ;
              const cv617 = v710;
              const cv618 = v694;
              const cv619 = v711;
              const cv626 = v626;
              
              await (async () => {
                const v617 = cv617;
                const v618 = cv618;
                const v619 = cv619;
                const v626 = cv626;
                
                if (await (async () => {
                  const v631 = stdlib.eq(v617, v612);
                  const v633 = stdlib.eq(v617, v613);
                  const v635 = v631 ? v631 : v633;
                  const v636 = stdlib.eq(v617, v614);
                  const v638 = v635 ? v635 : v636;
                  const v639 = stdlib.eq(v617, v615);
                  const v641 = v638 ? v638 : v639;
                  const v642 = stdlib.eq(v617, v616);
                  const v644 = v641 ? v641 : v642;
                  const v647 = stdlib.eq(v618, v612);
                  const v649 = stdlib.eq(v618, v613);
                  const v651 = v647 ? v647 : v649;
                  const v652 = stdlib.eq(v618, v614);
                  const v654 = v651 ? v651 : v652;
                  const v655 = stdlib.eq(v618, v615);
                  const v657 = v654 ? v654 : v655;
                  const v658 = stdlib.eq(v618, v616);
                  const v660 = v657 ? v657 : v658;
                  const v661 = v660 ? false : true;
                  const v662 = v644 ? false : v661;
                  
                  return v662;})()) {
                  const v669 = stdlib.add(v619, v577);
                  sim_r.isHalt = false;
                  }
                else {
                  let v770;
                  const v772 = stdlib.eq(v617, v612);
                  const v774 = stdlib.eq(v617, v613);
                  const v776 = v772 ? v772 : v774;
                  const v777 = stdlib.eq(v617, v614);
                  const v779 = v776 ? v776 : v777;
                  const v780 = stdlib.eq(v617, v615);
                  const v782 = v779 ? v779 : v780;
                  const v783 = stdlib.eq(v617, v616);
                  const v785 = v782 ? v782 : v783;
                  const v787 = stdlib.eq(v618, v612);
                  const v789 = stdlib.eq(v618, v613);
                  const v791 = v787 ? v787 : v789;
                  const v792 = stdlib.eq(v618, v614);
                  const v794 = v791 ? v791 : v792;
                  const v795 = stdlib.eq(v618, v615);
                  const v797 = v794 ? v794 : v795;
                  const v798 = stdlib.eq(v618, v616);
                  const v800 = v797 ? v797 : v798;
                  const v801 = v800 ? false : true;
                  const v802 = v785 ? v801 : false;
                  if (v802) {
                    v770 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    const v834 = v785 ? false : v800;
                    if (v834) {
                      v770 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                      }
                    else {
                      v770 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
                      }
                    }
                  
                  const v871 = stdlib.eq(v770, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  if (v871) {
                    
                    sim_r.txns.push({
                      kind: 'from',
                      to: v575,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v602,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v887 = stdlib.eq(v770, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                    if (v887) {
                      const v888 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:52:14:decimal', stdlib.UInt_max, '2'), v576);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v575,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      const v900 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:58:14:decimal', stdlib.UInt_max, '2'), v576);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v602,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v704],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v575, v576, v577, v602, v612, v613, v614, v615, v616, v626, v678, v694, v704],
              evt_cnt: 0,
              funcNum: 9,
              lct: v695,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v718, time: v717, didSend: v199, from: v716 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v602,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v718, time: v717, didSend: v199, from: v716 } = txn6;
            ;
            const v719 = stdlib.addressEq(v575, v716);
            const v720 = stdlib.addressEq(v602, v716);
            const v721 = v719 ? true : v720;
            stdlib.assert(v721, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:179:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:98:29:application',
              fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:96:28:function exp)', 'at ./index.rsh:179:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v709, v710], secs: v712, time: v711, didSend: v176, from: v708 } = txn5;
            ;
            const v713 = stdlib.addressEq(v575, v708);
            stdlib.assert(v713, {
              at: './index.rsh:178:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v714 = stdlib.digest(ctc1, [v709, v710]);
            const v715 = stdlib.digestEq(v678, v714);
            stdlib.assert(v715, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:180:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const cv617 = v710;
            const cv618 = v694;
            const cv619 = v711;
            const cv626 = v626;
            
            v617 = cv617;
            v618 = cv618;
            v619 = cv619;
            v626 = cv626;
            
            continue;}
          
          }
        
        }
      
      }
    let v770;
    const v772 = stdlib.eq(v617, v612);
    const v774 = stdlib.eq(v617, v613);
    const v776 = v772 ? v772 : v774;
    const v777 = stdlib.eq(v617, v614);
    const v779 = v776 ? v776 : v777;
    const v780 = stdlib.eq(v617, v615);
    const v782 = v779 ? v779 : v780;
    const v783 = stdlib.eq(v617, v616);
    const v785 = v782 ? v782 : v783;
    const v787 = stdlib.eq(v618, v612);
    const v789 = stdlib.eq(v618, v613);
    const v791 = v787 ? v787 : v789;
    const v792 = stdlib.eq(v618, v614);
    const v794 = v791 ? v791 : v792;
    const v795 = stdlib.eq(v618, v615);
    const v797 = v794 ? v794 : v795;
    const v798 = stdlib.eq(v618, v616);
    const v800 = v797 ? v797 : v798;
    const v801 = v800 ? false : true;
    const v802 = v785 ? v801 : false;
    if (v802) {
      v770 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v834 = v785 ? false : v800;
      if (v834) {
        v770 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v770 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        }
      }
    stdlib.protect(ctc3, await interact.seeOutcome(v770), {
      at: './index.rsh:104:26:application',
      fs: ['at ./index.rsh:103:9:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)', 'at ./index.rsh:189:13:application call to "seeOutcome" (defined at: ./index.rsh:102:32:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    const v871 = stdlib.eq(v770, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v871) {
      stdlib.protect(ctc3, await interact.seeOutcome(v770), {
        at: './index.rsh:46:26:application',
        fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:27:function exp)', 'at ./index.rsh:192:12:application call to "payWinner" (defined at: ./index.rsh:43:48:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      ;
      ;
      return;
      }
    else {
      const v887 = stdlib.eq(v770, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v887) {
        const v888 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:52:14:decimal', stdlib.UInt_max, '2'), v576);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v770), {
          at: './index.rsh:54:26:application',
          fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at ./index.rsh:192:12:application call to "payWinner" (defined at: ./index.rsh:43:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v900 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:58:14:decimal', stdlib.UInt_max, '2'), v576);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v770), {
          at: './index.rsh:60:26:application',
          fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:27:function exp)', 'at ./index.rsh:192:12:application call to "payWinner" (defined at: ./index.rsh:43:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v576, v577, v578, v579, v580, v581, v582], secs: v584, time: v583, didSend: v41, from: v575 } = txn1;
  ;
  const v593 = stdlib.add(v583, v577);
  stdlib.protect(ctc1, await interact.acceptWager(v576), {
    at: './index.rsh:126:25:application',
    fs: ['at ./index.rsh:125:11:application call to [unknown function] (defined at: ./index.rsh:125:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v597 = stdlib.protect(ctc0, await interact.getRandom1(), {
    at: './index.rsh:127:54:application',
    fs: ['at ./index.rsh:125:11:application call to [unknown function] (defined at: ./index.rsh:125:15:function exp)'],
    msg: 'getRandom1',
    who: 'Bob'
    });
  const v598 = stdlib.protect(ctc0, await interact.getRandom2(), {
    at: './index.rsh:128:54:application',
    fs: ['at ./index.rsh:125:11:application call to [unknown function] (defined at: ./index.rsh:125:15:function exp)'],
    msg: 'getRandom2',
    who: 'Bob'
    });
  const v599 = stdlib.protect(ctc0, await interact.getRandom3(), {
    at: './index.rsh:129:54:application',
    fs: ['at ./index.rsh:125:11:application call to [unknown function] (defined at: ./index.rsh:125:15:function exp)'],
    msg: 'getRandom3',
    who: 'Bob'
    });
  const v600 = stdlib.protect(ctc0, await interact.getRandom4(), {
    at: './index.rsh:130:54:application',
    fs: ['at ./index.rsh:125:11:application call to [unknown function] (defined at: ./index.rsh:125:15:function exp)'],
    msg: 'getRandom4',
    who: 'Bob'
    });
  const v601 = stdlib.protect(ctc0, await interact.getRandom5(), {
    at: './index.rsh:131:54:application',
    fs: ['at ./index.rsh:125:11:application call to [unknown function] (defined at: ./index.rsh:125:15:function exp)'],
    msg: 'getRandom5',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v575, v576, v577, v578, v579, v580, v581, v582, v593, v597, v598, v599, v600, v601],
    evt_cnt: 5,
    funcNum: 1,
    lct: v583,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0],
    pay: [v576, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v603, v604, v605, v606, v607], secs: v609, time: v608, didSend: v60, from: v602 } = txn2;
      
      const v611 = stdlib.add(v576, v576);
      sim_r.txns.push({
        amt: v576,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v612 = stdlib.add(v578, v603);
      const v613 = stdlib.add(v579, v604);
      const v614 = stdlib.add(v580, v605);
      const v615 = stdlib.add(v581, v606);
      const v616 = stdlib.add(v582, v607);
      const v617 = stdlib.checkedBigNumberify('./index.rsh:149:26:decimal', stdlib.UInt_max, '0');
      const v618 = stdlib.checkedBigNumberify('./index.rsh:149:28:decimal', stdlib.UInt_max, '0');
      const v619 = v608;
      const v626 = v611;
      
      if (await (async () => {
        const v631 = stdlib.eq(v617, v612);
        const v633 = stdlib.eq(v617, v613);
        const v635 = v631 ? v631 : v633;
        const v636 = stdlib.eq(v617, v614);
        const v638 = v635 ? v635 : v636;
        const v639 = stdlib.eq(v617, v615);
        const v641 = v638 ? v638 : v639;
        const v642 = stdlib.eq(v617, v616);
        const v644 = v641 ? v641 : v642;
        const v647 = stdlib.eq(v618, v612);
        const v649 = stdlib.eq(v618, v613);
        const v651 = v647 ? v647 : v649;
        const v652 = stdlib.eq(v618, v614);
        const v654 = v651 ? v651 : v652;
        const v655 = stdlib.eq(v618, v615);
        const v657 = v654 ? v654 : v655;
        const v658 = stdlib.eq(v618, v616);
        const v660 = v657 ? v657 : v658;
        const v661 = v660 ? false : true;
        const v662 = v644 ? false : v661;
        
        return v662;})()) {
        const v669 = stdlib.add(v619, v577);
        sim_r.isHalt = false;
        }
      else {
        let v770;
        const v772 = stdlib.eq(v617, v612);
        const v774 = stdlib.eq(v617, v613);
        const v776 = v772 ? v772 : v774;
        const v777 = stdlib.eq(v617, v614);
        const v779 = v776 ? v776 : v777;
        const v780 = stdlib.eq(v617, v615);
        const v782 = v779 ? v779 : v780;
        const v783 = stdlib.eq(v617, v616);
        const v785 = v782 ? v782 : v783;
        const v787 = stdlib.eq(v618, v612);
        const v789 = stdlib.eq(v618, v613);
        const v791 = v787 ? v787 : v789;
        const v792 = stdlib.eq(v618, v614);
        const v794 = v791 ? v791 : v792;
        const v795 = stdlib.eq(v618, v615);
        const v797 = v794 ? v794 : v795;
        const v798 = stdlib.eq(v618, v616);
        const v800 = v797 ? v797 : v798;
        const v801 = v800 ? false : true;
        const v802 = v785 ? v801 : false;
        if (v802) {
          v770 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          }
        else {
          const v834 = v785 ? false : v800;
          if (v834) {
            v770 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            v770 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
            }
          }
        
        const v871 = stdlib.eq(v770, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v871) {
          
          sim_r.txns.push({
            kind: 'from',
            to: v575,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v602,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v887 = stdlib.eq(v770, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v887) {
            const v888 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:52:14:decimal', stdlib.UInt_max, '2'), v576);
            sim_r.txns.push({
              kind: 'from',
              to: v575,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v900 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:58:14:decimal', stdlib.UInt_max, '2'), v576);
            sim_r.txns.push({
              kind: 'from',
              to: v602,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v593],
    tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v575, v576, v577, v578, v579, v580, v581, v582, v593],
      evt_cnt: 0,
      funcNum: 2,
      lct: v583,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v914, time: v913, didSend: v532, from: v912 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v575,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v914, time: v913, didSend: v532, from: v912 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:98:29:application',
      fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:96:28:function exp)', 'at ./index.rsh:136:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v603, v604, v605, v606, v607], secs: v609, time: v608, didSend: v60, from: v602 } = txn2;
    const v611 = stdlib.add(v576, v576);
    ;
    const v612 = stdlib.add(v578, v603);
    const v613 = stdlib.add(v579, v604);
    const v614 = stdlib.add(v580, v605);
    const v615 = stdlib.add(v581, v606);
    const v616 = stdlib.add(v582, v607);
    let v617 = stdlib.checkedBigNumberify('./index.rsh:149:26:decimal', stdlib.UInt_max, '0');
    let v618 = stdlib.checkedBigNumberify('./index.rsh:149:28:decimal', stdlib.UInt_max, '0');
    let v619 = v608;
    let v626 = v611;
    
    while (await (async () => {
      const v631 = stdlib.eq(v617, v612);
      const v633 = stdlib.eq(v617, v613);
      const v635 = v631 ? v631 : v633;
      const v636 = stdlib.eq(v617, v614);
      const v638 = v635 ? v635 : v636;
      const v639 = stdlib.eq(v617, v615);
      const v641 = v638 ? v638 : v639;
      const v642 = stdlib.eq(v617, v616);
      const v644 = v641 ? v641 : v642;
      const v647 = stdlib.eq(v618, v612);
      const v649 = stdlib.eq(v618, v613);
      const v651 = v647 ? v647 : v649;
      const v652 = stdlib.eq(v618, v614);
      const v654 = v651 ? v651 : v652;
      const v655 = stdlib.eq(v618, v615);
      const v657 = v654 ? v654 : v655;
      const v658 = stdlib.eq(v618, v616);
      const v660 = v657 ? v657 : v658;
      const v661 = v660 ? false : true;
      const v662 = v644 ? false : v661;
      
      return v662;})()) {
      const v669 = stdlib.add(v619, v577);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v669],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v575, v576, v577, v602, v612, v613, v614, v615, v616, v626, v669],
          evt_cnt: 0,
          funcNum: 5,
          lct: v619,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v754, time: v753, didSend: v267, from: v752 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v602,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v754, time: v753, didSend: v267, from: v752 } = txn4;
        ;
        const v755 = stdlib.addressEq(v575, v752);
        const v756 = stdlib.addressEq(v602, v752);
        const v757 = v755 ? true : v756;
        stdlib.assert(v757, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:162:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:98:29:application',
          fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:96:28:function exp)', 'at ./index.rsh:162:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v678], secs: v680, time: v679, didSend: v156, from: v677 } = txn3;
        ;
        const v681 = stdlib.addressEq(v575, v677);
        stdlib.assert(v681, {
          at: './index.rsh:161:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v688 = stdlib.add(v679, v577);
        const v692 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:167:50:application',
          fs: ['at ./index.rsh:166:13:application call to [unknown function] (defined at: ./index.rsh:166:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v575, v576, v577, v602, v612, v613, v614, v615, v616, v626, v678, v688, v692],
          evt_cnt: 1,
          funcNum: 6,
          lct: v679,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:170:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v694], secs: v696, time: v695, didSend: v166, from: v693 } = txn4;
            
            ;
            const v704 = stdlib.add(v695, v577);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v688],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v575, v576, v577, v602, v612, v613, v614, v615, v616, v626, v678, v688],
            evt_cnt: 0,
            funcNum: 7,
            lct: v679,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v736, time: v735, didSend: v233, from: v734 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v575,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v736, time: v735, didSend: v233, from: v734 } = txn5;
          ;
          const v737 = stdlib.addressEq(v575, v734);
          const v738 = stdlib.addressEq(v602, v734);
          const v739 = v737 ? true : v738;
          stdlib.assert(v739, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:171:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:98:29:application',
            fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:96:28:function exp)', 'at ./index.rsh:171:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v694], secs: v696, time: v695, didSend: v166, from: v693 } = txn4;
          ;
          const v697 = stdlib.addressEq(v602, v693);
          stdlib.assert(v697, {
            at: './index.rsh:170:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v704 = stdlib.add(v695, v577);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v704],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v575, v576, v577, v602, v612, v613, v614, v615, v616, v626, v678, v694, v704],
              evt_cnt: 0,
              funcNum: 9,
              lct: v695,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v718, time: v717, didSend: v199, from: v716 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v602,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v718, time: v717, didSend: v199, from: v716 } = txn6;
            ;
            const v719 = stdlib.addressEq(v575, v716);
            const v720 = stdlib.addressEq(v602, v716);
            const v721 = v719 ? true : v720;
            stdlib.assert(v721, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:179:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:98:29:application',
              fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:96:28:function exp)', 'at ./index.rsh:179:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v709, v710], secs: v712, time: v711, didSend: v176, from: v708 } = txn5;
            ;
            const v713 = stdlib.addressEq(v575, v708);
            stdlib.assert(v713, {
              at: './index.rsh:178:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v714 = stdlib.digest(ctc3, [v709, v710]);
            const v715 = stdlib.digestEq(v678, v714);
            stdlib.assert(v715, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:180:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const cv617 = v710;
            const cv618 = v694;
            const cv619 = v711;
            const cv626 = v626;
            
            v617 = cv617;
            v618 = cv618;
            v619 = cv619;
            v626 = cv626;
            
            continue;}
          
          }
        
        }
      
      }
    let v770;
    const v772 = stdlib.eq(v617, v612);
    const v774 = stdlib.eq(v617, v613);
    const v776 = v772 ? v772 : v774;
    const v777 = stdlib.eq(v617, v614);
    const v779 = v776 ? v776 : v777;
    const v780 = stdlib.eq(v617, v615);
    const v782 = v779 ? v779 : v780;
    const v783 = stdlib.eq(v617, v616);
    const v785 = v782 ? v782 : v783;
    const v787 = stdlib.eq(v618, v612);
    const v789 = stdlib.eq(v618, v613);
    const v791 = v787 ? v787 : v789;
    const v792 = stdlib.eq(v618, v614);
    const v794 = v791 ? v791 : v792;
    const v795 = stdlib.eq(v618, v615);
    const v797 = v794 ? v794 : v795;
    const v798 = stdlib.eq(v618, v616);
    const v800 = v797 ? v797 : v798;
    const v801 = v800 ? false : true;
    const v802 = v785 ? v801 : false;
    if (v802) {
      v770 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v834 = v785 ? false : v800;
      if (v834) {
        v770 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v770 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        }
      }
    stdlib.protect(ctc1, await interact.seeOutcome(v770), {
      at: './index.rsh:104:26:application',
      fs: ['at ./index.rsh:103:9:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)', 'at ./index.rsh:189:13:application call to "seeOutcome" (defined at: ./index.rsh:102:32:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    const v871 = stdlib.eq(v770, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v871) {
      stdlib.protect(ctc1, await interact.seeOutcome(v770), {
        at: './index.rsh:46:26:application',
        fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:27:function exp)', 'at ./index.rsh:192:12:application call to "payWinner" (defined at: ./index.rsh:43:48:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      ;
      ;
      return;
      }
    else {
      const v887 = stdlib.eq(v770, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v887) {
        const v888 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:52:14:decimal', stdlib.UInt_max, '2'), v576);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v770), {
          at: './index.rsh:54:26:application',
          fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at ./index.rsh:192:12:application call to "payWinner" (defined at: ./index.rsh:43:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v900 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:58:14:decimal', stdlib.UInt_max, '2'), v576);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v770), {
          at: './index.rsh:60:26:application',
          fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:27:function exp)', 'at ./index.rsh:192:12:application call to "payWinner" (defined at: ./index.rsh:43:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAWAAEgeAIICShYB1ALYGhwoAEFqAGAARAYMCYDAQABAQAiNQAxGEEGlypkSSJbNQEhBVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIRAMQAJwSSEJDEABSUkhBQxAAO9JIQYMQABWIQYSRCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEogVmjrAyBjQDIRFbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCBa1IIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSSJbNf4hBVs1/YAENRoq0DT+FlA0/RZQsDIGNAMhEVsMRDT/MQASRDQDV4AgNP4WNP0WUAESRDT/NAMkWzQDIQdbNANXMCA0AyEKWzQDIQhbNAMhDFs0AyENWzQDIQ5bNP00AyEPWzIGNAMlW0IDxUghBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEPWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgTISYEGDEAAxkghBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpJVwAgNf8kWzX+IQdbNf1XMCA1/CEKWzX7IQhbNfohDFs1+SENWzX4IQ5bNfclWzX2V4AgNfVJNQUXNfSABHDt73o09BZQsDIGNAMhD1sMRDT8MQASRDIGNP0INfM0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPgWUDT3FlA09hZQNPVQNPQWUDTzFlAoSwFXAH9nKUsBV38xZ0ghCzUBMgY1AkIEF0ghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABMyZklywMgY0AyESWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgOoSSEEDEABAUmBBAxAALpIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKVwAgNf8kWzX+IQdbNf1XMCA1/CEKWzX7IQhbNfohDFs1+SENWzX4IQ5bNfclWzX2STUFNfWABDiwIy009VCwMgY0AyESWwxENP8xABJEMgY0/Qg19DT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlA0+BZQNPcWUDT2FlA09VA09BZQKEsBVwB/ZylLAVd/KWdIIQY1ATIGNQJCAvwhBBJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEIWw9EsSKyATQDJFuyCCOyEDQDVwAgsgezQgKgSSMMQAChSCM0ARJENARJIhJMNAISEUQoZEk1AyRbNf9JNQVJSkkiWzX+IQVbNf0hE1s1/CEUWzX7JFs1+oAEgwqd3jT+FlA0/RZQNPwWUDT7FlA0+hZQsDIGNAMhCFsMRDT/iAKoNANXACA0/zQDIQdbMQA0AyEVWzT+CDQDgThbNP0INAOBQFs0/Ag0A4FIWzT7CDQDIQpbNPoIIiIyBjT/SQhCAKNIgaCNBogCXyI0ARJENARJIhJMNAISEURJNQVJSkpJIls1/yEFWzX+IRNbNf0hFFs1/CRbNfshB1s1+iEVWzX5gAT+JjieNP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWULA0/4gB/zIGNP4INfgxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlA0+BZQKEsBVwBgZ0gjNQEyBjUCQgFyNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM0/DT3EjXyNPw0+BI08klNNfE0/DT5EjTxSU018DT8NPoSNPBJTTXvNPw0+xI070lNNe40/TT3EjXtNP00+BI07UlNNew0/TT5EjTsSU016zT9NPoSNOtJTTXqNP00+xI06klNSTXpFDXoNO4UNOgQQQBKNP409Qg15zTzNPQWUDT1FlA09lA09xZQNPgWUDT5FlA0+hZQNPsWUDT/FlA05xZQKEsBVwB/ZylLAVd/CWdIIQk1ATIGNQJCAJs07jToEEEAByEENedCABI07hQ06RBBAAYiNedCAAMjNec05yMSQQAjsSKyATT0sggjshA087IHs7EisgE09LIII7IQNPayB7NCADQ05yEEEkEAFrEisgEhBDT0C7III7IQNPOyB7NCABaxIrIBIQQ09AuyCCOyEDT2sgezQgAAMRkhEBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v577",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v578",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v579",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v580",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v581",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v582",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v577",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v578",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v579",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v580",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v581",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v582",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v603",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v605",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v606",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v607",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v678",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v694",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v709",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v710",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v603",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v605",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v606",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v607",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v678",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v694",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v709",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v710",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200245d3803806200245d83398101604081905262000026916200039b565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606080830191909152928401516080808301919091529284015160a0808301919091529284015160c0808301919091529284015160e082015291909201516101008201527fb72847a0141045ee503812adbab74c73ef160c0b2de90fc91b49e36b69a804d7906101200160405180910390a1602082015151620000dd903414600762000263565b6020808301510151620000f1904362000431565b8160000181815250506200015360405180610120016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b33815260208084018051518284015280518201516040808501919091528151810151606080860191909152825101516080808601919091528251015160a0808601919091528251015160c08086019190915291519091015160e084015283516101008401526001600081905543905551620002339183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190620002599291906200028d565b5050505062000495565b81620002895760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200029b9062000458565b90600052602060002090601f016020900481019282620002bf57600085556200030a565b82601f10620002da57805160ff19168380011785556200030a565b828001600101855582156200030a579182015b828111156200030a578251825591602001919060010190620002ed565b50620003189291506200031c565b5090565b5b808211156200031857600081556001016200031d565b604080519081016001600160401b03811182821017156200036457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b03811182821017156200036457634e487b7160e01b600052604160045260246000fd5b6000818303610100811215620003b057600080fd5b620003ba62000333565b8351815260e0601f1983011215620003d157600080fd5b620003db6200036a565b91506020840151825260408401516020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b600082198211156200045357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200046d57607f821691505b602082108114156200048f57634e487b7160e01b600052602260045260246000fd5b50919050565b611fb880620004a56000396000f3fe60806040526004361061009a5760003560e01c8063980b6eac11610061578063980b6eac14610115578063a209ad4e14610128578063ab53f2c61461013b578063bf2c5b241461015e578063de73699814610171578063f299d8411461018457005b80631e93b0f1146100a35780637eea518c146100c757806383230757146100da5780638328d4c4146100ef5780638e3147691461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d53660046118b3565b610197565b3480156100e657600080fd5b506001546100b4565b6100a16100fd3660046118d6565b610316565b6100a16101103660046118b3565b61056e565b6100a16101233660046118b3565b61070b565b6100a16101363660046118b3565b6109c7565b34801561014757600080fd5b50610150610c43565b6040516100be9291906118e8565b6100a161016c3660046118b3565b610ce0565b6100a161017f3660046118b3565b610e79565b6100a1610192366004611945565b610fd4565b6101a7600160005414600d611236565b6101c1813515806101ba57506001548235145b600e611236565b6000808055600280546101d390611957565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611957565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611a76565b9050610279816101000151431015600f611236565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516102aa929190611af8565b60405180910390a16102be3415600c611236565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102fb573d6000803e3d6000fd5b506000808055600181905561031290600290611724565b5050565b610326600b600054146027611236565b6103408135158061033957506001548235145b6028611236565b60008080556002805461035290611957565b80601f016020809104026020016040519081016040528092919081815260200182805461037e90611957565b80156103cb5780601f106103a0576101008083540402835291602001916103cb565b820191906000526020600020905b8154815290600101906020018083116103ae57829003601f168201915b50505050508060200190518101906103e39190611b35565b90506103f781610180015143106029611236565b604080513381528335602080830191909152840135818301529083013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a161045234156024611236565b805161046a906001600160a01b031633146025611236565b604080516104b79161049091602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826101400151146026611236565b6104bf611761565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08086015185519091015260e0808601518551909101526101008086015185519091015281840180518783013590526101608601518151909301929092528151439101526101208401519051909101526105698161125b565b505050565b61057e6007600054146017611236565b6105988135158061059157506001548235145b6018611236565b6000808055600280546105aa90611957565b80601f01602080910402602001604051908101604052809291908181526020018280546105d690611957565b80156106235780601f106105f857610100808354040283529160200191610623565b820191906000526020600020905b81548152906001019060200180831161060657829003601f168201915b505050505080602001905181019061063b9190611be8565b90506106508161014001514310156019611236565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610681929190611af8565b60405180910390a161069534156015611236565b80516106c9906001600160a01b031633146106bf5760608201516001600160a01b031633146106c2565b60015b6016611236565b80606001516001600160a01b03166108fc8261012001519081150290604051600060405180830381858888f193505050501580156102fb573d6000803e3d6000fd5b61071b600960005414601c611236565b6107358135158061072e57506001548235145b601d611236565b60008080556002805461074790611957565b80601f016020809104026020016040519081016040528092919081815260200182805461077390611957565b80156107c05780601f10610795576101008083540402835291602001916107c0565b820191906000526020600020905b8154815290600101906020018083116107a357829003601f168201915b50505050508060200190518101906107d89190611c89565b90506107f06040518060200160405280600081525090565b6108028261016001514310601e611236565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3384604051610833929190611d31565b60405180910390a16108473415601a611236565b6060820151610862906001600160a01b03163314601b611236565b60408201516108719043611d6e565b8160000181815250506108f7604051806101a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152610100808601519084015261012080860151908401526101408086015190840152858101356101608401528351610180840152600b60005543600155905161099c91839101611d86565b604051602081830303815290604052600290805190602001906109c0929190611802565b5050505050565b6109d76007600054146012611236565b6109f1813515806109ea57506001548235145b6013611236565b600080805560028054610a0390611957565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2f90611957565b8015610a7c5780601f10610a5157610100808354040283529160200191610a7c565b820191906000526020600020905b815481529060010190602001808311610a5f57829003601f168201915b5050505050806020019051810190610a949190611be8565b9050610aac6040518060200160405280600081525090565b610abe82610140015143106014611236565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610aef929190611d31565b60405180910390a1610b0334156010611236565b8151610b1b906001600160a01b031633146011611236565b6040820151610b2a9043611d6e565b816000018181525050610ba960405180610180016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e0808601519084015261010080860151908401526101208086015190840152858101356101408401528351610160840152600960005543600155905161099c91839101611e31565b600060606000546002808054610c5890611957565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8490611957565b8015610cd15780601f10610ca657610100808354040283529160200191610cd1565b820191906000526020600020905b815481529060010190602001808311610cb457829003601f168201915b50505050509050915091509091565b610cf06009600054146021611236565b610d0a81351580610d0357506001548235145b6022611236565b600080805560028054610d1c90611957565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4890611957565b8015610d955780601f10610d6a57610100808354040283529160200191610d95565b820191906000526020600020905b815481529060010190602001808311610d7857829003601f168201915b5050505050806020019051810190610dad9190611c89565b9050610dc28161016001514310156023611236565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610df3929190611af8565b60405180910390a1610e073415601f611236565b8051610e3b906001600160a01b03163314610e315760608201516001600160a01b03163314610e34565b60015b6020611236565b80516101208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102fb573d6000803e3d6000fd5b610e89600b60005414602c611236565b610ea381351580610e9c57506001548235145b602d611236565b600080805560028054610eb590611957565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee190611957565b8015610f2e5780601f10610f0357610100808354040283529160200191610f2e565b820191906000526020600020905b815481529060010190602001808311610f1157829003601f168201915b5050505050806020019051810190610f469190611b35565b9050610f5b816101800151431015602e611236565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610f8c929190611af8565b60405180910390a1610fa03415602a611236565b80516106c9906001600160a01b03163314610fca5760608201516001600160a01b03163314610fcd565b60015b602b611236565b610fe46001600054146009611236565b610ffe81351580610ff757506001548235145b600a611236565b60008080556002805461101090611957565b80601f016020809104026020016040519081016040528092919081815260200182805461103c90611957565b80156110895780601f1061105e57610100808354040283529160200191611089565b820191906000526020600020905b81548152906001019060200180831161106c57829003601f168201915b50505050508060200190518101906110a19190611a76565b90506110b58161010001514310600b611236565b604080513381528335602080830191909152840135818301529083013560608083019190915283013560808083019190915283013560a08083019190915283013560c08201527f27c7fc16ea76d7c54fa7d737d05804489bba4952bb8ac39902eb6fac0b0ee52d9060e00160405180910390a1611139816020015134146008611236565b611141611761565b815181516001600160a01b03909116905260208083015182518201526040808401518351909101528151336060918201528301516111829185013590611d6e565b815160809081019190915282015161119f90604085013590611d6e565b815160a0908101919091528201516111bc90606085013590611d6e565b815160c0908101919091528201516111d990608085013590611d6e565b815160e0908101919091528201516111f69060a085013590611d6e565b8151610100015260208082018051600090819052815183015251436040909101528201516112249080611d6e565b6020820151606001526105698161125b565b816103125760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516101a081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101829052610180810191909152815160800151602083015151148082526112ea57815160a00151602083015151146112ed565b80515b15156020820181905261130c57815160c0015160208301515114611312565b80602001515b15156040820181905261133157815160e0015160208301515114611337565b80604001515b15156060820181905261135757815161010001516020830151511461135d565b80606001515b15156080808301919091528251015160208084015101511460a0820181905261139457815160a0015160208084015101511461139a565b8060a001515b151560c082018190526113bb57815160c001516020808401510151146113c1565b8060c001515b151560e082018190526113e257815160e001516020808401510151146113e8565b8060e001515b1515610100820181905261140b5781516101000151602080840151015114611412565b8061010001515b1515610120820181905261142757600161142a565b60005b1515610140820152608081015161144657806101400151611449565b60005b156115b25781600001516040015182602001516040015161146a9190611d6e565b816101600181815250506114e360405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a09081015190850152855160c09081015190850152855160e09081015190850152855161010090810151908501528186015190920151610120840152610160840151610140840152600760005543600155905161158891839101611ed0565b604051602081830303815290604052600290805190602001906115ac929190611802565b50505050565b80608001516115c25760006115c9565b8061014001515b156115db57600261018082015261160d565b80608001516115ef578061012001516115f2565b60005b1561160457600061018082015261160d565b60016101808201525b6001816101800151141561169f57815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561165b573d6000803e3d6000fd5b50815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102fb573d6000803e3d6000fd5b600281610180015114156116fa57815180516020909101516001600160a01b03909116906108fc906116d2906002611f63565b6040518115909202916000818181858888f193505050501580156102fb573d6000803e3d6000fd5b8160000151606001516001600160a01b03166108fc83600001516020015160026116d29190611f63565b50805461173090611957565b6000825580601f10611740575050565b601f01602090049060005260206000209081019061175e9190611886565b50565b60405180604001604052806117cd60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526020016117fd6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b82805461180e90611957565b90600052602060002090601f0160209004810192826118305760008555611876565b82601f1061184957805160ff1916838001178555611876565b82800160010185558215611876579182015b8281111561187657825182559160200191906001019061185b565b50611882929150611886565b5090565b5b808211156118825760008155600101611887565b6000604082840312156118ad57600080fd5b50919050565b6000604082840312156118c557600080fd5b6118cf838361189b565b9392505050565b6000606082840312156118ad57600080fd5b82815260006020604081840152835180604085015260005b8181101561191c57858101830151858201606001528201611900565b8181111561192e576000606083870101525b50601f01601f191692909201606001949350505050565b600060c082840312156118ad57600080fd5b600181811c9082168061196b57607f821691505b602082108114156118ad57634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff811182821017156119be57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516101a0810167ffffffffffffffff811182821017156119be57634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff811182821017156119be57634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156119be57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611a7157600080fd5b919050565b60006101208284031215611a8957600080fd5b611a9161198c565b611a9a83611a5a565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611b2657600080fd5b80604085015250509392505050565b60006101a08284031215611b4857600080fd5b611b506119c4565b611b5983611a5a565b81526020830151602082015260408301516040820152611b7b60608401611a5a565b60608201526080838101519082015260a0808401519082015260c0808401519082015260e080840151908201526101008084015190820152610120808401519082015261014080840151908201526101608084015190820152610180928301519281019290925250919050565b60006101608284031215611bfb57600080fd5b611c036119f6565b611c0c83611a5a565b81526020830151602082015260408301516040820152611c2e60608401611a5a565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152508091505092915050565b60006101808284031215611c9c57600080fd5b611ca4611a28565b611cad83611a5a565b81526020830151602082015260408301516040820152611ccf60608401611a5a565b60608201526080838101519082015260a0808401519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160928301519281019290925250919050565b6001600160a01b0383168152606081016118cf602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115611d8157611d81611d58565b500190565b81516001600160a01b031681526101a0810160208301516020830152604083015160408301526060830151611dc660608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151818401525061018080840151818401525092915050565b81516001600160a01b03168152610180810160208301516020830152604083015160408301526060830151611e7160608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151818401525092915050565b81516001600160a01b03168152610160810160208301516020830152604083015160408301526060830151611f1060608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525092915050565b6000816000190483118215151615611f7d57611f7d611d58565b50029056fea2646970667358221220a8abaede2169d43b2ed0b88c1dd06e0b47ebb7e1f8b51b3844c95194bccf4fe064736f6c634300080c0033`,
  BytecodeLen: 9309,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:120:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:136:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:194:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:194:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:194:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:153:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:162:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:163:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:171:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:172:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:179:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };

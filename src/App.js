import { useEffect } from 'react';
import { PublicKey } from 'snarkyjs';
import { Add } from 'zkproject';
//import { PrivateKey } from 'snarkyjs';
function App() {
  useEffect(() => {
    console.log("inside useeffect");
    // (async () => {
    //   const { NewContract } = await import("examplesnarky0");
    //   await NewContract.compile()
    //   let address = 'B62qn8TChAWtuUFBcPQfb6UyTuZHTDbwySdiChdMaGSU3xdqFiivaXM'
    //   const contract = new NewContract(PublicKey.fromBase58(address))
    //   let val = contract.num.get()
    //   console.log(val);
    //   console.log(val.toBase58());
    //   // console.log(contract);
    // })();
  }, []);
  return (
    <div className="App">
     <h1>React App</h1> 
    </div>
  );
}

export default App;

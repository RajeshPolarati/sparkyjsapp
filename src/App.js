import { useEffect } from 'react';
import { PublicKey } from 'snarkyjs';
//import { PrivateKey } from 'snarkyjs';
// import {NewContract} from 'examplesnarky0'

function App() {
  useEffect(() => {
    (async () => {
      const { NewContract } = await import("examplesnarky0");
      await NewContract.compile()
      let address = 'B62qn8TChAWtuUFBcPQfb6UyTuZHTDbwySdiChdMaGSU3xdqFiivaXM'
      const contract = new NewContract(PublicKey.fromBase58(address))
      let val = contract.num.get()
      console.log(val);
      console.log(val.toBase58());
      // console.log(contract);
    })();
  }, []);
  return (
    <div className="App">
      React app
    </div>
  );
}

export default App;

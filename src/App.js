import { useState } from "react";
import './css/app.css';
import AddBoxForm from './components/AddBoxForm';
import AddBoxHeader from './components/AddBoxHeader';
import ListBoxOrders from './components/ListBoxOrders';

function App() {
  const [boxinatorData, setBoxinatorData] = useState([{
    boxName: "terry",
    boxWeight: 10,
    boxColour: "#abcd00",
    boxDestination: "sweden"
  },
  {
    boxName: "chris",
    boxweight: 15,
    boxColour: "#abcd00",
    boxDestination: "sweden"
  },
  {
    boxName: "sven",
    boxWeight: 20,
    boxColour: "#abcd00",
    boxDestination: "sweden"
  }]);

  const addBox = (boxname, boxweight, boxcolour, boxdestination) => {
    setBoxinatorData([...boxinatorData,
        {
          boxName: boxname,
          boxWeight: boxweight,
          boxColour: boxcolour,
          boxDestination: boxdestination
        }
      ]);
    }

  return (
      <div className="App">
        <header className="App-center">
          <AddBoxHeader title="Boxinator" />
        </header>
        <main>
          <div className="App-center">
            <AddBoxForm onSubmitFunction={addBox}/>
          </div>
          <div>
            <ListBoxOrders orders={boxinatorData} />
          </div>
        </main>
      </div>
    );
}

export default App;

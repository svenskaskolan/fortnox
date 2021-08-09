import {React, useState} from "react";
import './css/app.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import AddBoxForm from './components/AddBoxForm';
import AddBoxHeader from './components/AddBoxHeader';
import ListBoxOrders from './components/ListBoxOrders';

function App() {
  const [boxinatorData, setBoxinatorData] = useState([{
    boxName: "Trever Williams",
    boxWeight: 10,
    boxColour: "#b2a700",
    boxDestination: "sweden"
  },
  {
    boxName: "chris",
    boxWeight: 15,
    boxColour: "#05cd00",
    boxDestination: "brazil"
  },
  {
    boxName: "sven",
    boxWeight: 20,
    boxColour: "#555500",
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
          <Router>
              <NavLink className="buttonLink" to="/addbox" activeStyle={{display: "none"}}>
                Add a Box
              </NavLink>
              <Route path="/addbox" render={props => (
                <div className="App-center">
                  <AddBoxForm onSubmitFunction={addBox}/>
                </div>)
              }/>
              <NavLink className="buttonLink" to="/listboxes" activeStyle={{display: "none"}}>
                List Boxes
              </NavLink>
              <Route path="/listboxes" render={props => (
                <div>
                  <ListBoxOrders orders={boxinatorData} />
                </div>)
              }/>
          </Router>
        </main>
      </div>
    );
}

export default App;

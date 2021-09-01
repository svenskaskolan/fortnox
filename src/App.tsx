import {useState, useEffect} from "react";
import './css/app.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import AddBoxForm from './components/AddBoxForm';
import AddBoxHeader from './components/AddBoxHeader';
import ListBoxOrders from './components/ListBoxOrders';
import tBoxinatorData from './interfacesAndTypes/tBoxinatorData';
import tCountryValues from "./interfacesAndTypes/tCountryValues";

function App() {
  // 
  const [boxinatorData, setBoxinatorData] = useState<tBoxinatorData[]>([]);
  const [countryValues, setCountryValues] = useState<tCountryValues[]>([]);

  useEffect(() => {
    // run once to get the data.
    // this would normally be two an async restful api call to recieve the data.
    setBoxinatorData(
      [{
        boxName: "Trever Williams",
        boxWeight: 10,
        boxColour: "#b2a700",
        boxDestination: "Sweden",
        boxFactor: 1.3
      },
      {
        boxName: "chris",
        boxWeight: 15,
        boxColour: "#05cd00",
        boxDestination: "Brazil",
        boxFactor: 8.6
      },
      {
        boxName: "sven",
        boxWeight: 20,
        boxColour: "#555500",
        boxDestination: "Sweden",
        boxFactor: 1.3
      }]
    );

    setCountryValues(
      [{
        countryName: 'Sweden',
        countryFactor: 1.3
      },
      { countryName: 'China',
        countryFactor: 4,
      },
      {
        countryName: 'Brazil',
        countryFactor: 8.6
      },
      { countryName: 'Australia',
        countryFactor: 7.2,
      }]
    );
  }, []);

  const addBox = (boxname: string, boxweight: number, boxcolour: string, boxdestination: string, boxfactor: number) => {
    setBoxinatorData(prevItems => [...prevItems,
        {
          boxName: boxname,
          boxWeight: boxweight,
          boxColour: boxcolour,
          boxDestination: boxdestination,
          boxFactor: boxfactor
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
                  <AddBoxForm onSubmitFunction={addBox} optionsList={countryValues}/>
                </div>)
              }/>
              <NavLink className="buttonLink" to="/listboxes" activeStyle={{display: "none"}}>
                List Boxes
              </NavLink>
              <Route path="/listboxes" render={props => (
                <div>
                  <ListBoxOrders orders = {boxinatorData} />
                </div>)
              }/>
          </Router>
        </main>
      </div>
    );
}

export default App;

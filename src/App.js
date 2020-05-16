import React, { useState } from 'react';
import './App.css';
import { searchBrewery } from './services/brewery';

function App() {

  // const [query, setQuery] = useState('');
  const [breweries, setBreweries] = useState([])

  // componentDidMount (Init del component)
  // React.useEffect(() => {
  // })


  const filterByQuery = (value) => {
    searchBrewery(value).then(resp => {
      if (resp.data && Array.isArray(resp.data)) {
        setBreweries(resp.data);
      }
    })
  }

  const renderBreweries = () => {
    let renderAcc = [];
    breweries.map(b => {
      return renderAcc.push(
        <li key={b.id}>{b.name}</li>
      )
    })
    if (renderAcc.length >= 1) {
      return renderAcc
    }
    return <li> No breweries at this time</li>
  }

  return (
    <div className="App">
      <h1> Listing breweries</h1>
      <hr/>

      <input type="text" placeholder="Search" onChange={(e) => filterByQuery(e.target.value)} />
      {/* <button onClick={() => }>Search Breweries Around</button> */}

      <ul>
        {renderBreweries()}
      </ul>

    </div>
  );
}

export default App;

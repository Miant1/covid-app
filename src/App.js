import style from './App.module.scss'
import Header from "./components/header/Header";
import CountryList from "./components/country-list/CountryList";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.covid19api.com/summary')
            .then(response => setItems(response.data.Countries));
    }, [])

    useEffect(() => {
        setFilteredCountries(
            items.filter((item) =>
                item.Country.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, items]);

  return (
    <div className={style.app}>
      <Header search={search} setSearch={setSearch}/>
      <CountryList filteredCountries={filteredCountries}/>
    </div>
  );
}

export default App;

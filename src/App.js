import style from './App.module.scss'
import Header from "./components/header/Header";
import CountryList from "./components/country-list/CountryList";
import {useEffect, useState} from "react";
import axios from "axios";
import Popup from "./components/popup/Popup";

function App() {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState([])

    const handleClick = (selectedItem) => {
        setSelectedCountry(selectedItem);
        setShowPopup(true);
    }

    const hidePopup = () => {
        setShowPopup(false);
    }


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
      <CountryList handleClick={handleClick} filteredCountries={filteredCountries}/>
        {showPopup && <Popup selectedCountry={selectedCountry} hidePopup={hidePopup}/>}
    </div>
  );
}

export default App;

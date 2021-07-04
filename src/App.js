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
    const [selectedCountry, setSelectedCountry] = useState([]);

    const updateOnLogo = () => {
        window.location.reload();
    }

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

    const sortByCasesDown = () => {
        const sortedAscending = [...filteredCountries].sort((a, b) => parseInt(a.TotalConfirmed) - parseInt(b.TotalConfirmed));
        setFilteredCountries(sortedAscending)
    }
    const sortByCasesUp = () => {
        const sortedDescending = [...filteredCountries].sort((a, b) => parseInt(b.TotalConfirmed) - parseInt(a.TotalConfirmed));
        setFilteredCountries(sortedDescending)
    }
    const sortByContryDes = () => {
        const sortedDescending = [...filteredCountries]
            .sort((a, b) => {
                if(a.Country > b.Country) { return -1; }
                if(a.Country < b.Country) { return 1; }
                return 0;
            });
        setFilteredCountries(sortedDescending)
    }
    const sortByContryAsc = () => {
        const sortedAsceding = [...filteredCountries]
            .sort((a, b) => {
                if(a.Country < b.Country) { return -1; }
                if(a.Country > b.Country) { return 1; }
                return 0;
            });
        setFilteredCountries(sortedAsceding)
    }
  return (
    <div className={style.app}>
      <Header updateOnLogo={updateOnLogo} search={search} setSearch={setSearch}/>
      <CountryList
          sortByCasesDown={sortByCasesDown}
          sortByCasesUp={sortByCasesUp}
          handleClick={handleClick}
          filteredCountries={filteredCountries}
          sortByContryDes={sortByContryDes}
          sortByContryAsc={sortByContryAsc}/>

        {showPopup && <Popup selectedCountry={selectedCountry} hidePopup={hidePopup}/>}
    </div>
  );
}

export default App;

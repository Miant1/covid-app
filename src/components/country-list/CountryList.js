import style from './CountryList.module.scss'
import ListItem from "./list-item/ListItem";

const CountryList = ({filteredCountries}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.listHeader}>
                <p className={style.number}>№</p>
                <p className={style.country}>Country</p>
                <p className={style.cases}>Total Confirmed</p>
            </div>

            <ListItem filteredCountries={filteredCountries}/>
        </div>
    )
}

export default CountryList;
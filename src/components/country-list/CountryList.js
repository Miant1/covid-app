import style from './CountryList.module.scss'
import ListItem from "./list-item/ListItem";

const CountryList = ({filteredCountries, handleClick, sortByCasesDown, sortByCasesUp, sortByContryDes, sortByContryAsc}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.listHeader}>
                <p className={style.number}>№</p>
                <div className={style.countryWrapper}>
                    <p className={style.country}>Country</p>
                    <i onClick={() => sortByContryAsc()} className="fas fa-arrow-up"></i>
                    <i onClick={() => sortByContryDes()} className="fas fa-arrow-down"></i>
                </div>
                <div className={style.casesWrapper}>
                    <p className={style.cases}>Total Confirmed</p>
                    <i onClick={() => sortByCasesUp()} className="fas fa-arrow-up"></i>
                    <i onClick={() => sortByCasesDown()} className="fas fa-arrow-down"></i>
                </div>

            </div>

            <ListItem handleClick={handleClick} filteredCountries={filteredCountries}/>
        </div>
    )
}

export default CountryList;
import style from './ListItem.module.scss';

const ListItem = ({filteredCountries, handleClick}) => {

    return(
        <div>
            {
                filteredCountries.map((item, index) =>
                    <div key={item.ID} className={style.wrapper} onClick={() => handleClick(item)}>
                        <p className={style.number}>{index + 1}</p>
                        <p className={style.country}>{item.Country}</p>
                        <p className={style.cases}>{item.TotalConfirmed}</p>
                    </div>)
            }

        </div>

    )
}

export default ListItem;
import style from './Popup.module.scss';

const Popup = ({selectedCountry, hidePopup}) => {
    return(
        <div className={style.wrapper}>
            <div className={style.popup}>
                <h2 className={style.countryName}>{selectedCountry.Country}</h2>
                <div className={style.info}>
                    <div className={style.confirmed}>
                        <i className="fas fa-heartbeat"></i>
                        <p className={style.text}>Total Confirmed</p>
                        <p className={style.count}>{selectedCountry.TotalConfirmed}</p>
                    </div>
                    <div className={style.deaths}>
                        <i className="fas fa-skull"></i>
                        <p className={style.text}>Total Deaths</p>
                        <p className={style.count}>{selectedCountry.TotalDeaths}</p>
                    </div>
                    <div className={style.recovered}>
                        <i className="fas fa-file-medical"></i>
                        <p className={style.text}>Total Recovered</p>
                        <p className={style.count}>{selectedCountry.TotalRecovered}</p>
                    </div>
                </div>
                <div className={style.buttonWrapper}>
                    <button className={style.closeBtn} onClick={hidePopup}>ok</button>
                </div>

            </div>
        </div>
    )
}

export default Popup;
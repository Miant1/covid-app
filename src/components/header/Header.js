import style from './Header.module.scss'
import LogoImg from '../../assets/images/logo.png'
import Search from "./search-pannel/Search";

const Header = ({setSearch, search, updateOnLogo}) => {
    return(
        <div className={style.header}>
            <div onClick={() => updateOnLogo()} className={style.logoWrapper}>
                <img className={style.logoImg} src={LogoImg} alt="logo"/>
                <p className={style.logo}>statistic</p>
            </div>

            <Search search={search} setSearch={setSearch}/>

        </div>
    )
}

export default Header;
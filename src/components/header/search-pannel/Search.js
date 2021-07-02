import style from './Search.module.scss'

const Search = ({search, setSearch}) => {
    return (
        <div className={style.search}>
            <input
                onChange={(e) => setSearch(e.target.value)}
                className={style.input}
                placeholder='Search...'
                type="text"/>
            <i className="fas fa-search"></i>
        </div>
    )
}

export default Search;
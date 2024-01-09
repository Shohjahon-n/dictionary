import React from "react";
import "./Search.scss";
import scope from "../../image/scope.png";
class Search extends React.Component {
    render() {
        const { handleSearch, handleSearchSubmit, isLoading, error, searchValue } = this.props;
        return (
            <div className="search container">
                <div className="search-content">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="search"
                            className="search-input"
                            onChange={handleSearch}
                            value={searchValue}
                        />

                        <button className="search-btn"><img src={scope} alt="scope" /></button>
                    </form>
                </div>
                <p style={{ color: "red" }}>{error}</p>
            </div>
        );
    }
}

export default Search;
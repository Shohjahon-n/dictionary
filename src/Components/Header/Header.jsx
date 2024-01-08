import React from "react";
import './Header.scss';
import bookImg from '../../image/book.png';
import Search from "../Search/Search";
import moon from '../../image/moon.png';
class Header extends React.Component {
    toggleMode() {
        document.body.classList.toggle("dark");
    }

    changeFontFamily(value) {
        switch (value) {
            case "sans-serif":
                document.body.classList.remove("serif", "mono");
                document.body.classList.add("sans-serif");
                break;
            case "serif":
                document.body.classList.remove("sans-serif", "mono");
                document.body.classList.add("serif");
                break;
            case "mono":
                document.body.classList.remove("sans-serif", "serif");
                document.body.classList.add("mono");
                break;
            default:
                document.body.classList.remove("serif", "mono");
                document.body.classList.add("sans-serif");
                break;
        }
    }

    render() {
        const { handleSearch, handleSearchSubmit, isLoading, error, searchValue } = this.props;
        return (
            <>
                <header className="header container">
                    <div className="header-logo">
                        <img src={bookImg} alt="book img" />
                    </div>
                    <div className="changers">
                        <div className="fonts">
                            <select onChange={(e) => this.changeFontFamily(e.target.value)} >
                                <option value="sans-serif">Sans Serif</option>
                                <option value="serif">Serif</option>
                                <option value="mono">Mono</option>
                            </select>
                        </div>
                        <div className="dark-mode">
                            <div className="toggle-switch">
                                <input className="toggle-input" id="toggle" type="checkbox"
                                    onChange={this.toggleMode} />
                                <label className="toggle-label" htmlFor="toggle"></label>
                            </div>
                            <img src={moon} alt="moon" />
                        </div>
                    </div>
                </header>
                <Search handleSearch={handleSearch}
                    handleSearchSubmit={handleSearchSubmit}
                    isLoading={isLoading}
                    error={error}
                    searchValue={searchValue}
                />
            </>
        );
    }
}

export default Header;
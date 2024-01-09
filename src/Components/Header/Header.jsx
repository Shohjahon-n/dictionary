import React from "react";
import './Header.scss';
import bookImg from '../../image/book.png';
import Search from "../Search/Search";
import lightSvg from '../../image/light-mode.svg';
import darkSvg from '../../image/darkSvg.svg';
class Header extends React.Component {

    changeFontFamily(value) {
        switch (value) {
            case "sans-serif":
                this.props.handleChangeFontFamily("sans-serif");
                break;
            case "serif":
                this.props.handleChangeFontFamily("serif");
                break;
            case "mono":
                this.props.handleChangeFontFamily("mono");
                break;
            default:
                this.props.handleChangeFontFamily("sans-serif");
                break;
        }
    }

    render() {
        const { handleSearch, handleSearchSubmit, isLoading, error, searchValue, toggleMode, darkMode } = this.props;
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
                        <div className="line"></div>
                        <div className="dark-mode">
                            {darkMode ?
                                <img src={darkSvg} alt="darkmoon" onClick={toggleMode} />
                                : <img src={lightSvg} alt="lightmoon" onClick={toggleMode} />
                            }
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
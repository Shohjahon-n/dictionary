import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import loaderSvg from "./image/loader.svg";
import NotFound from "./Components/NotFound/NotFound";
class App extends React.Component {
    state = {
        searchValue: '',
        searchResults: null,
        isLoading: false,
        showResults: false,
        error: '',
        notFound: false,
        darkMode: false,
        fontFamily: 'sans-serif'
    }

    handleSearch = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    toggleMode = () => {
        this.setState({
            darkMode: !this.state.darkMode
        })
    }

    handleChangeFontFamily = (value) => {
        this.setState({
            fontFamily: value
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true,
            showResults: true,
        })

        if (!this.state.searchValue.trim()) {
            this.setState({
                showResults: false,
                isLoading: false,
                error: "Inputni to'ldiring",
                notFound: false
            })
        } else {
            this.setState({
                isLoading: true,
                showResults: true,
                error: '',
                notFound: false
            })
        }

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.searchValue}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    this.setState({
                        showResults: false,
                        notFound: true,
                        isLoading: false
                    });
                } else {
                    this.setState({
                        searchResults: data[0],
                        notFound: false,
                        isLoading: false
                    });
                }

            })
    }

    render() {
        console.log(this.state.fontFamily);
        return (
            <div className={`big-main ${this.state.darkMode ? 'dark' : ''}  ${this.state.fontFamily}`}>
                <Header handleSearch={this.handleSearch}
                    handleSearchSubmit={this.handleSearchSubmit}
                    error={this.state.error}
                    searchValue={this.state.searchValue}
                    darkMode={this.state.darkMode}
                    toggleMode={this.toggleMode}
                    handleChangeFontFamily={this.handleChangeFontFamily}
                />
                {(this.state.notFound) ? <NotFound /> : null}
                {(this.state.isLoading) ? <img className="loader" src={loaderSvg} alt="loading" /> :
                    < Main searchResults={this.state.searchResults} showResults={this.state.showResults} />
                }
            </div>
        );
    }
}

export default App;
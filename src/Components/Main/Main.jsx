import React from "react";
import './Main.scss'
import Accent from "../Accent/Accent";
import tablerSvg from "../../image/tabler.svg";
class Main extends React.Component {
    render() {
        const { searchResults, showResults } = this.props;
        return (
            <>
                {(showResults) ?
                    <div className="main container">
                        <Accent word={searchResults?.word}
                            phonetic={searchResults?.phonetics[0]?.text}
                            audio={searchResults?.phonetics[0]?.audio} />
                        <div className="main-content">
                            <div className="first-main-content">
                                {!searchResults.meanings[0].partOfSpeech ? null :
                                    <div className="mains-texts">
                                        <p className="main-text">{searchResults?.meanings[0]?.partOfSpeech}</p>
                                        <span className="line"></span>
                                    </div>
                                }
                                <div className="first-main-texts">
                                    <h5>Meaning</h5>
                                    <ul>
                                        {searchResults?.meanings[0]?.definitions?.map((definition) => {
                                            return (
                                                <li>{definition?.definition}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            {!searchResults?.meanings[0]?.synonyms.length ? null :
                                <div className="synonyms">
                                    <h5>Synonyms</h5>
                                    <span>{searchResults?.meanings[0]?.synonyms.join(", ")}</span>
                                </div>
                            }
                            <div className="second-main-content">
                                {!searchResults?.meanings[1]?.partOfSpeech ? null :
                                    <div className="mains-texts">
                                        <p className="main-text">{searchResults?.meanings[1]?.partOfSpeech}</p>
                                        <span className="line"></span>
                                    </div>
                                }
                                {!searchResults?.meanings[1]?.definitions ? null :
                                    <div className="second-main-texts">
                                        <h5>Meaning</h5>
                                        <ul>
                                            {searchResults?.meanings[1]?.definitions?.map((definition) => {
                                                return (
                                                    <li>{definition?.definition}</li>
                                                )
                                            })}
                                            {!searchResults?.meanings[1]?.definitions[0]?.example ? null :
                                                <p>{searchResults?.meanings[1]?.definitions[0]?.example}</p>
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                        <p className="main-hr"></p>
                        <div className="footer">
                            <p className='source'>Source</p>
                            <a href={searchResults?.sourceUrls}>{searchResults?.sourceUrls}
                                <img src={tablerSvg} alt="link" />
                            </a>
                        </div>
                    </div >
                    : null
                }
            </>
        )
    }
}

export default Main
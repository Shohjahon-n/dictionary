import React from "react";
import './Main.scss'
import Accent from "../Accent/Accent";
import tablerSvg from "../../image/tabler.svg";
class Main extends React.Component {
    render() {
        const { searchResults, showResults } = this.props;

        return (
            <>
                {showResults ? (
                    <div className="main container">
                        <Accent
                            word={searchResults.word}
                            phonetic={searchResults.phonetics.map((text, idx) => text.text)}
                            audio={searchResults.phonetics[0].audio}
                        />
                        <div key={searchResults.word} className="main-content">
                            {searchResults.meanings.map((itm, idx) => (
                                <div key={idx}>
                                    <div className="mains-texts">
                                        <p className="main-text">{itm.partOfSpeech}</p>
                                        <span className="line"></span>
                                    </div>
                                    <div className="second-main-texts">
                                        <h5>Meaning</h5>
                                        <ul>
                                            {itm.definitions.map((definition, defIdx) => (
                                                <li key={defIdx}>{definition.definition}</li>
                                            ))}
                                            {itm.definitions.map((definition, defIdx) => (
                                                <p key={`example-${defIdx}`}>{definition.example}</p>
                                            ))}
                                        </ul>
                                    </div>
                                    {!itm.synonyms.length ? null : (
                                        <div className="synonyms" key={`synonyms-${idx}`}>
                                            <h5>Synonyms</h5>
                                            <span>{itm.synonyms.join(", ")}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <p className="main-hr"></p>
                        <div className="footer">
                            <p className="source">Source</p>
                            <a href={searchResults.sourceUrls}>
                                {searchResults.sourceUrls}
                                <img src={tablerSvg} alt="link" />
                            </a>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
}

export default Main;
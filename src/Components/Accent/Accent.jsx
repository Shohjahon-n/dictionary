import React from "react";
import './Accent.scss'
import playBtn from '../../image/play-btn.png'
import noPlayBtn from '../../image/noPlay.png'
class Accent extends React.Component {
    playAudio = (aud) => {
        const audio = new Audio(aud);
        audio.play();
    }
    render() {
        const { word, phonetic } = this.props
        return (
            <div className="accent">
                <div className="accent-content">
                    <div className="accent-text">
                        <h1>{word}</h1>
                        <p>{phonetic.map((text, idx) => <span key={idx}>{text.text}</span>)}</p>
                    </div>
                    <div className="play" >
                        {this.props.audio?.map((aud, idx) => (
                            aud ? (
                                <img key={idx} src={playBtn} alt="play" onClick={() => this.playAudio(aud)} />
                            ) : (
                                <img key={idx} src={noPlayBtn} alt="play" onClick={() => alert("Bu so'zda audio yuklanmadi")} />
                            )
                        ))}

                    </div>
                </div>
            </div >
        )
    }
}

export default Accent
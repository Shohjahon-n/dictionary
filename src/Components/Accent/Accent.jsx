import React from "react";
import './Accent.scss'
import playBtn from '../../image/play-btn.png'
import noPlayBtn from '../../image/noPlay.png'
class Accent extends React.Component {
    playAudio = () => {
        const audio = new Audio(this.props.audio);
        audio.play();
    }
    render() {
        const { word, phonetic } = this.props
        console.log(this.props.audio);
        return (
            <div className="accent">
                <div className="accent-content">
                    <div className="accent-text">
                        <h1>{word}</h1>
                        <p>{phonetic}</p>
                    </div>
                    <div className="play" onClick={this.playAudio}>
                        {!this.props.audio ? <img src={noPlayBtn} alt="play"
                            onClick={() => alert("Bu so'zda audio yuklanmadi")} /> :
                            <img src={playBtn} alt="play" />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Accent
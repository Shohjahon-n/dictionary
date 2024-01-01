import React from "react";
import "./NotFound.scss";
import emoji from "../../image/emoji.svg";

class NotFound extends React.Component {
    render() {
        return (
            <div className="not-found container">
                <img className="emoji" src={emoji} alt="emoji" />
                <h5 className="not-found-text">No Definitions Found</h5>
                <p className="small-text">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
            </div >
        );
    }
}

export default NotFound
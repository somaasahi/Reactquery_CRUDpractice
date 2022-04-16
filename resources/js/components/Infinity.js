import React from "react";
import ReactDOM from "react-dom";

function Infinity() {


    return (
        <div>
          inifinity
        </div>
    );
}

export default Infinity;

if (document.getElementById('app')) {
    ReactDOM.render(<Infinity />, document.getElementById('app'));
}

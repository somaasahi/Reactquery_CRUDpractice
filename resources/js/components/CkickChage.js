import React from 'react';
import ReactDOM from 'react-dom';
// import { useQueryClient } from 'react-query';

function ClickChange() {


    return (
        <div>
           clickchaged
        </div>
    );
}

export default ClickChange;

if (document.getElementById('app')) {
    ReactDOM.render(<ClickChange />, document.getElementById('app'));
}

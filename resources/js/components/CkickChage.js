import React from 'react';
import ReactDOM from 'react-dom';
// import { useQueryClient } from 'react-query';
// import"../../css/app.css";
function ClickChange() {


    return (
        <div className='text-red-400'>
            <p className='text-red-400'>clickchage</p>

        </div>
    );
}

export default ClickChange;

if (document.getElementById('app')) {
    ReactDOM.render(<ClickChange />, document.getElementById('app'));
}

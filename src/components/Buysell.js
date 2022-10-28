import React from 'react';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Buysell = () => {
    return <div>
        <>
        {/* Example single danger button */}
        <div className="btn-group">
            <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            BUY
            </button>
            <ul className="dropdown-menu">
            <li>
                <a className="dropdown-item" href="#">
                 Name
                </a>
            </li>
            
            </ul>
        </div>
        <div className="btn-group">
            <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            SELL
            </button>
            <ul className="dropdown-menu">
            <li>
                <a className="dropdown-item" href="#">
                 Name
                </a>
            </li>
            
            </ul>
        </div>
        </>

    </div>;
}

Buysell.propTypes = propTypes;
Buysell.defaultProps = defaultProps;
// #endregion

export default Buysell;
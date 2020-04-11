import React from 'react';

const TabNavigation = (props) => {
    return (
        <div className="tabs is-toggle is-fullwidth">
            <ul>
                <li 
                    className={`${props.activeTab === 'counter' ? 'is-active' : ''}`} 
                    onClick={() => props.tabChange('counter')}
                >
                    <a href="/#">
                        <span className="icon is-small"><i className="fa fa-dashboard" aria-hidden="true"></i></span>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li 
                    className={`${props.activeTab === 'about' ? 'is-active' : ''}`} 
                    onClick={() => props.tabChange('about')}
                >
                    <a href="/#">
                        <span className="icon is-small"><i className="fa fa-info-circle" aria-hidden="true"></i></span>
                        <span>About</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default TabNavigation;
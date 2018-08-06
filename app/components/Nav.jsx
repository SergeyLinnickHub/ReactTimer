var React = require("react");
var {IndexLink,Link} = require("react-router");

var Nav = React.createClass({
    render: function () {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
					<ul className="menu">
						<li>
							<IndexLink to="/" className="menu-text" activeClassName="active" activeStyle={{fontWeight: "bold"}}>React Timer App </IndexLink>
						</li>
						<li>
							<Link to="/timer" activeClassName="active-link" activeStyle={{fontWeight: "bold"}}>Timer</Link>
						</li>
						<li>
							<Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: "bold"}}>Countdown</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">Created by<a href="https://github.com/SergeyLinnickHub" target="_blank">Sergey</a></li>
					</ul>
				</div>	
            </div>
        )
    }
});

module.exports = Nav;
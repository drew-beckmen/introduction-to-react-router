import React from 'react'; 

const Navigation = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-text">
                React Router Exercises
            </span>
            <a className="btn btn-primary" href="/" role="button">Go Home</a>
            <a className="btn btn-primary" href="/films" role="button">View Films</a>
        </nav>
    )
}

export default Navigation; 
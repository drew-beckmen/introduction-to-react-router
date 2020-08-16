import React from 'react'; 

const Card = (props) => {
    return (
        <div key={props.film.id} className="card">
            <div className="card-body">
                <h5 className="card-title">{props.film.title}</h5>
                <p className="card-text">{props.film.description}</p>
                <a href={`/films/${props.film.id}`} className="btn btn-secondary active" role="button" aria-pressed="true">See Details</a>
            </div>
        </div>
    )
}

export default Card; 
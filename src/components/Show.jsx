import React from 'react'; 

class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            film: null 
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
        .then(resp => resp.json())
        // .then(console.log)
        .then(obj => this.setState({film: obj}))
    }

    render() {
        if (this.state.film) {
            return (
                <div key={this.state.film.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.film.title}</h5>
                        <p className="card-text">{this.state.film.description}</p>
                        <p className="card-text">Director: {this.state.film.director}</p>
                        <p className="card-text">Producer: {this.state.film.producer}</p>
                        <p className="card-text">Release Date: {this.state.film.release_date}</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <h1>Still Loading...</h1>
            )
        }
    }
}

export default Show; 
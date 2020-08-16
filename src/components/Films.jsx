import React from 'react'; 
import Card from './Card'; 
class Films extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            films: null, 
            loaded: false 
        }
    }

    componentDidMount() {
        fetch(this.props.url + "films")
        .then(resp => resp.json())
        .then(obj => {
            this.setState({films: obj, loaded: true})
        })
    }

    render() {
        if (this.state.loaded) {
            const listFilms = this.state.films.map((film, index) => {
                return (
                    <Card film={film} /> 
                )
            })
            return (
                <div>{listFilms}</div>
            )
        }
        else {
            return (
                <h1>Loading...</h1>
            )
        } 
    }
}

export default Films; 
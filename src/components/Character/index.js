import React, { Component } from 'react';
import FilmItem from '../../components/FilmItem/index';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          character: [],
          error: false
        };
      };
      
      async componentDidMount() {
        try { 
            const url = `${this.props.character}`;
            this.setState({loading: true, error: false });
            const response = await fetch(url);
            const responseJson = await response.json();
            const character = responseJson;
            this.setState({character, loading: false, error: false });
        } catch(e) {
            this.setState({ loading: false, error: true })
        }
      };

    render(){
        const { loading, error, character } = this.state;
        return(
            <tr key={this.props.i}>
                    <td>{character.name}</td>
                    <td>{character.hair_color}</td>
                    <td>{character.gender}</td> 
                    <td>{!loading && !error && character.films && character.films.map((film, i) => <ul><FilmItem film={film} key={i}/></ul> )}</td>                   
            </tr>
        )
    };
}
export default Character;
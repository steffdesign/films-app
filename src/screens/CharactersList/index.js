import React, { Component } from 'react';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import Character from '../../components/Character/index';

class CharactersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          film: [],
          error: false
        };
      };
      async componentDidMount() {
        try { 
            const episode_id = Object.values(this.props.match.params);
            const url = `https://swapi.co/api/films/${episode_id}`;
            this.setState({loading: true, error: false });
            const response = await fetch(url);
            const responseJson = await response.json();
            const film = responseJson;
            this.setState({film, loading: false, error: false });
        } catch(e) {
            this.setState({ loading: false, error: true })
        }
        
      };

   render() {
    const { film, loading, error } = this.state;
        return (
            <div>
            <div className="container">
              <Nav/>     
              <div className='col-12 anchor'>
                <h1>Episode {film.episode_id} : {film.title}</h1>
                <h3>Characters:</h3>
                <div className='row'>
                    <div className='col-12'>
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Hair Color</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Films</th>
                          </tr>
                        </thead>
                        <tbody>
                        {!loading && !error && film.episode_id && film.characters.map((character, i) => <Character character={character} key={i}/> )}
                        </tbody>
                    </table>
                </div>
                {loading && 
                  <div className="col-12 text-center">
                      <p>Loading information...</p>
                  </div> 
                }
                {!loading && !error && !film.episode_id && 
                  <div className="col-12 text-center">
                      <h2>No information available</h2>
                  </div>
                }
                {!loading && error && 
                  <div className="col-12 text-center">
                      <h2>An error occurred.</h2>
                  </div>
                }
            </div>
            </div>
            </div>
           <Footer />
            </div> 
        )
    };
};
export default CharactersList;
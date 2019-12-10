import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';
import Nav from '../../components/Nav/index';
import Film from '../../components/Film/index';
import Footer from '../../components/Footer/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoading: true,
      error: false
    };
  };

  componentDidMount() {
    var instance = this;
    instance.getFilms(instance);
  };

  getFilms(instance){
    let listFilms = [];
    axios.get('https://swapi.co/api/films')
    .then(
      function (response) {
        listFilms = [];
        listFilms = response.data.results;
        instance.setState({ films: listFilms, isLoading: false, error: false});
      }
    );
  }

  renderInfoFilms(instance) {
  const { isLoading, films, error } = this.state;

  console.log(films, 'films');
    return (
      <div className='Home'>
        <div className='container'>
          <Nav />
          <div className='col-12 anchor'>
            <h1>Films</h1>
            <div className='row'>
              <div className='col-12'>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Episode</th>
                        <th scope="col">Director</th>
                        <th scope="col">Characters</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isLoading && films.map((film, i) => 
                        <Film film={film} key={i}/> 
                      )}
                    </tbody>
                  </table>
                  {isLoading && <p>Loading information ...</p> }
                  {!isLoading && !error && !films.length && <h2>No information available.</h2> }
                  {!isLoading && error && <h2>An error occurred.</h2> }
              </div>
            </div>
          </div>      
        </div>
        <Footer />   
      </div>
    );
  }

  render() {
    var instance = this;
    return ( <div>{instance.renderInfoFilms(instance)}</div> );
  }
};
export default Home;


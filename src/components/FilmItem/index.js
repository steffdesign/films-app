import React, { Component } from 'react';
import FilmTitle from '../../components/FilmTitle/index';
import {Button, ButtonToolbar} from 'react-bootstrap';

class FilmItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          film: [],
          error: false,
          addModalShow: false
        };
      };
      
      async componentDidMount() {
        try { 
            const url = `${this.props.film}`;
            this.setState({loading: true, error: false });
            const response = await fetch(url);
            const responseJson = await response.json();
            const film = responseJson;
            this.setState({film, loading: false, error: false });
        } catch(e) {
            this.setState({ loading: false, error: true })
        }
      };

    render(){
        let addModalClose = () => this.setState({addModalShow:false});
        const { loading, error, film } = this.state;
        return(
            <li key={this.props.i}>{!loading && !error && film.title && 
                <ButtonToolbar>
                        <Button
                        variant='link'
                        onClick={()=>this.setState({addModalShow: true})}>{film.title}</Button>
                        <FilmTitle
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                        film={film} key={this.props.i}
                        />
                </ButtonToolbar> 
            }</li>
        )
    };
}
export default FilmItem;
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import FilmTitle from '../FilmTitle';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Film extends Component {      
    constructor(props) {
        super(props);
        this.state = {
            addModalShow: false
        };
      };

    render(){
        let addModalClose = () => this.setState({addModalShow:false});
        return(
            <tr key={this.props.i}>
                <td> 
                    <ButtonToolbar>
                        <Button
                        variant='link'
                        onClick={()=>this.setState({addModalShow: true})}>{this.props.film.title}</Button>
                        <FilmTitle
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                        film={this.props.film} key={this.props.i}
                        />
                    </ButtonToolbar> 
                </td>
                <td>{this.props.film.episode_id}</td>
                <td>{this.props.film.director}</td> 
                <td><Link to={`/film/${this.props.film.url.replace('https://swapi.co/api/films/','')}`} className="btn btn-info">See Characters</Link></td>
            </tr>
        )
    };
}
export default Film;
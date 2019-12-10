import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';

class FilmTitle extends Component {
    render(){
       return(        
        <Modal
      {...this.props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="newModal">
        <div id="contentEffect">
            <div id="titlecontent">
                <p className="titleEpisode">Episode {this.props.film.episode_id}<br /> {this.props.film.title}</p>
                <p>{this.props.film.opening_crawl}.</p>
            </div>
        </div>
      </Modal.Body>

    </Modal>
        
       )
    };
}

export default FilmTitle;
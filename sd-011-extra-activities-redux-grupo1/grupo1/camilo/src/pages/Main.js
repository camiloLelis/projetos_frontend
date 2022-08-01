import React from 'react';

import Header from '../components/header';
import VideoList from '../components/videoList';
import TelaPrincipal from '../components/telaPrincipal';
import Rodape from '../components/rodape';
import data from '../data';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryVideo: '',
    };
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleCategoryClickVideo({ target: { id/* //como pegar */ } }) {
    this.setState({ queryVideo: id });
  }


  render() {

    return (
      <div>
        <Header />
        <TelaPrincipal />
        <VideoList onClick={ this.handleCategoryClickVideo } data={data} />
        <Rodape />
      </div>
    );
  }
}
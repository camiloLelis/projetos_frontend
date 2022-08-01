import React from 'react';

class videoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            video: this.props.data.titulo,
        }
    }


  render() {
    const { video } = this.state;
    return (
      <section>
        {
          video
            .map((v) => <li>v.name</li>)
        }
      </section>
    );
  }
}
export default videoList;
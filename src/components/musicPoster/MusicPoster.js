import React from 'react';

export default class MusicPoster extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const posters = this.props;
    return (
      <div className="card musicPoster">
        <div className="card-body">
        <a><h2 className="card-title">{posters.info.title}</h2></a>
        <p className="card-text">Click to access eminent {posters.info.desc} songs' lyrics</p>
        </div>
      </div>
    );
  }
}

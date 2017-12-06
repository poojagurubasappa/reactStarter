import React from 'react';
import data from '../../public/data/musicPosterData.json';
import MusicPoster from '../musicPoster/MusicPoster';

export default class LibraryPage extends React.Component {
   render() {
     const info = data;
     return info.map((item)=>(
       <div className="LibraryPage col-md-4">
         <MusicPoster info = {item} />
       </div>
     )
   )
   }
}

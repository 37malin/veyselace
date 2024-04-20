import React from 'react'
import './gallery.css'
import image1 from '../../images/gallery/gallery1.jpg';
import image2 from '../../images/gallery/gallery2.jpg';
import image3 from '../../images/gallery/gallery3.jpg';
import image4 from '../../images/gallery/gallery4.jpg';
import image5 from '../../images/gallery/gallery5.jpg';
import image6 from '../../images/gallery/gallery6.jpg';
import image7 from '../../images/gallery/gallery7.jpg';

const Gallery = () => {

  let images = [image1, image2, image3, image4, image5, image6, image7];
    return (
        <div className='gallery'>
          <div className='gallery_grid'>
            {images.map((url, index) => (
              <div id={`item-${index}`} style={{ gridArea: `label${index}` }} key={index}>
                <img src={url} alt={`veysel private tennis lessons`} />
              </div>
            ))}
          </div>
        </div>
    );
}

export default Gallery
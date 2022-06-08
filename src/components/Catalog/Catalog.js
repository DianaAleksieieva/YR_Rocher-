import "./Catalog.css";
import ImageGallery from 'react-image-gallery';
import images from './catalogPages';


function Catalog() {
    return (
      <div className="catalog">
        <ImageGallery
          items={images}
          thumbnailPosition="left"
          showPlayButton={false}
        />
      </div>
    );
}

export default Catalog;

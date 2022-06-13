import "./Catalog.css";
import '../App/App.css';
import ImageGallery from 'react-image-gallery';
import images from './catalogPages';
import mobileImages from './CatalogMobilePages';
import { isMobile } from 'react-device-detect';


function Catalog() {

  if (!isMobile) {
    return (
      <div className="catalog container">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showThumbnails={true}
          thumbnailPosition="left"
          showBullets={true}
          showIndex={true}
          showNav={true}
        />
      </div>
    );
  }
  return (
    <div className="catalog-mobile container">
      <ImageGallery
        items={mobileImages}
        showPlayButton={false}
        showThumbnails={false}
        showIndex={true}
        showNav={false}
      />
    </div>
  );
}

export default Catalog;

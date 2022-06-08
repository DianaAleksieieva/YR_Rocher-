import DownloadButton from './DownloadButton'
import OrderButton from './OrderButton'

function MainPageButtons({ showModal }) {
  return (
    <div className="button-wrap">
      <OrderButton showModal={showModal} />
      <DownloadButton />
    </div>
  );
}

export default MainPageButtons;
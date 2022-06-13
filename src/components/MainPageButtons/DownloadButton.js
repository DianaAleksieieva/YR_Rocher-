import './PageButtons.css';
import '../App/App.css';
import catalogFile from '../../images/UA_BR2111.pdf';

function DownloadButton() {
  return (
    <a
      className="downloadButton btn-main"
      href={catalogFile}
      download="Catalog2111"
    >
      <p className="button-name">Завантажити каталог</p>
    </a>
  );
}

export default DownloadButton;

import './PageButtons.css';
import '../App/App.css';

const filePath = '../../images';
const fileName = 'UA_BR2111.pdf';

function DownloadButton() {
  return (
    <a className='downloadButton' href={filePath} download={fileName}>
      Завантажити каталог
    </a>
  );
}

export default DownloadButton;

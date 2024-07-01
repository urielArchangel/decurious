'use client'
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({inputText}:{inputText:string}) => {

  const downloadQRCode = () => {
 

    const canvas = document.getElementById('qrcode-canvas') as HTMLCanvasElement;
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${inputText}_qrcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
    
            <button className='block bg-grad py-2 px-4 border border-transparent rounded-lg'onClick={downloadQRCode}>Get QR code</button>

        <div style={{display:"none"}}>
          <QRCode id="qrcode-canvas" value={inputText} size={256} />
        </div>
      
    </div>
  );
};

export default QRCodeGenerator;

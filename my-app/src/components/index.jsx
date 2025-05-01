import { useState } from 'react';
import './style.css'
import QRCode from 'react-qr-code';


function QRcodegenerator() {
    const [qrcode, setQrcode] = useState('');
    const [input, setInput] = useState('');

    function handleqrcode() {
        setQrcode(input);
        setInput('');
    }
    return (
        <>
            <div className='main-container'>
                <div>
                    <h3 className='intro'>hi</h3>
                    <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter your text here' name="qr-code" /> <button disabled={input && input.trim !== "" ? false : true} onClick={handleqrcode}>Generate</button>
                </div>
                <div className='qrcode-container'>
                    <QRCode id='qr-code-value' value={qrcode} bgColor='white' />
                </div>
            </div>
        </>
    );
}

export default QRcodegenerator;
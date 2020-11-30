import React from 'react';
import { render } from 'react-dom';
import { QRCode } from 'react-qr-svg';


class QR extends React.Component {



render(){
    const styles = {
        root: {
          fontFamily: 'sans-serif',
        },
        h1: {
          textAlign: 'center',
        },
        qrcode: {
          textAlign: 'center',
        },
      };
    return(
        <body>
        <div style={styles.root}>
        <h1 style={styles.h1}>QRCode with JSON</h1>
        <h1 style={styles.h1}>QRCode with JSON</h1>
        <div style={styles.qrcode}>
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify({
              id: 928328,
              name: 'Jane Doe',
              insider: true,
              email:'ddd',
            })}
          />
        </div>
      </div>
      <div class="container">
                    <div class="row">
                     
                        <div class="col-sm-12">
                          <h1>fff</h1>

                        </div>



                    </div>
                    
                   
                    

                   

                </div>
        
        </body>

    );
}
}
export default QR;
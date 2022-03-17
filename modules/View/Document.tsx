import React from 'react';

export const Document: React.FC = ({ children }) => {
    return ( 
        <html>
            <body>
                <div id='app'></div>
                {children}
            </body>
        </html>
    );
}
import React from 'react';

export const Document: React.FC = ({ children }) => {
    return ( 
        <html>
            <head>
                <link rel="stylesheet" href="public/css/reset.css" />
            </head>
            <body>
                <div id='app'></div>
                {children}
            </body>
        </html>
    );
}
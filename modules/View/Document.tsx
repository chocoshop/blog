import React from 'react';

export const Document: React.FC = ({ children }) => {
    return ( 
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}
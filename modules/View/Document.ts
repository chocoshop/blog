import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const document = (view: React.FunctionComponent): string => {
    const body = ReactDOMServer.renderToString(React.createElement(view));
    return `
        <html>${body}</html>
    `;
}
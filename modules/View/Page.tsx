import ReactDOMServer from 'react-dom/server';
import { Document } from './Document';
import { Script } from './Script';
import fs from 'fs';
import NotFoundError from '../Error/NotFoundError';

export const page = async (path: string) : Promise<string> => {
    const dir = 'pages/' + path;
    try {
        await fs.promises.readdir(dir);   
    } catch(e) {
        if (e.code === 'ENOENT') {
            throw new NotFoundError();
        }
        throw new Error();
    }
    const document = 
        <Document>
            <Script src={'public/pages/' + path + '/bundle.js'} />
        </Document>;
    return ReactDOMServer.renderToString(document);
};
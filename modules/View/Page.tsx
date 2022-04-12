import ReactDOMServer from 'react-dom/server';
import { Document } from './Document';
import { Script } from './Script';
import fs from 'fs';
import NotFoundError from '../Error/NotFoundError';

export const page = async (path: string) : Promise<string> => {
    const dir = 'pages/' + path;
    try {
        const files = await fs.promises.readdir(dir);   
        if (files.length === 0) {
            throw new NotFoundError();
        }
    } catch(e) {
        if (e.code === 'ENOENT') {
            throw new NotFoundError();
        }
        if (e instanceof NotFoundError) {
            throw e;
        }
        throw new Error();
    }

    const document = 
        <Document>
            <Script src={'public/pages/' + path + '/bundle.js'} />
        </Document>;
    return ReactDOMServer.renderToString(document);
};
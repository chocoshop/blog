import ReactDOMServer from 'react-dom/server';
import { Document } from './Document';
import { Script } from './Script';
import fs from 'fs';

export const page = async (path: string) : Promise<string> => {
    const dir = 'public/' + path;
    const files = await fs.promises.readdir(dir);
    const scripts = files.map(file => {
        return <Script src={'public/' + path + '/' + file} key={file} />;
    })
    const document = <Document>{scripts}</Document>;
    return ReactDOMServer.renderToString(document);
};
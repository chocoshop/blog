import ReactDOMServer from 'react-dom/server';
import { Document } from './Document';
import { Script } from './Script';

export const Page = (path: string) : string => {
    // todo: publicなファイルへパスを変換をする
    // todo: pages/dir配下のjsを配列で読んでscriptタグに変換する
    const document = <Document><Script src={path} /></Document>;
    return ReactDOMServer.renderToString(document);
};
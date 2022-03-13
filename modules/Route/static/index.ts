import { isAsset } from './utils/index';
import { filterByKey } from './utils';
import path from 'path';
import fs from 'fs';
import NotFoundError from '../../Error/NotFoundError';

export default class StaticRoute {
    static async exec(url: string): Promise<{content: Buffer, contentType: string}> {
        const extname = String(path.extname(url)).toLowerCase();
        const contentType = filterByKey({
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.wav': 'audio/wav',
            '.mp4': 'video/mp4',
            '.woff': 'application/font-woff',
            '.ttf': 'application/font-ttf',
            '.eot': 'application/vnd.ms-fontobject',
            '.otf': 'application/font-otf',
            '.wasm': 'application/wasm'
        }, extname) ?? 'application/octet-stream';

        const filePath = '/var/www' + url;

        try {
            const content = await fs.promises.readFile(filePath);
            return {content, contentType};
        } catch (e) {
            if (e.code == 'ENOENT') {
                throw new NotFoundError('input file was not found');
            }
            throw new Error('Failed to load file');
        }
    }
}
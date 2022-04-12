import NotFoundError from "../../Error/NotFoundError";
import { page } from "../../View/Page";
import fs from 'fs';

test('指定された階層が存在しない場合は、NotFoundErrorをthrowする', () => {
    expect(page('dummy')).rejects.toThrowError(new NotFoundError());
});

test('指定された階層にファイルが存在しない場合は、NotFoundErrorをthrowする', () => {
    fs.mkdir('modules/tests/View/dummy', e => {
        if (e) throw e;
    });
    expect(page('dummy', '/modules/tests/View/')).rejects.toThrowError(new NotFoundError())
    fs.rmdir('modules/tests/View/dummy', e => {
        if (e) throw e;
    });
});
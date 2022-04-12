import NotFoundError from "../../Error/NotFoundError";
import { page } from "../../View/Page";

test('指定された階層が存在しない場合は、NotFoundErrorをthrowする', async () => {
    expect(page('dummy')).rejects.toThrowError(new NotFoundError());
})
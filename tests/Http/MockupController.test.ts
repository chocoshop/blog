import * as http from 'http';
import MockupController from "../../App/Http/MockupController"

test('viewを返す', async () => {
    expect(new MockupController({} as http.IncomingMessage, {} as http.ServerResponse).get())
        .toBeTruthy();
})
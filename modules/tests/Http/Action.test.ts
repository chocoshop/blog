import Action from "../../Http/Action";

test('実行されるコントローラー名を返す', () => {
    expect(new Action('TestController@index').getController())
    .toBe('TestController');
})

test('実行されるメソッド名を返す', () => {
    expect(new Action('TestController@index').getMethod())
    .toBe('index');
})

test('アクションがController@methodの形式ではない場合は例外を投げる', () => {
    expect(() => new Action('InvalidCase::method')).toThrowError(new Error('Invalid Action Format'));
})
import { filterByKey } from "../../../Route/static/utils"

test('オブジェクトから対象のkeyを持つvalueを返す', () => {
    expect(filterByKey({'key1': 'value', 'key2': 'value2'}, 'key2')).toBe('value2');
})
export default class Controller<K> implements Contracts.Controller<K> {
    constructor() {   
    }

    // メソッドを1つ持たない場合に呼び出す対象がわからずエラーになる模様。controller['method'] => error
    __invoke() {}
}

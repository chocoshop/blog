import Controller from "../../Controllers";

type TestMethods = 'test' | 'index';

export default class TestController extends Controller<TestMethods> {
    index() {
        return 1;
    }
}
type TestMethods = Methods & {
    index(): object[];
};

export default class TestController implements TController<TestMethods> {
    index() {
        return [];
    }
    invoke?: any;
}
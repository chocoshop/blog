import Controller from "../../modules/Http/Controller";

export default class IndexController extends Controller
{
    getA() {
        return this.res.end('aにきた');
    }
}

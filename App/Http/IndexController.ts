import Controller from "../../modules/Http/Controller";
import { page } from "../../modules/View/Page";

export default class IndexController extends Controller
{
    public get() {
        return page('pages/root');
    }

    public getA() {
        return page('pages/a');
    }
}

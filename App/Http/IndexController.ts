import Controller from "../../modules/Http/Controller";
import { Page } from "../../modules/View/Page";

export default class IndexController extends Controller
{
    public get() {
        return Page('pages/root');
    }

    public getA() {
        return Page('pages/a');
    }
}

import Controller from "../../modules/Http/Controller";
import { page } from "../../modules/View/Page";

export default class SampleController extends Controller
{
    public get() {
        return page('/');
    }
}
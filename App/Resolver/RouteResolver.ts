import {RouteResolver as BaseRouteResolver} from '../../modules/Resolver/RouteResolver';
import route_config from '../config/routes';

export default class RouteResolver extends BaseRouteResolver {

    constructor() {
        super();
        this.rootDir = route_config.rootDir;
    }
}
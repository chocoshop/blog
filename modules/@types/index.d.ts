type Routes = {
    [path: string]: string
}

type Methods = '__invoke';

namespace Contracts {
    interface Controller<T> {
        // viewクラスができたら戻り値を縛る
        [K in T]();
    }
}
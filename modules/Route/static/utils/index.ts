import path from 'path';

export const isAsset = (url: string, root = 'public'): boolean => {    
    return path.dirname(url).split('/')[1] === root;
}

export const filterByKey = (obj: { [s: string]: string }, serachKey: string): string|null => {
    const filtered = Object.keys(obj).filter((key) => {
        return serachKey === key;
    });

    if (filtered.length === 0) {
        return null;
    }

    return obj[filtered[0] as keyof typeof obj];
}
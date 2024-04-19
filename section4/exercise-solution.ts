export type Expect<T extends true> = T;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
        T,
    >() => T extends Y ? 1 : 2
    ? true
    : false;

type Url = `http:${string}`;

function getProtocol(url: Url) {
    return url.split(":")[0];
}

getProtocol("http://typescriptlang.org");
getProtocol("typescriptlang.org");

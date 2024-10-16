type pair = { readonly head: any; readonly tail: pair | null };
type list = pair | null;

function first(p: pair): any {
    return p.head;
}

function rest(p: pair): list {
    return p.tail;
}

function cons(head: any, tail: list): pair {
    return { head, tail };
}

function list(...args: any[]): list {
    if (args.length === 0) return null;
    return cons(args[0], list(...args.slice(1)));
}

function listLength(l: list): number {
    if (!l) return 0;
    return 1 + listLength(rest(l));
}

function nth(l: list, position: number): any {
    if (position === 0) return first(l);
    return nth(rest(l), position - 1);
}

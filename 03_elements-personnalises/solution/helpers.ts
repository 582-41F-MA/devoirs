type generic = (...a: any) => any;
type ms = number;

export function debounce(delay: ms, callback: generic): generic {
    let timeoutId: number;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback(...args), delay);
    };
}

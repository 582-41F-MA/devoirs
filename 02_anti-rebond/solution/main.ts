type generic = (...a: any) => any;
type ms = number;

const input = document.querySelector("input") as HTMLInputElement;
const logValue = debounce(1000, (value) => console.log(value));
input.addEventListener("input", () => logValue(input.value));

function debounce(delay: ms, callback: generic): generic {
    let timeoutId: number;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback(...args), delay);
    };
}

import { debounce } from "./helpers.js";

export default class FieldValidator extends HTMLElement {
    static observedAttributes = ["href", "show-valid", "delay"];
    private href = "";
    private showValid = false;
    private delay = 1000;
    private msgContainer: HTMLDivElement;

    constructor() {
        super();
        this.msgContainer = this.addMsgContainer();
    }

    connectedCallback(): void {
        const input = this.querySelector("input");
        if (!input) return;
        const debouncedValidate = debounce(
            this.delay,
            () => this.validate(input),
        );
        input.addEventListener("input", debouncedValidate);
    }

    attributeChangedCallback(
        name: string,
        _oldValue: string, // « _ » indique que cet argument est inutilisé
        newValue: string,
    ): void {
        switch (name) {
            case "href":
                this.href = newValue;
                break;
            case "show-valid":
                this.showValid = true;
                break;
            case "delay":
                this.delay = Number(newValue);
                break;
        }
    }

    private async validate(input: HTMLInputElement): Promise<void> {
        const formData = new URLSearchParams();
        formData.append(input.name, input.value);
        const options = {
            method: "POST",
            headers: { "Content-type": "application/x-www-form-urlencoded" },
            body: formData,
        };
        const res = await fetch(this.href, options);
        if (res.status === 422) return this.showErrorMsg(await res.text());
        this.showSuccessMsg();
    }

    private addMsgContainer(): HTMLDivElement {
        const div = document.createElement("div");
        this.prepend(div);
        return div;
    }

    private showSuccessMsg(): void {
        if (!this.showValid) return this.msgContainer.replaceChildren();
        const p = document.createElement("p");
        p.textContent = "Correct";
        this.msgContainer.replaceChildren(p);
    }

    private showErrorMsg(msg = "Incorrect"): void {
        const p = document.createElement("p");
        p.textContent = msg;
        this.msgContainer.replaceChildren(p);
    }
}

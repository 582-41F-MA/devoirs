type RoomSize = "small" | "medium" | "large";

export default class Talk {
    private title: string;
    private speaker: string;
    private tickets: number;
    private node: HTMLTableRowElement;

    constructor(title: string, speaker: string, room: RoomSize) {
        this.title = title;
        this.speaker = speaker;
        this.tickets = this.calcTickets(room);
        this.node = this.render();
    }

    public render(): HTMLTableRowElement {
        const tr = document.createElement("tr");

        const titleTd = document.createElement("td");
        titleTd.textContent = this.title;
        tr.append(titleTd);

        const speakerTd = document.createElement("td");
        speakerTd.textContent = this.speaker;
        tr.append(speakerTd);

        const ticketsTd = document.createElement("td");
        ticketsTd.textContent = String(this.tickets);
        tr.append(ticketsTd);

        const buyTd = document.createElement("td");
        const buyButton = document.createElement("button");
        buyButton.textContent = "Acheter";
        buyButton.addEventListener("click", () => this.buyTicket());
        buyTd.append(buyButton);
        tr.append(buyTd);

        this.node = tr;

        return tr;
    }

    private buyTicket() {
        if (this.tickets <= 0) return;
        this.tickets--;
        this.updateNode();
    }

    private updateNode() {
        const oldNode = this.node;
        const newNode = this.render();
        oldNode.replaceWith(newNode);
        this.focusButton();
    }

    private focusButton() {
        const button = this.node.querySelector("button") as HTMLButtonElement;
        button.focus();
    }

    private calcTickets(room: RoomSize): 100 | 200 | 300 {
        switch (room) {
            case "small":
                return 100;
            case "medium":
                return 200;
            case "large":
                return 300;
        }
    }
}

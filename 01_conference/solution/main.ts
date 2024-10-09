import Talk from "./Talk.js";

const form = document.querySelector("form") as HTMLFormElement;
const titleInput = form.querySelector("[name=title]") as HTMLInputElement;
const speakerInput = form.querySelector("[name=speaker]") as HTMLInputElement;
const roomSelect = form.querySelector("[name=room]") as HTMLSelectElement;
const defaultRoomValue = roomSelect.value;
const tbody = document.querySelector("tbody") as HTMLTableSectionElement;

form.addEventListener("submit", addTalk);

function addTalk(e: Event): void {
    e.preventDefault();
    const talk = new Talk(
        titleInput.value,
        speakerInput.value,
        roomSelect.value as "small" | "medium" | "large",
    );
    const talkRow = talk.render();
    tbody.prepend(talkRow);
    resetControls();
    moveFocus(talkRow);
}

function resetControls(): void {
    titleInput.value = "";
    speakerInput.value = "";
    roomSelect.value = defaultRoomValue;
}

function moveFocus(to: HTMLElement): void {
    to.setAttribute("tabindex", "-1");
    to.focus();
}

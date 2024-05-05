function addNote(): void {
    const list: HTMLElement | null = document.getElementById("noteList");
    const noteInput: HTMLInputElement | null = <HTMLInputElement>document.getElementById("noteInput");
    const date: string = new Date().toLocaleDateString();

    if (list && noteInput) {
        const newNote: HTMLDivElement = document.createElement("div");
        const paragraph: HTMLParagraphElement = document.createElement("p");
        const button: HTMLButtonElement = document.createElement("button");
        const sub: HTMLElement = document.createElement("sub"); // изменено на HTMLElement

        paragraph.innerText = noteInput.value;
        button.innerText = "Очистить";
        sub.innerText = " (" + date + ")";

        button.onclick = function (): void {
            if (list && newNote) {
                list.removeChild(newNote);
            }
        };

        newNote.appendChild(paragraph);
        newNote.appendChild(button);
        paragraph.appendChild(sub);

        if (list) {
            list.appendChild(newNote);
        }

        if (noteInput) {
            noteInput.value = "";
        }
    }
}


function clearAll(): void {
    const list: HTMLElement | null = document.getElementById("noteList");
    if (list) {
        list.innerHTML = "";
    }
}

function addDefaultNotes(): void {
    const list: HTMLElement | null = document.getElementById("noteList");
    if (list) {
        for (let i: number = 1; i <= 3; i++) {
            const newNote: HTMLDivElement = document.createElement("div");
            const paragraph: HTMLParagraphElement = document.createElement("p");
            const button: HTMLButtonElement = document.createElement("button");

            paragraph.innerText = i.toString();
            button.innerText = "Очистить";

            button.onclick = function (): void {
                if (list) {
                    list.removeChild(newNote);
                }
            };

            newNote.appendChild(paragraph);
            newNote.appendChild(button);
            list.appendChild(newNote);
        }
    }
}

window.onload = addDefaultNotes;

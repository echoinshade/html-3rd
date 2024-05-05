function addNote() {
    var list = document.getElementById("noteList");
    var noteInput = document.getElementById("noteInput").value;
    var date = new Date().toLocaleDateString();
    
    var newNote = document.createElement("div");
    var paragraph = document.createElement("p");
    var button = document.createElement("button");
    var sub = document.createElement("sub");

    paragraph.innerText = noteInput;
    button.innerText = "Очистить";
    sub.innerText = " (" + date + ")";
    
    button.onclick = function() {
        list.removeChild(newNote);
    };
    
    newNote.appendChild(paragraph);
    newNote.appendChild(button);
    paragraph.appendChild(sub);
    list.appendChild(newNote);

    document.getElementById("noteInput").value = "";
}

function clearAll() {
    var list = document.getElementById("noteList");
    list.innerHTML = "";
}

function addDefaultNotes() {
    for (var i = 1; i <= 3; i++) {
        var list = document.getElementById("noteList");
        var newNote = document.createElement("div");
        var paragraph = document.createElement("p");
        var button = document.createElement("button");

        paragraph.innerText = i;
        button.innerText = "Очистить";

        button.onclick = function() {
            list.removeChild(newNote);
        };

        newNote.appendChild(paragraph);
        newNote.appendChild(button);
        list.appendChild(newNote);
    }
}

window.onload = addDefaultNotes;

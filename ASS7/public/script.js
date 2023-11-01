document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("noteInput");
    const addNoteButton = document.getElementById("addNote");
    const notesList = document.querySelector(".notes-list");

    // Fetch and display notes
    fetch("/notes")
        .then((response) => response.json())
        .then((notes) => {
            notes.forEach((note) => {
                displayNote(note);
            });
        })
        .catch((error) => {
            console.error("Error fetching notes:", error);
        });

    // Add a new note
    addNoteButton.addEventListener("click", () => {
        const text = noteInput.value.trim();
        if (text) {
            fetch("/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text }),
            })
                .then((response) => response.json())
                .then((newNote) => {
                    displayNote(newNote);
                    noteInput.value = "";
                })
                .catch((error) => {
                    console.error("Error adding note:", error);
                });
        }
    });

    // Display a note
    function displayNote(note) {
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.textContent = note.text;
        notesList.appendChild(noteElement);
    }
});

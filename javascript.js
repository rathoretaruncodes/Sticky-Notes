  const notesContainer = document.querySelector(".notes-container");
  const createBtn = document.querySelector(".btn");
  let notes = document.querySelectorAll(".input-box");

  function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
  }
  showNotes();

  function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
  }

  createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let icon = document.createElement("i");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    icon.className = "fa-regular fa-trash-can";
    icon.setAttribute("contenteditable", "false");
    //icon will be displayed inside inputBox and inputBox will be displayed inside notesContainer
    notesContainer.appendChild(inputBox).appendChild(icon);
  });
  
  notesContainer.addEventListener("click", (event) =>{
    //Delete
    if(event.target.tagName === "I"){
        event.target.parentElement.remove();
        updateStorage();
    }
    else if(event.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = () => {
                updateStorage();
            }
        });
    }
  });
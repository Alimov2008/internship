const apiUrl = "http://localhost:3000/notes";
let page = 1;
const limit = 5;
let totalPages = 1;
let currentSearch = "";

const notesList = document.getElementById("notesList");
const pageInfo = document.getElementById("pageInfo");

async function fetchNotes() {
  const res = await fetch(`${apiUrl}?page=${page}&limit=${limit}&search=${currentSearch}`);
  const result = await res.json();

  notesList.innerHTML = "";
  result.data.forEach(note => {
    const li = document.createElement("li");
    li.textContent = `${note.title}: ${note.content} `;
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = async () => {
      await fetch(`${apiUrl}/${note.id}`, { method: "DELETE" });
      fetchNotes();
    };

    li.appendChild(delBtn);
    notesList.appendChild(li);
  });

  totalPages = result.meta.totalPages;
  pageInfo.textContent = `Page ${result.meta.page} of ${totalPages}`;
}
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

document.getElementById("createBtn").onclick = async () => {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content })
  });

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  fetchNotes();
};

document.getElementById("searchBtn").onclick = () => {
  currentSearch = document.getElementById("search").value;
  page = 1;
  fetchNotes();
};

document.getElementById("prevPage").onclick = () => {
  if (page > 1) { page--; fetchNotes(); }
};

document.getElementById("nextPage").onclick = () => {
  if (page < totalPages) { page++; fetchNotes(); }
};

fetchNotes();
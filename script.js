const resources = [
  { title: "C Programming Complete Lab Manual", subject: "C Programming", type: "PDF Notes", desc: "25 solved lab programs covering pointers, arrays, structures, and file handling.", url: "https://en.cppreference.com/w/c" },
  { title: "MDN Web Docs: HTML & CSS Reference", subject: "Web Tech", type: "Documentation", desc: "Official reference guide for semantic HTML5 elements and modern CSS layouts.", url: "https://developer.mozilla.org/en-US/docs/Web" },
  { title: "Matrices & Differential Calculus Notes", subject: "Math", type: "Lecture Notes", desc: "Unit-wise solved examples for Engineering Mathematics-I mid-sem preparation.", url: "https://ocw.mit.edu" },
  { title: "JavaScript Info: Modern JS Tutorial", subject: "Web Tech", type: "E-Book", desc: "From basics to DOM manipulation, events, and asynchronous Fetch API.", url: "https://javascript.info" },
  { title: "Semiconductor & Laser Physics Handouts", subject: "Physics", type: "Study Guide", desc: "Concise derivations and numerical problem sets for 1st-year Applied Physics.", url: "https://nptel.ac.in" },
  { title: "Linux & Git Command Cheat Sheet", subject: "C Programming", type: "Reference", desc: "Essential terminal commands for compiling C programs and managing Git repositories.", url: "https://git-scm.com/docs" }
];

let selectedSubject = "All";

const resourceGrid = document.getElementById("resourceGrid");
const searchBox = document.getElementById("searchBox");

function renderResources() {
  const q = searchBox.value.toLowerCase().trim();
  const list = resources.filter((r) => {
    const matchSub = selectedSubject === "All" || r.subject === selectedSubject;
    const matchText = r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q);
    return matchSub && matchText;
  });

  resourceGrid.innerHTML = "";
  if (list.length === 0) {
    resourceGrid.innerHTML = `<p>No resources match your search.</p>`;
    return;
  }

  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "res-card";
    card.innerHTML = `
      <div>
        <div class="res-top">
          <span class="sub-tag">${item.subject}</span>
          <span class="type-tag">${item.type}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="res-link">Open Resource ↗</a>
    `;
    resourceGrid.appendChild(card);
  });
}

searchBox.addEventListener("input", renderResources);

document.getElementById("subjectFilters").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  document.querySelectorAll("#subjectFilters button").forEach((b) => b.classList.remove("active"));
  e.target.classList.add("active");
  selectedSubject = e.target.dataset.sub;
  renderResources();
});

renderResources();
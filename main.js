/* Studio Mäntylä template
   Edit `projects` to change the work.
   Add image: "images/pihka.jpg" on a project to replace the stand-in drawing.
*/

const projects = [
  {
    id: "pihka",
    name: "Pihka",
    kind: "Mascot",
    tags: ["Mascot", "Animation"],
    year: "2026",
    client: "Northern Pantry",
    accent: "#e0a15c",
    card: "A resin spirit for a forest-goods label.",
    summary:
      "Pihka is a small pine-resin spirit: round, stubborn, and a little glossy. The character had to feel collectible on a jar and alive in a two-second loop.",
    brief:
      "A young foods brand needed a face that could sit on packaging without looking like a cartoon sticker. They wanted someone you might find under a branch.",
    made:
      "A character model, four expressions, a turnaround, and a sticky little idle where Pihka blinks and the resin on their head catches the light.",
    deliverables: "Model, expressions, idle loop",
    label: "Pihka, a pine-resin mascot",
  },
  {
    id: "kajo",
    name: "Kajo",
    kind: "Mascot",
    tags: ["Mascot", "Animation"],
    year: "2026",
    client: "First Light Travel",
    accent: "#8fd0c8",
    card: "An aurora fox built to read at icon size.",
    summary:
      "Kajo leads a northern travel app. The fox had to stay recognizable as a tiny mark and still hold up in a five-second opening shot.",
    brief:
      "The team had a name and a feeling — first light on snow — and no character. They needed one design for the interface and for motion.",
    made:
      "A compact fox model, a simplified icon version, and a short intro where the tail sweeps a band of color across the frame.",
    deliverables: "Model, app icon, intro",
    label: "Kajo, an aurora fox",
  },
  {
    id: "nuppu",
    name: "Nuppu",
    kind: "Still",
    tags: ["Still"],
    year: "2025",
    client: "Bakery on the Corner",
    accent: "#e7a3b0",
    card: "Hero stills of a bakery bud for packaging.",
    summary:
      "Nuppu is the face of a neighborhood bakery. The renders lean clay-like and warm, made to sit beside real bread.",
    brief:
      "The bakery was redoing its boxes and wanted a character that felt baked, not branded. No outlines, no loud costume.",
    made:
      "A still set: front, three-quarter, and a close-up for the lid. Soft studio light, flour-colored materials, one berry accent.",
    deliverables: "Three hero stills",
    label: "Nuppu, a bakery bud",
  },
  {
    id: "laine",
    name: "Laine",
    kind: "Animation",
    tags: ["Animation"],
    year: "2025",
    client: "Harbor Week",
    accent: "#8eb7d4",
    card: "A harbor seal with a looping wave.",
    summary:
      "Laine welcomes people to a waterfront festival. The job was a short loop for posters, the site, and a pier-side screen.",
    brief:
      "The festival already had a wordmark. They wanted a host who could wave without words, in any weather, on a loop.",
    made:
      "A seal model with a scarf, three poses, and a four-second wave cycle that returns cleanly to the first frame.",
    deliverables: "Model, poses, wave loop",
    label: "Laine, a harbor seal",
  },
  {
    id: "tarmo",
    name: "Tarmo",
    kind: "Mascot",
    tags: ["Mascot"],
    year: "2026",
    client: "Ruuvi Hardware",
    accent: "#e0a15c",
    card: "A pocket robot for a hardware shop.",
    summary:
      "Tarmo is a counter mascot for a neighborhood hardware shop: a pocket robot who looks ready to find the right screw.",
    brief:
      "The shop wanted someone friendlier than a tool illustration and more specific than a smiling wrench.",
    made:
      "A mascot model, a tool-belt variant, and three expressions for the window, the bags, and the receipts.",
    deliverables: "Model, variant, expressions",
    label: "Tarmo, a pocket robot",
  },
  {
    id: "usva",
    name: "Usva",
    kind: "Still",
    tags: ["Still"],
    year: "2025",
    client: "Night Listen",
    accent: "#c9c3de",
    card: "A mist owl for a nighttime audio story.",
    summary:
      "Usva sits on the cover of a night-time audio story. One pose, quiet light, fog instead of a backdrop.",
    brief:
      "The publisher needed a cover character who could hold a square crop and still feel like someone you might meet in the dark.",
    made:
      "A hero render, a tighter crop for the episode art, and a colorless clay pass kept for later animation.",
    deliverables: "Cover still, crop, clay pass",
    label: "Usva, a mist owl",
  },
];

const lookNotes = {
  sculpt: "Clay pass, before color. A stand-in for the sculpt review.",
  lookdev: "Materials blocked in. Swap this view for a lookdev still.",
  light: "Studio still. Replace with a final render.",
};

const titles = {
  home: "Studio Mäntylä — 3D mascots & character animation",
  work: "Work — Studio Mäntylä",
  approach: "Approach — Studio Mäntylä",
  contact: "Contact — Studio Mäntylä",
  project: "Studio Mäntylä",
};

let screen = "home";
let filter = "All";
let heroId = "pihka";
let pose = "still";
let projectId = "pihka";
let look = "light";

const heroStage = document.querySelector("#hero-stage");
const heroMascot = document.querySelector("#hero-mascot");
const heroUse = heroMascot.querySelector("use");
const heroName = document.querySelector("#hero-name");
const heroThumbs = document.querySelector("#hero-thumbs");
const homeWork = document.querySelector("#home-work");
const workGrid = document.querySelector("#work-grid");
const workEmpty = document.querySelector("#work-empty");
const nav = document.querySelector("#site-nav");
const navToggle = document.querySelector(".nav-toggle");
const form = document.querySelector("#contact-form");
const formError = document.querySelector("#form-error");
const formSuccess = document.querySelector("#form-success");

function projectById(id) {
  return projects.find((item) => item.id === id);
}

function art(project) {
  if (project.image) {
    return `<img src="${project.image}" alt="">`;
  }
  return `<svg viewBox="0 0 200 240" aria-hidden="true"><use href="#mascot-${project.id}"></use></svg>`;
}

function cardMarkup(project) {
  return `<button class="card" type="button" data-project="${project.id}">
    <span class="card-stage" style="--glow:${project.accent}">${art(project)}</span>
    <span class="card-copy">
      <span class="card-kind">${project.kind}</span>
      <span class="card-name">${project.name}</span>
      <span class="card-summary">${project.card}</span>
    </span>
  </button>`;
}

function renderThumbs() {
  heroThumbs.innerHTML = projects
    .map(
      (project) => `<button class="thumb" type="button" data-hero="${project.id}" aria-pressed="${
        project.id === heroId
      }">
        ${art(project)}
        <span>${project.name}</span>
      </button>`
    )
    .join("");
}

function renderWork() {
  homeWork.innerHTML = projects.slice(0, 4).map(cardMarkup).join("");
  const visible = projects.filter((project) => filter === "All" || project.tags.includes(filter));
  workGrid.innerHTML = visible.map(cardMarkup).join("");
  workEmpty.hidden = visible.length > 0;
}

function paintHero() {
  const project = projectById(heroId);
  heroUse.setAttribute("href", `#mascot-${project.id}`);
  heroMascot.setAttribute("aria-label", project.label);
  heroName.textContent = project.name;
  heroStage.style.setProperty("--glow", project.accent);
  heroMascot.classList.toggle("is-turn", pose === "turn");
  heroMascot.classList.toggle("is-loop", pose === "loop");
  document.querySelectorAll("[data-pose]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.pose === pose));
  });
  document.querySelectorAll("[data-hero]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.hero === heroId));
  });
}

function paintProject() {
  const project = projectById(projectId);
  const stage = document.querySelector("#project-stage");
  document.querySelector("#project-mascot").setAttribute("href", `#mascot-${project.id}`);
  stage.style.setProperty("--glow", project.accent);
  stage.dataset.look = look;
  document.querySelector("#project-kind").textContent = project.kind;
  document.querySelector("#project-title").textContent = project.name;
  document.querySelector("#project-summary").textContent = project.summary;
  document.querySelector("#project-client").textContent = project.client;
  document.querySelector("#project-year").textContent = project.year;
  document.querySelector("#project-deliver").textContent = project.deliverables;
  document.querySelector("#project-brief").textContent = project.brief;
  document.querySelector("#project-made").textContent = project.made;
  document.querySelector("#look-note").textContent = lookNotes[look];
  document.querySelectorAll("#project-stage [data-look]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.look === look));
  });
  const next = projects[(projects.findIndex((item) => item.id === projectId) + 1) % projects.length];
  document.querySelector("#project-next").textContent = `Next: ${next.name}`;
  document.title = `${project.name} — Studio Mäntylä`;
}

function setScreen(next) {
  screen = next;
  document.querySelectorAll("[data-screen]").forEach((section) => {
    section.hidden = section.dataset.screen !== next;
  });
  document.querySelectorAll("[data-nav]").forEach((button) => {
    const current = button.dataset.go === next || (next === "project" && button.dataset.go === "work");
    button.classList.toggle("is-current", current);
    if (current) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  if (next !== "project") document.title = titles[next];
  window.scrollTo(0, 0);
}

function openProject(id) {
  projectId = id;
  look = "light";
  paintProject();
  setScreen("project");
}

document.addEventListener("click", (event) => {
  const go = event.target.closest("[data-go]");
  if (go) {
    if (go.dataset.intent) {
      form.elements.intent.value = go.dataset.intent;
    }
    setScreen(go.dataset.go);
  }

  const projectButton = event.target.closest("[data-project]");
  if (projectButton) openProject(projectButton.dataset.project);

  const poseButton = event.target.closest("[data-pose]");
  if (poseButton) {
    pose = poseButton.dataset.pose;
    paintHero();
  }

  const heroButton = event.target.closest("[data-hero]");
  if (heroButton) {
    heroId = heroButton.dataset.hero;
    pose = "still";
    paintHero();
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    filter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
    });
    renderWork();
  }

  const lookButton = event.target.closest("#project-stage [data-look]");
  if (lookButton) {
    look = lookButton.dataset.look;
    paintProject();
  }

  if (event.target.closest("[data-next]")) {
    const next = projects[(projects.findIndex((item) => item.id === projectId) + 1) % projects.length];
    openProject(next.id);
  }

  if (event.target.closest(".nav-toggle")) {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  let error = "";
  if (!name) error = "Add your name so the reply has somewhere to land.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) error = "Add an email address that can take a reply.";
  else if (message.length < 8) error = "Say a little about the character — a sentence is enough.";
  formError.hidden = !error;
  formError.textContent = error;
  if (error) return;
  form.hidden = true;
  formSuccess.hidden = false;
});

document.querySelector("#form-reset").addEventListener("click", () => {
  form.reset();
  form.hidden = false;
  formSuccess.hidden = true;
  formError.hidden = true;
});

renderThumbs();
renderWork();
paintHero();
setScreen("home");

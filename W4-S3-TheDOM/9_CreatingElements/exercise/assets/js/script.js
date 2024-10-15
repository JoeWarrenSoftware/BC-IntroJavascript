// TODO: Add 2 new items to the sidebar called "Register" and "Help".
const registerEl = document.createElement("li");
registerEl.textContent = "Register";

const helpEl = document.createElement("li");
helpEl.textContent = "Help";

const listEl = document.querySelector("ul");
listEl.appendChild(registerEl);

// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?
listEl.insertBefore(helpEl, listEl.childNodes[6]);
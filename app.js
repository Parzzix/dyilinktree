document.getElementById("name").textContent = profile.name;
document.getElementById("bio").textContent = profile.bio;
document.getElementById("avatar").src = profile.avatar;
const linksDiv = document.getElementById("links");
profile.links.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.label;
  a.className = "link-btn";
  a.target = "_blank";
  linksDiv.appendChild(a);
});
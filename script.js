// 1. localStorage: OS and browser
const osInfo = navigator.platform;
const browserInfo = navigator.userAgent;

localStorage.setItem("os", osInfo);
localStorage.setItem("browser", browserInfo);

// Show info in footer
const infoDiv = document.getElementById("storage-info");
infoDiv.innerHTML = `
    <p><strong>OS:</strong> ${localStorage.getItem("os")}</p>
    <p><strong>Browser:</strong> ${localStorage.getItem("browser")}</p>
`;

// 2. JSONPlaceholder comments (post 30)
fetch("https://jsonplaceholder.typicode.com/posts/30/comments")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("comments-container");
        container.innerHTML = "";
        data.forEach(comment => {
            container.innerHTML += `
                <p><strong>${comment.name}:</strong> ${comment.body}</p>
            `;
        });
    })
    .catch(err => console.error("Error fetching comments:", err));

// 3. Modal form after 1 min
setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 60000);

document.getElementById("close-modal").onclick = () => {
    document.getElementById("modal").style.display = "none";
};

// 4. Theme switcher
const switcher = document.getElementById("theme-switch");

function applyThemeByTime() {
    const hour = new Date().getHours();
    const isDay = hour >= 7 && hour < 21;
    document.body.classList.toggle("night", !isDay);
    switcher.checked = !isDay;
}
applyThemeByTime();

switcher.addEventListener("change", () => {
    document.body.classList.toggle("night", switcher.checked);
});

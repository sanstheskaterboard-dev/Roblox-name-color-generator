import GetNameColor from "./GetNameColor";

const usernameInput = document.getElementById("username") as HTMLInputElement;
const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

generateBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (!username) {
        resultDiv.textContent = "Please enter a username!";
        resultDiv.style.color = "black";
        return;
    }

    const color = GetNameColor(username);
    const rgbStr = `rgb(${color.r}, ${color.g}, ${color.b})`;
    resultDiv.textContent = `Color for "${username}"`;
    resultDiv.style.color = rgbStr;
});

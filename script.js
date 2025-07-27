const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");
const promptInput = document.getElementById("prompt-input");

const GEMINI_API_KEY = "YOUR_API_KEY"; // Replace with your actual key

generateBtn.addEventListener("click", generatePalette);

paletteContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains("color")) {
    const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")))
      .catch((err) => console.log(err));
  }
});

function showCopySuccess(element) {
  element.classList.remove("far", "fa-copy");
  element.classList.add("fas", "fa-check");

  element.style.color = "#48bb78";

  setTimeout(() => {
    element.classList.remove("fas", "fa-check");
    element.classList.add("far", "fa-copy");
    element.style.color = "";
  }, 1500);
}

async function generatePalette() {
  const prompt = promptInput.value.trim();
  let colors = await getPaletteFromGemini(prompt);

  if (!colors) {
    // Fallback to random generation
    colors = [];
    for (let i = 0; i < 5; i++) {
      colors.push(generateRandomColor());
    }
  }

  updatePaletteDisplay(colors);
}

async function getPaletteFromGemini(promptText) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const prompt = promptText
  ? `Generate a UI color palette for the theme: "${promptText}". Return 5 hex color codes, each with a label from this set: Primary, Secondary, Accent, Background, and Text. Respond in JSON format like:
[
  { "label": "Primary", "hex": "#FF5733" },
  { "label": "Secondary", "hex": "#33FF57" },
  ...
]`
  : `Generate a visually appealing UI color palette with 5 colors. Label them as Primary, Secondary, Accent, Background, and Text. Respond in JSON format like:
[
  { "label": "Primary", "hex": "#FF5733" },
  { "label": "Secondary", "hex": "#33FF57" },
  ...
]`;


  const body = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) throw new Error("Empty response");

    const hexCodes = text.match(/#([0-9a-fA-F]{6})/g);
    if (!hexCodes || hexCodes.length < 5) throw new Error("Not enough valid hex codes");

    return hexCodes.slice(0, 5);
  } catch (err) {
    console.error("Gemini API error:", err);
    return null;
  }
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updatePaletteDisplay(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    const hexValue = box.querySelector(".hex-value");

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}

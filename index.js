document.getElementById("first-screen").addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    event.target.value = "";
  }
  if (event.target.tagName === "BUTTON") {
    const password = document.getElementById("password").value;
    if (password === "cuteZahra01") {
      document.getElementById("first-screen").classList.remove("flex");
      document.getElementById("first-screen").classList.add("hidden");
      document.getElementById("second-screen").classList.remove("hidden");
      document
        .getElementById("second-screen")
        .classList.add(
          "flex",
          "justify-center",
          "items-center",
          "min-h-screen"
        );
    } else alert("input the correct password");
  }
});

document.getElementById("second-screen").addEventListener("click", (event) => {
  const inputString = document.getElementById("text-area").value;
  let outputString;
  if (event.target.tagName === "BUTTON") {
    if (event.target.innerText === "Encrypt") {
      outputString = encrypt(inputString);
    }
    if (event.target.innerText === "Decrypt") {
      outputString = decrypt(inputString);
    }
    document.getElementById("output").innerHTML = `
    <h2 class="text-xl font-medium">Here is your ${event.target.innerText}ed string </h2>
    <p class="text-lg text-blue-500 font-medium">${outputString}</p>
    `;
  }
});

function loadimage() {
  // Fetch a new image
  fetch("https://picsum.photos/400/300")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Image fetched:", response.url);
      document.getElementById("image").src = response.url;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  // Fetch a new greeting
  fetch("/api/greeting")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch greeting");
      }
      return response.json();
    })
    .then((data) => {
      document.querySelector("h1").textContent = data.greeting;
    })
    .catch((error) => {
      console.error("Error fetching greeting:", error);
    });
}

// Call it once on page load
loadimage();

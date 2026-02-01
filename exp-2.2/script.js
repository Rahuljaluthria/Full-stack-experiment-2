function filterProducts() {
  const filter = document.getElementById("filter").value;
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (filter === "all") {
      card.style.display = "block";
    } else if (card.classList.contains(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

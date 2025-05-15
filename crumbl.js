document.addEventListener("DOMContentLoaded", () => {
  // Function to set up scrolling for a section
  function setupScroll(trackId, leftArrowId, rightArrowId) {
    const track = document.getElementById(trackId);
    const leftArrow = document.getElementById(leftArrowId);
    const rightArrow = document.getElementById(rightArrowId);

    const scrollAmount = 320; // Adjust to match your .cookie-item width + margin

    if (track && leftArrow && rightArrow) {
      leftArrow.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });

      rightArrow.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    } else {
      console.warn(`Missing element(s):`, { trackId, leftArrowId, rightArrowId });
    }
  }

  // Setup scroll for different carousels (ensure IDs match your HTML exactly)
  setupScroll("cookie-track-week", "arrow-left-week", "arrow-right-week");
  setupScroll("cookie-track-other", "arrow-left-other", "arrow-right-other");
  setupScroll("cookie-track-menu", "arrow-left-menu", "arrow-right-menu");
});
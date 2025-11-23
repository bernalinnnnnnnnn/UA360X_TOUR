// kuula-listener.js
// This file listens for Kuula's internal scene changes via postMessage API

window.addEventListener("message", (event) => {
    if (!event.data) return;

    const data = event.data;

    // Kuula sends messages like:
    // { type: "sceneChange", postId: "...", collectionId: "7H5CQ" }
    // { type: "openPost", postId: "...", collectionId: "7Hhr1" }

    // Check if Kuula provided a collectionId
    if (data.collectionId) {
        const tourCode = data.collectionId;

        console.log("Detected Kuula scene change → New tour:", tourCode);

        // If this helper exists globally, update the maps
        if (typeof updateOverlayImages === "function") {
            updateOverlayImages(tourCode);
        }
    }
});

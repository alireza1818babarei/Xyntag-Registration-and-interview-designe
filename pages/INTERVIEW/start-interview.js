document.addEventListener("DOMContentLoaded", () => {
  const accordionButtons = Array.from(
    document.querySelectorAll(".candidate-accordion[aria-controls]")
  );

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;

      if (!panel) return;

      const willOpen = button.getAttribute("aria-expanded") !== "true";

      accordionButtons.forEach((otherButton) => {
        const otherPanelId = otherButton.getAttribute("aria-controls");
        const otherPanel = otherPanelId
          ? document.getElementById(otherPanelId)
          : null;

        otherButton.setAttribute("aria-expanded", "false");
        if (otherPanel) otherPanel.hidden = true;
      });

      button.setAttribute("aria-expanded", String(willOpen));
      panel.hidden = !willOpen;
    });
  });
});

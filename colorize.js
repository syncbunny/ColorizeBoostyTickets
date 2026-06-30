const colorize = () => {
  console.log("colorize");
  const ticketContainerElement = document.querySelector("#__next > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(3) > div");
  if (!ticketContainerElement) {
    console.log("no ticketContainer element");
    return;
  }

  const ticketElements = ticketContainerElement.querySelectorAll(":scope > div");
  ticketElements.forEach((ticketEl) => {
    console.log("process ticket?");
    const statusEl = ticketEl.querySelector("div > div > span");
    if (statusEl) {
      const statusText = statusEl.innerText;
      if (statusText == "受付前") {
        statusEl.style.color = "#FFFF00";
        statusEl.style.borderColor = "#FFFF00";
      }
    } else {
      console.log("status is null.");
    }
  });
}

// DOMが構築されていないため？ 少し待つ
setTimeout(colorize, 2000);

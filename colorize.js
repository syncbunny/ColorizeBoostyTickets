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

console.log("Extention start!");

// Observe実行
const observerCallback = (mutationList, observer) => {
  // console.log(window.location.href);
  // const location = window.location.href;
  if (location.match(/^https:\/\/ticket.boosty.app\/group\//)) {
    // ここはウェイトを入れなくても問題ない
    //setTimeout(colorize, 1000);
    colorize();
  }
}

const observeEl = document.querySelector("#__next");
const observer = new MutationObserver(observerCallback);
observer.observe(observeEl, { childList: true } );

// DOMが構築されていないため？ 少し待つ
setTimeout(colorize, 2000);
//colorize();

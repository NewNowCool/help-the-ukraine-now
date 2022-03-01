function init() {
  if (window.HELP_THE_UKRAINE) return;

  window.HELP_THE_UKRAINE = true;

  const titleContent =
    window.HELP_THE_UKRAINE_TITLE ||
    "Россияне: Ваше правительство лжет вам об Украине. Убивают невинных людей и детей!";

  const textContent =
    window.HELP_THE_UKRAINE_TEXT ||
    "Пожалуйста, найдите способ узнать правду от семьи, друзей или из новостей за пределами России! Восстание!";

  const styles = document.createElement("style");

  styles.innerHTML = `
.help-the-ukraine-now {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  display: flex;
  padding: 24px;
}

.help-the-ukraine-now__bg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.8);
}

.help-the-ukraine-now__dialog {
  position: relative;
  margin: auto;
  background: #fff;
  max-width: 470px;
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  box-sizing: border-box;
}

.help-the-ukraine-now__title {
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  font-family: Helvetica, sans-serif;
}

.help-the-ukraine-now__text {
  margin: 1em 0 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  font-family: Helvetica, sans-serif;
}
`;

  const container = document.createElement("div");
  const bg = document.createElement("div");
  const dialog = document.createElement("div");
  const title = document.createElement("h1");
  const text = document.createElement("p");

  container.classList.add("help-the-ukraine-now");
  bg.classList.add("help-the-ukraine-now__bg");
  dialog.classList.add("help-the-ukraine-now__dialog");
  title.classList.add("help-the-ukraine-now__title");
  text.classList.add("help-the-ukraine-now__text");

  container.append(bg, dialog);
  dialog.append(title, text);

  title.innerText = titleContent;
  text.innerText = textContent;

  document.body.append(styles);
  document.body.append(container);

  const clickListener = bg.addEventListener("click", function () {
    document.removeEventListener("keydown", keyListener);
    bg.removeEventListener("click", clickListener);
    container.remove();
    styles.remove();
  });

  const keyListener = document.addEventListener("keydown", function (event) {
    if (!["Escape", "Enter"].includes(event.key)) return;

    document.removeEventListener("keydown", keyListener);
    bg.removeEventListener("click", clickListener);
    container.remove();
    styles.remove();
  });
}

init();

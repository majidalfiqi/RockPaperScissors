gameResult = location.search.substring(1);

result = document.querySelector(".result");
result.textContent = gameResult;
gameResult === "won"
  ? (result.style.color = getComputedStyle(document.documentElement).getPropertyValue("--clr-win"))
  : (result.style.color = getComputedStyle(document.documentElement).getPropertyValue("--clr-lose"));

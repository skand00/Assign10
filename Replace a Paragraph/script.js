window.onload = function() {
  const oldPara = document.querySelector('p');
  if (oldPara) {
    const newPara = document.createElement('p');
    newPara.textContent = "This paragraph was replaced!";
    oldPara.parentNode.replaceChild(newPara, oldPara);
  }
};

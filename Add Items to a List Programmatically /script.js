window.onload = function() {
  const ul = document.querySelector('ul');
  const items = ["Item A", "Item B", "Item C"];
  items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  });
};

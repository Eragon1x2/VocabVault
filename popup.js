const input = document.querySelector('#input');
const sumbit = document.querySelector('#myButton');
const myList = document.querySelector('#list');

let list = localStorage.getItem('items') !== null ? JSON.parse(localStorage.getItem('items')) : [];
let value = '';
function renderList() {
  // Очищаем текущий список
  myList.innerHTML = '';

  // Создаем и добавляем новые элементы в список
list.forEach(itemText => {
      const newItem = document.createElement('li');
      const deleteItemBth = document.createElement('button');
      deleteItemBth.textContent = 'Delete word';
      deleteItemBth.onclick = () => deleteItem(itemText.id);
      newItem.textContent = itemText.text;
      newItem.id = itemText.id;
      newItem.appendChild(deleteItemBth);
      myList.appendChild(newItem);
  });
}
function deleteItem(id) {
  list = list.filter(i => i.id !== id);
  renderList()
  localStorage.setItem('items', JSON.stringify(list));
  
}
function addItem() {
  const newItemText = value.trim();
  let id = Math.floor(Math.random() * 1000000000);
        if (newItemText) {
            list.push({id: id, text: newItemText});  // Добавляем новый элемент в массив
            localStorage.setItem('items', JSON.stringify(list));  // Сохраняем массив в localStorage
            input.value = '';  // Очищаем поле ввода
            renderList();  // Перерисовываем список
        } else {
            alert('Введите текст элемента');
        }
}
input.addEventListener('change', (e) => {
  value = e.currentTarget.value;
})

sumbit.addEventListener('click', addItem)
window.onload = renderList;
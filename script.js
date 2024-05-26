const items = [];
const add = () => {
  if (arr.value == "") {
    alert("Haba, no be say you too dey drink garri o way make you half blind ");
  } else {
    items.push(arr.value);
    console.log(items);
    arr.value = "";
    showItems();
    // disp.innerHTML = "";
    // for (i = 0; i < items.length; i++) {
    //   disp.innerHTML += `<p class="border p-2 rounded-pill my-3"> ${i + 1}.${
    //     items[i]
    //   }</p>`;
    // }
  }
};
const deleteFirst = () => {
  if (items.length > 0) {
    items.shift();
    showItems();
    console.log(items);
  } else {
    alert("Guy, guy, you fuck up o!");
  }
};

const addFirst = () => {
  if (arr.value == "") {
    alert("invalid");
  } else {
    items.unshift(arr.value);
    showItems();
    console.log(items);
  }
};

const deleteLast = () => {
  items.pop();
  showItems();
};

const deleteAll = () => {
  let confirmation = confirm("Are you sure you want to delete");
  if (confirmation) {
    items.splice(0, items.length);
    showItems();
  } else {
    showItems();
  }
};

const deleteAny = () => {
  let numberToDelete = prompt("Which number do you want to delete?");
  items.splice(Number(numberToDelete) - 1, 1);
  showItems();
};

const edit = () => {
  const noToDelete = prompt("Which number will you love to edit?");
  const newValueI = prompt("Enter a new value:");
  if (Number(noToDelete) <= items.length) {
    items.splice(Number(noToDelete) - 1, 1, newValueI);
    showItems();
  }else{
    alert("Invalid number")
  }

};

const editIndex = 1;

// const editItems = (idx) => {
//   console.log(idx);
//   const response = prompt("what do you want to replace it with")
//   console.log(response);
//   if (items.length > 0){
//     console.log(items);
//     items.splice(idx,1,response)
//     console.log(items);
//     showItems();
//     arr.value = ""

//   }else{('look, what do you want?')}

// }

const editItems = (index) => {
  items.splice(index, 1, arr.value);
  showItems();
  arr.value = "";
};

const deleteItems = (index) => {
  items.splice(index, 1);
  showItems();
};

const showItems = () => {
  disp.innerHTML = "";
  for (i = 0; i < items.length; i++) {
    disp.innerHTML += `<p class="border p-2 rounded-pill my-3">${i + 1}. ${
      items[i]
    }</p>
    <button class="btn btn-warning btn-sm" onclick="editItems(${i})">Edit</button>
    <button class="btn btn-danger" onclick="deleteItems(${i})">Delete</button>
    `;
  }
};

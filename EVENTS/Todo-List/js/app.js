let feedbackAlert = document.querySelector('.feedback');
let addItem = document.getElementById('itemForm');
let itemValue;
let itemList = document.querySelector('.item-list');
let addedItem;
let clearBtn = document.getElementById('clear-list');

addItem.addEventListener('submit', () => {
    itemValue = document.getElementById('itemInput').value;
    if(itemValue === ""){
        console.log(itemValue)
        feedbackAlert.classList.add('showItem');
        feedbackAlert.innerText = 'Enter Valid Value';
        setTimeout(() => {
            feedbackAlert.classList.remove('showItem');
        }, 1000);
    }else{
        addListItem();
        addedItem = document.querySelectorAll('.item');
        targetedItem();
    }
});

clearBtn.addEventListener('click', () => {
    itemList.innerHTML = '';
});

function addListItem() {
    itemList.innerHTML += `<div class="item my-3">
        <h5 class="item-name text-capitalize">${itemValue}</h5>
        <div class="item-icons">
        <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
        <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
         <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
        </div>
       </div>`
}

function targetedItem(){
    addedItem.forEach((i) => {

        let completeIcon = i.querySelector('.item-icons').querySelector('.complete-item');
        completeIcon.addEventListener('click', () => {
            completeIcon.classList.toggle('visibility');
        });

        let editIcon = i.querySelector('.item-icons').querySelector('.edit-item');
        editIcon.addEventListener('click', () => {
            document.getElementById('itemInput').value = i.querySelector('.item-name').innerText;
            console.log(i);
            i.remove();
        });

        let deleteIcon = i.querySelector('.item-icons').querySelector('.delete-item');
        deleteIcon.addEventListener('click', () => {
            i.remove();
        });
    });
}
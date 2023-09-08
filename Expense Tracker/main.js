var form = document.getElementById("addForm");
var items = document.getElementById("items");
var key=0;
form.addEventListener('submit',addItem);
items.addEventListener('click',removeItem);

function addItem(e){
e.preventDefault();
key++;
var newItem = document.getElementById("item").value;
var category = document.getElementById("category").value;
var amount = document.getElementById("quantity").value;

var myobj = {
    newItem : newItem,
    category: category,
    amount: amount
};



var li =document.createElement("li");
li.className="list-group-item";
li.id=key;
li.appendChild(document.createTextNode(category +"-"+newItem+"-"+amount  ));

var myobjSerialized = JSON.stringify(myobj);
localStorage.setItem(li.id,myobjSerialized);

var deletebtn = document.createElement("button");
deletebtn.className="btn btn-danger btn-sm btn-space delete";
deletebtn.appendChild(document.createTextNode("Del"));

var editBtn = document.createElement("button");
editBtn.className="btn btn-primary btn-sm btn-space  edit ";
editBtn.appendChild(document.createTextNode("Edit"));

li.appendChild(deletebtn);
li.appendChild(editBtn);
items.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains("delete")){
        var li = e.target.parentElement;
        items.removeChild(li);
        localStorage.removeItem(li.id);

    }
    if(e.target.classList.contains("edit")){
        var li = e.target.parentElement;
        let itemList = li.firstChild.textContent.split("-");

        document.getElementById("item").value = itemList[1];
        document.getElementById("category").value = itemList[0];
        document.getElementById("quantity").value= itemList[2];

        items.removeChild(li);
        localStorage.removeItem(li.id);
    }
    
}
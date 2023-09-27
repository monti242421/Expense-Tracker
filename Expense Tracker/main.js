var form = document.getElementById("addForm");
var items = document.getElementById("items");
var editId=0;
var editEle;
var edit=false;
form.addEventListener('submit',addItem);

items.addEventListener('click',removeItem);

function addItem(e){
        e.preventDefault();
        var newItem = document.getElementById("item").value;
        var category = document.getElementById("category").value;
        var amount = document.getElementById("quantity").value;
       


        var myobj = {
            newItem : newItem,
            category: category,
            amount: amount
        };

        if(edit==true){
            edit=false;
            console.log(editId);
            axios.put("http://localhost:4000/addexpense/"+editId,myobj)
                .then((res)=>{
                    editEle.firstChild.textContent= category +"-"+newItem+"-"+amount;
                    console.log(editEle.firstChild);

                }).catch(err=>console.log(err));
            
            return;
        }



            var li =document.createElement("li");
            li.className="list-group-item";
            li.appendChild(document.createTextNode(category +"-"+newItem+"-"+amount   ));
            axios.post("http://localhost:4000/addexpense",myobj)
            .then((res)=>{
                li.id = res.data.newUserDetail.id;
                //console.log(li.id);
                var deletebtn = document.createElement("button");
                deletebtn.className="btn btn-danger btn-sm btn-space delete";
                deletebtn.appendChild(document.createTextNode("Del"));

                var editBtn = document.createElement("button");
                editBtn.className="btn btn-primary btn-sm btn-space  edit ";
                editBtn.appendChild(document.createTextNode("Edit"));

                li.appendChild(deletebtn);
                li.appendChild(editBtn);
                items.appendChild(li);
            } )
            .catch(err =>console.log(err));

            
}

function showDataToScreen(data){
    var category = data.CATEGORY;
    var newItem = data.NEWITEM;
    var amount = data.AMOUNT;
    var li =document.createElement("li");
    li.id = data.id;
    li.className="list-group-item";
    li.appendChild(document.createTextNode(category +"-"+newItem+"-"+amount   ));
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
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:4000/addexpense")
    .then((res)=>{
        //console.log(res.data)
        for( var i=0;i<res.data.length;i++){
            showDataToScreen(res.data[i]);
        }
    
    }).catch(err=>console.log(err));


})

function removeItem(e){
    if(e.target.classList.contains("delete")){
        var li = e.target.parentElement;
        //console.log(li.id);
        items.removeChild(li);
        axios.delete("http://localhost:4000/addexpense/"+li.id)
        .then((res)=>{

        }).catch(err=>console.log(err));

    }
    if(e.target.classList.contains("edit")){
        var li = e.target.parentElement;
        let itemList = li.firstChild.textContent.split("-");

        document.getElementById("category").value = itemList[0];
        document.getElementById("item").value = itemList[1];
        document.getElementById("quantity").value= itemList[2];
       edit=true;
       editEle=li;
       editId = li.id;

    }
    
}
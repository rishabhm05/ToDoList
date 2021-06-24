const inputitem = document.querySelector(".input-text");
const addbtn = document.querySelector(".add-item");
const delbtn = document.querySelector(".deleteitem");
const items = document.querySelector(".todo-items");
const footer = document.querySelector(".footer");
const edit = document.querySelector(".edit-item");
/*
inputitem.onkeyup =() =>{
    let uservalue = inputitem.value;
    if(uservalue.trim()!=""){
        addbtn.style.display = "block";
        edit.style.display = "none"
        addbtn.classList.add("active");
    }
    else{
        addbtn.classList.remove("active");
    }
    

}
*/
showTask();
addbtn.onclick = () =>{
    let uservalue = inputitem.value;
    if(uservalue.trim()!=0){
   let getLocalStorageData = localStorage.getItem("todoitems");
    if(getLocalStorageData==null){
        listArray = [];
    }
    else{
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(uservalue);
    localStorage.setItem("todoitems",JSON.stringify(listArray));
}

   showTask()
   addbtn.classList.remove("active");
}
// to show items on to do page
function showTask(){
   let getLocalStorageData = localStorage.getItem("todoitems")
    if(getLocalStorageData==null){
        listArray = [];
    }
    else{
        listArray = JSON.parse(getLocalStorageData);
    }
    let pendingtask = document.querySelector(".remainingtask");
    pendingtask.textContent = listArray.length;
    let html = "";
    listArray.forEach((element,index) => {
        html +=`<li>${element}
      
        <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
        <span class="icon-edit" onclick="editTask(${index})"><i class="fas fa-edit"></i></span></li>`
    });
    items.innerHTML = html;
    inputitem.value = '';
  
}
// to delete items
function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("todoitems");
    listArray =JSON.parse(getLocalStorageData);
    listArray.splice(index,1);
    localStorage.setItem("todoitems",JSON.stringify(listArray));
    showTask();
}
delbtn.onclick = () =>{
    listArray =[] ;
    localStorage.setItem("todoitems",JSON.stringify(listArray));
    showTask();

}
//to edit the task
function editTask(index){
   
    let getLocalStorageData =localStorage.getItem("todoitems");
    listArray = JSON.parse(getLocalStorageData);
    let savedindex = document.getElementById("saveindex");
    savedindex.value = index;
    inputitem.value = listArray[index];
    
}
edit.onclick = () =>{
    let savedindex = document.getElementById("saveindex").value;
    let uservalue = inputitem.value;
    let getLocalStorageData =localStorage.getItem("todoitems");
    listArray = JSON.parse(getLocalStorageData);
    if(listArray.length>=1&&uservalue.trim()!=0){
    listArray[savedindex] = inputitem.value;
    localStorage.setItem("todoitems",JSON.stringify(listArray))
    showTask();
    }
}
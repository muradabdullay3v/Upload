let drop = document.querySelector(".drop_element");
let table = document.querySelector(".table");
let upload = document.querySelector(".fa-arrow-up-from-bracket");
let input = document.querySelector("input");
let remove = document.querySelector(".button");

if (document.getElementById("tbody").innerText.length == 0) {
    document.getElementById("table").style.visibility = "hidden";
    document.getElementById("removeall").style.visibility = "hidden";
}

var real_counter = 1;

function DeleteRow(button) {
    var p=button.parentNode.parentNode;
        p.parentNode.removeChild(p);
        if (document.getElementById("tbody").innerText.length == 0) {
            document.getElementById("table").style.visibility = "hidden";
        document.getElementById("removeall").style.visibility = "hidden";
        }
        real_counter = 0;
        let rows = document.querySelectorAll(".rowa");
        [...rows].forEach(row => {
            real_counter++;
            row.innerText = real_counter;
        });
        counter--;
   }

   function DeleteAll() {
    document.querySelector("#tbody").innerHTML = "";
    if (document.getElementById("tbody").innerText.length == 0) {
        document.getElementById("table").style.visibility = "hidden";
        document.getElementById("removeall").style.visibility = "hidden";
    }
    counter = 1;
    real_counter = 1;
   }

upload.onclick=()=>input.click();

input.onchange = function(ev) {
    uploadImage(ev.target.files);
}

drop.ondragover = ev => ev.preventDefault();
var counter = 1;
drop.ondrop = function(ev) {
    ev.preventDefault();
    uploadImage(ev.dataTransfer.files);
}
function uploadImage(files) {
    [...files].forEach(file=>{
        let reader = new FileReader();
        reader.onloadend = function(ev) {
            let tr = `<tr>
                        <th scope="row" class = "rowa">${counter++}</th>
                        <td>
                            <img src="${ev.target.result}" alt="image" width="200px" draggable = "false">
                        </td>
                        <td>
                             ${file.name}
                        </td>
                        <td>
                            ${file.size}
                        </td>
                        <td>
                            <button class = "button" onclick="DeleteRow(this)"><i class="fa-solid fa-xmark"></i></button>
                        </td>
                    </tr>`;
                    table.lastElementChild.innerHTML += tr;
                    document.getElementById("table").style.visibility = "visible";
                    document.getElementById("removeall").style.visibility = "visible";
        }
        reader.readAsDataURL(file);
    });
}

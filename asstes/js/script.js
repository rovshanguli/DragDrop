
//Forms
// let form = document.getElementById("form");
// let inputPass = document.querySelector(".email");
// let inputEmail = document.querySelector(".email");
// let errorMsj = document.getElementById("error-mesage");


/* inputEmail.addEventListener("keyup", function name(params) {
    if (inputEmail.value.trim() == "") {
        errorMsj.classList.remove("d-none");
        this.parentNode.lastElementChild.classList.add("disabled");
    } else {
        errorMsj.classList.add("d-none");
        this.parentNode.lastElementChild.classList.remove("disabled");
    }
}) */


/* form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (inputEmail.value.trim() == "") {
        errorMsj.classList.remove("d-none");
    } else {
        errorMsj.classList.add("d-none");
    }
}) */

/* let cities = document.getElementById("cities");

cities.addEventListener("change",function (e) {
    console.log(this.value);
}) */



//Drag&Drop

let dragElems = document.querySelectorAll(".item");
let dropArea = document.querySelector("#drop-area");



/* dragElem.ondrag = (e) => {
    console.log("on drag");
    e.target.style.backgroundColor = "red";
} */

/* dragElem.ondragend = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "teal";
    
} */



/* dragElems.forEach(elem => {
    elem.ondragstart = (e) => {
    console.log(e.dataTransfer);
    e.dataTransfer.setData("id",e.target.id);
}
});

dropArea.ondragover = (e) => {
    e.preventDefault();
}

dropArea.ondrop = (e) => {
    let id = e.dataTransfer.getData("id");
    e.target.append(document.getElementById(id));
} */





let upload = document.getElementById("upload");
let table = document.getElementById("table");
let dropPlace = document.querySelector(".upload-area");

upload.addEventListener("click", function () {
    this.nextElementSibling.click();
})

upload.nextElementSibling.onchange = function (e) {
    uploadImages(e.target.files);
}

dropPlace.ondragover = (e) => {
    e.preventDefault();
}

dropPlace.ondrop = (e) => {
    e.preventDefault();
    uploadImages(e.dataTransfer.files);

}

function uploadImages(files) {
    for (const file of files) {
        let reader = new FileReader();
        reader.onloadend = function (ev) {
            console.log(ev)
            table.lastElementChild.innerHTML += `<tr>
            <th><img src="${ev.target.result}" style="height:100px" alt=""></th>
            <td>${file.name}</td>
            <td>${file.type}</td>
            <td>${file.size / 1024} kb</td>
          </tr>`
        }
        reader.readAsDataURL(file);
    }
}
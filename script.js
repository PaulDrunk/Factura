var counter = 0;
function myFunction() {
    var table = document.getElementById("InvoiceTable");
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    counter++;
    cell1.innerHTML = counter;
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "";
    cell4.innerHTML = "NEW CELL4";
    cell5.innerHTML = "NEW CELL5";
    cell6.innerHTML = "NEW CELL6";
    cell7.innerHTML = "NEW CELL7";
    cell8.innerHTML = "NEW CELL8";
    cell3.style.borderLeft = "1px white";
    cell2.style.borderRight = "1px white";
}

const inpdenproduse = document.getElementById("denprodus");
const inpum = document.getElementById("um");
const inpcantitate = document.getElementById("cantitate");
const inppretunitarfaratva = document.getElementById("pretunitfaratva");
const insertbtn = document.getElementById("btninsert");
insertbtn.onclick = function (){
    const denproduse = inpdenproduse.value;
    const um = inpum.value;
    const cantitate = inpcantitate.value;
    const pretunitarfaratva = inppretunitarfaratva.value;

    console.log(denproduse);
    console.log(um);
    console.log(cantitate);
    console.log(pretunitarfaratva);

    if(denproduse && um && cantitate && pretunitarfaratva){
        localStorage.setItem(denproduse, um, cantitate, pretunitarfaratva);
        location.reload();
    }
}
function insertFunction() {
    var counter = 0;
    const inpdenproduse = document.getElementById("denprodus");
    const inpum = document.getElementById("um");
    const inpcantitate = document.getElementById("cantitate");
    const inppretunitarfaratva = document.getElementById("pretunitfaratva");
    const insertbtn = document.getElementById("btninsert");
    insertbtn.onclick = function () {
        const denproduse = inpdenproduse.value;
        const um = inpum.value;
        const cantitate = inpcantitate.value;
        const pretunitarfaratva = inppretunitarfaratva.value;

        console.log(denproduse);
        console.log(um);
        console.log(cantitate);
        console.log(pretunitarfaratva);

        if (denproduse && um && cantitate && pretunitarfaratva) {
            localStorage.setItem(denproduse, um, cantitate, pretunitarfaratva);
            location.reload();
        }
    }
}
function eraseRow()
{
    var table = document.getElementById("InvoiceTable");
    var rowCount = table.rows.length;
    table.deleteRow(rowCount - 14);
}
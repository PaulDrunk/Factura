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
}
function localstorage(){
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
function insertFunction() {
    counter++;
    var table = document.getElementById("InvoiceTable");
    var row = table.insertRow(counter + 2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell3.style.borderLeft = "1px white";
    cell2.style.borderRight = "1px white";
    cell1.innerHTML = counter + 1;

    var inpdenproduse = document.getElementById("denprodus").value;
    cell2.innerHTML = inpdenproduse;

    cell3.innerHTML = "";
    var inpum = document.getElementById("um").value;
    cell4.innerHTML = inpum;

    var inpcantitate = document.getElementById("cantitate").value;
    cell5.innerHTML = inpcantitate;

    var inppretunitarfaratva = document.getElementById("pretunitfaratva").value;
    cell6.innerHTML = inppretunitarfaratva;

    cell7.innerHTML = inpcantitate * inppretunitarfaratva;

    var valoaretvalei =  0.1 * inpcantitate * inppretunitarfaratva;
    cell8.innerHTML = valoaretvalei;
}
function eraseRow()
{
    if(counter == 0){
        return;
    }
    counter--;
    var table = document.getElementById("InvoiceTable");
    var rowCount = table.rows.length;
    table.deleteRow(rowCount - 14);
}
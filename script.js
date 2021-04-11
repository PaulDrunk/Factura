function insertFunction(){
    var table = document.getElementById("InvoiceTable");
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "";
    cell4.innerHTML = "NEW CELL4";
    cell5.innerHTML = "NEW CELL5";
    cell6.innerHTML = "NEW CELL6";
    cell7.innerHTML = "NEW CELL7";
}


function eraseRow()
{
    var table = document.getElementById("InvoiceTable");
    var rowCount = table.rows.length;
    table.deleteRow(rowCount -14);

}
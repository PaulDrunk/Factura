var counter = 0;
var valoare=0;
valoareTVA=0;
var valoareTotal=0;

function localstorage(){
    const inpnrcrt = document.getElementById("nr-crt");
    const inpdenproduse = document.getElementById("denprodus");
    const inpum = document.getElementById("um");
    const inpcantitate = document.getElementById("cantitate");
    const inppretunitarfaratva = document.getElementById("pretunitfaratva");
    const inpvaloarelei = document.getElementById("valoarelei");
    const inpvaloaretvalei = document.getElementById("valoareatvalei");
    const insertbtn = document.getElementById("btninsert");
    insertbtn.onclick = function () {
        const nrcrt = inpnrcrt.value;
        const denproduse = inpdenproduse.value;
        const um = inpum.value;
        const cantitate = inpcantitate.value;
        const pretunitarfaratva = inppretunitarfaratva.value;
        const valoarelei = inpvaloarelei.value;
        const valoaretvalei = inpvaloaretvalei.value;
        console.log(nrcrt);
        console.log(denproduse);
        console.log(um);
        console.log(cantitate);
        console.log(pretunitarfaratva);
        // console.log(valoarelei);
        // console.log(valoaretvalei);
        if (nrcrt && denproduse && um && cantitate && pretunitarfaratva && valoarelei && valoaretvalei) {
            localStorage.setItem("Nr. Crt.", nrcrt);
            localStorage.setItem("Denumire produs si servicii", denproduse);
            localStorage.setItem("U.M.", um);
            localStorage.setItem("Cantitate", cantitate);
            localStorage.setItem("Pret Unitar fara TVA", pretunitarfaratva);
            localStorage.setItem("Valoare Lei", valoarelei);
            localStorage.setItem("Valoare TVA Lei", valoaretvalei);
            location.reload();
        }
    }
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("furnizor").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

function validatenumber(){
    var numar = document.getElementById('numar');
    numar.addEventListener('input', function (e){
        var pattern = /^[\d]{6,8}$/;
        var currentValue = e.target.value;
        var valid = pattern.test(currentValue);
        if(valid){
            console.log("VALID");
        }
        else {
            console.log("INVALID");
        }
    })
}

function validatedata(){
    var data = document.getElementById('data');
    data.addEventListener('input', function (e){
        var pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        var currentValue = e.target.value;
        var valid = pattern.test(currentValue);
        if(valid){
            console.log("VALID");
        }
        else {
            console.log("INVALID");
        }
    })
}

function validateaviz(){
    var numaraviz = document.getElementById('numaraviz');
    numaraviz.addEventListener('input', function (e){
        var pattern = /^[\d]{6,8}$/;
        var currentValue = e.target.value;
        var valid = pattern.test(currentValue);
        if(valid){
            console.log("VALID");
        }
        else {
            console.log("INVALID");
        }
    })
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

    cell1.innerHTML = counter;
//Denumirea produselor sau a serviciilor
    var inpdenproduse = document.getElementById("denprodus").value;
    cell2.innerHTML = inpdenproduse;
//UM
    cell3.innerHTML = "";
    var inpum = document.getElementById("um").value;
    cell4.innerHTML = inpum;
//Cantitate
    var inpcantitate = parseInt(document.getElementById("cantitate").value);
    if(isNaN(inpcantitate)){
        inpcantitate = 0;
    }
    else {
        cell5.innerHTML = inpcantitate;
    }
//Pret unitar
    var inppretunitarfaratva = parseInt(document.getElementById("pretunitfaratva").value);
    if(isNaN(inppretunitarfaratva)){
        inppretunitarfaratva = 0;
    }
    else {
        cell6.innerHTML = inppretunitarfaratva;
    }

    cell7.innerHTML = inpcantitate * inppretunitarfaratva;

//Pret cu tva
    var valoaretvalei =  0.1 * inpcantitate * inppretunitarfaratva;

    cell8.innerHTML = valoaretvalei;
    valoareTVA=valoareTVA+valoaretvalei;
    var adunare= inpcantitate * inppretunitarfaratva;

    valoare=valoare+parseInt(adunare);
    valoareTotal=valoareTotal+valoare+valoareTVA;

    console.log(valoare);

    document.getElementById("afisare2").innerHTML = valoareTVA;

    document.getElementById("afisare1").innerHTML = valoare;
    document.getElementById("total").innerHTML = parseInt(valoareTotal);

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

function getPDF(){

    var HTMLWidth = $(".div_pdf").width();
    var HTMLHeight = $(".div_pdf").height();
    var top_left_margin = 15;
    var PDFWidth = HTMLWidth+(top_left_margin*2);
    var PDFHeight = (PDFWidth*1.5)+(top_left_margin*2);
    var canvas_image_width = HTMLWidth;
    var canvas_image_height = HTMLHeight;

    var totalPDFPages = Math.ceil(HTMLHeight/PDFHeight)-1;


    html2canvas($(".div_pdf")[0],{allowTaint:true}).then(function(canvas) {
        canvas.getContext('2d');

        console.log(canvas.height+"  "+canvas.width);


        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt',  [PDFWidth, PDFHeight]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);


        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDFWidth, PDFHeight);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDFHeight*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }

        pdf.save("Factura.pdf");
    });
}
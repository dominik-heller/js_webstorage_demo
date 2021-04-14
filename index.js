console.log("running");
load();

function store() {
    // Check browser support
    if (typeof (Storage) !== "undefined") {
        var x = document.getElementsByClassName("text-data");
        var l = x.length;
        for (var i = 1; i < l + 1; i++) {
            localStorage.setItem("data" + i, document.getElementById("data" + i).value)
        }
        var x = document.getElementsByClassName("radio-data");
        var l = x.length;
        for (var i = 1; i < l + 1; i++) {
            if (document.getElementById("radio-data" + i).checked) {
                localStorage.setItem("radio-data" + i, "yes");
            } else {
                localStorage.setItem("radio-data" + i, "no");
            }
        }
        var e = document.getElementById("code");
        var val = e.options[e.selectedIndex].value;
        localStorage.setItem("code", val);
        var x = document.getElementsByClassName("date");
        var l = x.length;
        for (var i = 1; i < l + 1; i++) {
            localStorage.setItem("date" + i, document.getElementById("date" + i).value);
        }
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
}

function load() {
    // Check browser support
    if (typeof (Storage) !== "undefined") {
        // Retrieve
        var x = document.getElementsByClassName("text-data");
        var l = x.length;
        for (var i = 1; i < l + 1; i++) {
            document.getElementById("data" + i).value = localStorage.getItem("data" + i);
        }
        var x = document.getElementsByClassName("radio-data");
        var l = x.length;
        for (var i = 1; i < l + 1; i++) {
            if (localStorage.getItem("radio-data" + i) == "yes") {
                document.getElementById("radio-data" + i).checked = true;
            }
        }
        document.getElementById("code").value = localStorage.getItem("code");
        var x = document.getElementsByClassName("date");
        var l = x.length;
        for (var i = 1; i < l + 1; i++) {
            document.getElementById("date" + i).value = localStorage.getItem("date" + i);
        }
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
}

function submit() {
    store();
    var x = document.getElementsByClassName("text-data");
    var l = x.length;
    for (var i = 0; i < l; i++) {
        var k = x[i].value;
        if (k.length == 0) {
            alert("Vyplňte všechna pole!");
            return;
        }
    }
    var x = document.getElementsByClassName("date");
    var l = x.length;
    for (var i = 1; i < l + 1; i++) {
        if (i == 1 && (document.getElementById("date" + i).value.length == 0 || document.getElementById("date" + (i + 1)).value.length == 0)) {
            alert("Vyplňte datum!");
            return;
        } else {
            if (i == 1 && (document.getElementById("date" + i).value > document.getElementById("date" + (i + 1)).value)) {
                alert("Neplatný datum");
                return;
            } else {
                console.log("date" + i);
                document.getElementById("date" + i).style.fontWeight = 'bold';
                document.getElementById("date" + i).disabled = true;
            }
        }
    }
    var x = document.getElementsByClassName("radio-data");
    var l = x.length;
    for (var i = 1; i < l + 1; i++) {
        if (i == 1 && (document.getElementById("radio-data" + i).checked == false && document.getElementById("radio-data" + (i + 1)).checked == false)) {
            alert("Vyberte pohlaví!");
            return;
        }
        document.getElementById("radio-data" + i).disabled = true;
        if (document.getElementById("radio-data" + i).checked == true) {
            document.getElementById("label" + i).style.fontWeight = 'bold';
        }
    }
    var x = document.getElementsByClassName("text-data");
    var l = x.length;
    for (var i = 0; i < l; i++) {
        x[i].readOnly = true;
        x[i].style.fontWeight = 'bold';
    }
    document.getElementById("code").disabled = true;
    document.getElementById("button-edit").style.display = "inline";
    document.getElementById("button-submit").innerHTML = "Tisk";
    document.getElementById("button-submit").setAttribute("onclick", "javascript: window.print();");
}








function edit() {
    document.getElementById("code").disabled = false;
    document.getElementById("radio-data1").disabled = false;
    document.getElementById("radio-data2").disabled = false;
    document.getElementById("date1").disabled = false;
    document.getElementById("date2").disabled = false;
    document.getElementById("label2").style.fontWeight = 'normal';
    document.getElementById("label1").style.fontWeight = 'normal';
    document.getElementById("date1").style.fontWeight = 'normal';
    document.getElementById("date2").style.fontWeight = 'normal';
    var x = document.getElementsByClassName("text-data");
    var l = document.getElementsByClassName("text-data").length;
    for (var i = 0; i < l; i++) {
        x[i].readOnly = false;
        x[i].style.fontWeight = 'normal';
    }
    document.getElementById("button-edit").style.display = "none";
    document.getElementById("button-submit").innerHTML = "Potvrdit";
    document.getElementById("button-submit").setAttribute("onclick", "javascript: submit();")
}


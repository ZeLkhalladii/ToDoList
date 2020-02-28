function addListe() {
    var inpt = document.getElementById("input");

    if (inpt.value.length > 0) {
        var div2 = document.getElementById("div");
        var list = document.createElement("input");
        list.setAttribute("type", "checkbox");

        var paragraph = document.createElement("p");
        var litext = document.createTextNode(inpt.value);
        paragraph.appendChild(litext);
        var div = document.createElement("div");
        div.setAttribute("id", "todolist");
        div.appendChild(list);
        div.appendChild(paragraph);
        div2.appendChild(div);
        inpt.value = "";
    }
}

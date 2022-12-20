function footer_position() {
    if (window.innerHeight < document.querySelector("main").offsetHeight) {
        document.querySelector("footer").style.position = "relative";
        document.querySelector("footer").style.top = 0;
        document.querySelector("footer").style.marginTop = "25px";
    }else{
        document.querySelector("footer").style.position = "absolute";
        document.querySelector("footer").style.top = window.innerHeight + "px";
    }
}

function get_position() {
    for (var i = 0; i < frame.length; i++) {
        if (frame[i].style.display != "none") {
            return i;
        }
    }
}

function hider() {
    for (var i = 0; i < frame.length; i++) {
        frame[i].style.display = "none";
    }
}

function go_back() {
    pos = get_position() - 1;

    if (pos < 0) {
        pos = frame.length - 1;
    }

    set_dot(pos);
    hider();
    frame[pos].style.display = "block";
    footer_position();
}

function go_forward() {
    pos = get_position() + 1;

    if (pos >= frame.length) {
        pos = 0;
    }

    set_dot(pos)
    hider();
    frame[pos].style.display = "block";
    footer_position();
}

function set_dot(pos) {
    var dot = document.querySelectorAll(".dot");

    dot[get_position()].classList.remove("hover");
    dot[pos].classList.add("hover");
}

function create_dot() {
    var parent = document.querySelector("#dot-frame");

    for (var i = 0; i < frame.length; i++) {
        var dot = document.createElement("span");
        dot.classList.add("dot");

        if (i == 0) {
            dot.classList.add("hover");
        }
        
        parent.appendChild(dot);
    }
}

function search_key() {
    var key = document.querySelector("#search-input").value;

    if (key == "") {
        alert("Insert an ISO value");
    }else{
        const data_link = "./json_files/to_country.json";

        fetch(data_link)
            .then(response => response.json())
            .then((data) => {
                alert(data[key.toUpperCase()])
                document.querySelector("#search-input").value = "";
            })
    }
}

function show_chart() {
    var category = document.querySelector("#category").value;
    var region = document.querySelector("#region").value;
    var name = category + "_" + region;

    var category_name = {"abr": "Adolescent Birth Rate",
                    "eys": "Expected Years of Schooling",
                    "gdi": "Gender Development Index",
                    "le": "Life Expectancy at Birth",
                    "co2": "Carbon Dioxide Emission Per Capita",
                    "mf": "Material Footprint Per Capita"}

    document.querySelector("#line-chart-frame").src = "./html/chart/line_charts/" + name + ".html";
    document.querySelector("#line-chart-title").innerHTML = category_name[category] + "(" + category.toUpperCase() + ")";
    document.querySelector("#line-chart-region").innerHTML = region.replaceAll("_", " ");
}

var frame = document.querySelectorAll(".section-frame");

create_dot();
footer_position();
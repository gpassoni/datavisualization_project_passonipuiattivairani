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
    frame[pos].style.display = "inline";
    footer_position();
}

function go_forward() {
    pos = get_position() + 1;

    if (pos >= frame.length) {
        pos = 0;
    }

    set_dot(pos)
    hider();
    frame[pos].style.display = "inline";
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

var frame = document.querySelectorAll(".section-frame");

create_dot();
footer_position();

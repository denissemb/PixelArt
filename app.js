    /*Function to creat layout and pixels*/

    var cont = document.getElementById("container");
    createBoard(8);

    function createBoard(size) {
        cont.innerHTML = '';
        for(var i = 1; i <size+1; i++) {
            var divCont = document.createElement("div");
            divCont.setAttribute("class", "pixels row");
            for(var j = 1; j <size+1; j++) {
                var div = document.createElement("div");
                div.setAttribute("id",`${i}${j}`);
                div.setAttribute("class", "pixel color");
                div.setAttribute("onclick", `colorPixel(${i}${j});`);
                divCont.appendChild(div);
            }
            cont.appendChild(divCont);
        }
    }

    /* Function to draw evety pixel with a color selected*/
    function colorChange(color) {
        document.getElementsByClassName(color)
        document.getElementById('color').style.background = color;
    }
    function colorPixel(id) {
        document.getElementById(id).style.background = document.getElementById('color').style.background;
    }

    /* Function to reset button*/
    function resetBoard (){
        var pixels = document.getElementsByClassName("pixel");
        for(var pos = 0; pos <pixels.length; pos++){
            pixels[pos].style.background = "white";
        }
    }
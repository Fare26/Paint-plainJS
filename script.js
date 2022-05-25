var container = document.getElementById('container');
document.body.appendChild(container);
var down = false;
var radius = '50%';
var thickness = '10px';
var isPencil = false;
var isBrush = false;

container.addEventListener('mousemove',function(event){
    if(down === true) {
        var changeColor = document.getElementById('color').value;
        var pixel = document.createElement('div');
        pixel.style = `height:${isPencil ? '2px' : thickness}; width:${isPencil ? '2px' : thickness}; border-radius:${radius};  background-color:${isBrush ? '#ffffff' : changeColor}; position: absolute;`;
        pixel.style.top = event.clientY+'px';
        pixel.style.left = event.clientX+'px';
        container.appendChild(pixel);
    }
    else return;
});

container.addEventListener('mouseup',function(){
    down = false;
});

container.addEventListener('mousedown',function(){
    down = true;
});

function chooseShape(event) {
    isBrush = false;
    isPencil = false;
    var option = event.target.id;
    var solution = document.getElementsByClassName('pixel-size');
    if(option === 'circle') {
        radius = '50%';
        for(let i=0; i<solution.length; i++) {
            solution[i].children[0].removeAttribute('id');
            solution[i].children[0].id = 'circle'+`${i+1}`;
        }
    }
    else {
        radius = '0%';
        for(let i=0; i<solution.length; i++) {
            solution[i].children[0].removeAttribute('id');
            solution[i].children[0].id = 'square'+`${i+1}`;
        }
    }
}

function chooseThickness(event) {
    isBrush = false;
    isPencil = false;
    var elementId = event.target.id;
    if(elementId === 'circle1' || elementId === 'square1') thickness = '10px';
    else if(elementId === 'circle2' || elementId === 'square2') thickness = '15px';
    else thickness = '20px';
}

function pencil() {
    isPencil = true;
    isBrush = false;
}

function brush() {
    isPencil = false;
    isBrush = true;
    thickness = '17px';
}

function newPaper() {
    isBrush = false;
    isPencil = false;
    var pixels = container.querySelectorAll('div');
    for (const element of pixels) {
        element.remove();
    }
}


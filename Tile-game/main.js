
var rows= 3;
var columns = 3

var currTile;
var otherTile;//blank tile

var turns = 0;

var imgOrder = ["1","2","3","4","5","6","7","8","9"];//setting default image order

window.onload = function(){ //when the page loads do this function
    for(let r=0;r < rows; r++){ //iterate through rows
        for(let c=0; c < columns; c++){ //iterate through columns

            //<img id="0-1">
            let tile = document.createElement("img");
            tile.id  = r.toString()+"-"+c.toString();//to identify current tile it will be decribed as "row number-column number"

            tile.src = imgOrder.shift() + ".jpg"; //gets the first number from the array and adds "jpg to the end" ex:"1.jpg, 2.jpg, etc"
            
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click an image to drag
            tile.addEventListener("dragover", dragOver); //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter); //dragging image into another one
            tile.addEventListener("dragLeave", dragLeave); //drag image out of another image
            tile.addEventListener("drop", dragDrop); //drag image and release IT
            tile.addEventListener("dragend", dragEnd); //after drag drop you swap tiles
            
            
            document.getElementById("board").append(tile);//add images to board

            
        }
    }

}

function dragStart(){
    currTile = this; //this refers to the img tile being dragged
    console.log("started")
}

function dragOver(e){
    e.preventDefault()
    console.log("over")
}

function dragEnter(e){
    e.preventDefault()
    console.log("entered")
}

function dragLeave(e){
    console.log("left")
}

function dragDrop(){
   otherTile = this; //this refers to the img tile being dropped in
   console.log("dropped")
}

function dragEnd(){
    console.log("swapped")

    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;
}
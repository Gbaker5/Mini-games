
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
    
    
}

function dragOver(e){
    e.preventDefault()
    
}

function dragEnter(e){
    e.preventDefault()
    
}

function dragLeave(e){
    
}

function dragDrop(){
   otherTile = this; //this refers to the img tile being dropped in
   
}

function dragEnd(){
    //if(!otherTile.src.includes("3.jpg")){ //if one tile isn't the "blank tile" then don't execute anything
        //return
    //}

    //LOCATION OR COORDINATES OF CURRENT TILE AND OTHER TILE
    let currCords = currTile.id.split("-"); //ex: "0-0" -> ["0","0"]
    //console.log(currCords)
    let r = parseInt(currCords[0]) //CURRENT tile row
    let c = parseInt(currCords[1]) //CURRENT tile column
    console.log("selected",r,c)

    let otherCords = otherTile.id.split("-"); //ex: "0-0" -> ["0","0"]
    //console.log(otherCords)
    let r2 = parseInt(otherCords[0]) //OTHER tile row   
    let c2 = parseInt(otherCords[1]) //OTHER tile column
    console.log("destination",r2,c2)

    //CHECKING FOR ADJACENCY
    let moveLeft = r == r2 && c2 == c-1; //same row diff column 
    let moveRight = r == r2 && c2 == c+1;
    let moveUp = c == c2 && r2 == r-1; //same column diff row
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent =  moveLeft || moveRight || moveUp || moveDown

    if(isAdjacent){
    //swapping images
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    turns +=1;
    document.getElementById("turns").innerText = turns
    }
}
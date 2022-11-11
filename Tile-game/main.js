
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
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragLeave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragEnd", dragEnd);
            
            
            document.getElementById("board").append(tile);//add images to board

            
        }
    }

}
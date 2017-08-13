var map = [
              ["(0,0)","(0,1)","(0,2)","(0,3)","(0,4)","(0,5)","(0,6)","(0,7)","(0,8)","(0,9)"],
              ["(1,0)","(1,1)","(1,2)","(1,3)","(1,4)","(1,5)","(1,6)","(1,7)","(1,8)","(1,9)"],
              ["(2,0)","(2,1)","(2,2)","(2,3)","(2,4)","(2,5)","(2,6)","(2,7)","(2,8)","(2,9)"],
              ["(3,0)","(3,1)","(3,2)","(3,3)","(3,4)","(3,5)","(3,6)","(3,7)","(3,8)","(3,9)"],
              ["(4,0)","(4,1)","(4,2)","(4,3)","(4,4)","(4,5)","(4,6)","(4,7)","(4,8)","(4,9)"],
              ["(5,0)","(5,1)","(5,2)","(5,3)","(5,4)","(5,5)","(5,6)","(5,7)","(5,8)","(5,9)"],
              ["(6,0)","(6,1)","(6,2)","(6,3)","(6,4)","(6,5)","(6,6)","(6,7)","(6,8)","(6,9)"],
              ["(7,0)","(7,1)","(7,2)","(7,3)","(7,4)","(7,5)","(7,6)","(7,7)","(7,8)","(7,9)"],
              ["(8,0)","(8,1)","(8,2)","(8,3)","(8,4)","(8,5)","(8,6)","(8,7)","(8,8)","(8,9)"],
              ["(9,0)","(9,1)","(9,2)","(9,3)","(9,4)","(9,5)","(9,6)","(9,7)","(9,8)","(9,9)"],
          ];
var direction = ["N", "W", "S", "E"];

var rover = {
  direction: direction[1],
  position_x: getPositionInix(),
  position_y: getPositionIniy(),
};

var travelLog = [];

function getPositionInix() {
  var str = map[0][0];
  var res = str.substring(1,2);
  var posx = Number(res);
  return posx;
}

function getPositionIniy() {
  var str = map[0][0];
  var res = str.substring(3,4);
  var posy = Number(res);
  return posy;
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  if (rover.direction == "W") {
    rover.direction = direction[0];
  }
  else if (rover.direction == "S") {
    rover.direction = direction[1];
  }
  else if (rover.direction == "E") {
    rover.direction = direction[2];
  }
  else if (rover.direction == "N") {
    rover.direction = direction[3];
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if (rover.direction == "W") {
    rover.direction = direction[2];
  }
  else if (rover.direction == "S") {
    rover.direction = direction[3];
  }
  else if (rover.direction == "E") {
    rover.direction = direction[0];
  }
  else if (rover.direction == "N") {
    rover.direction = direction[1];
  }
}

function moveForward(rover){
  console.log("moveForward was called");
    if (rover.direction == "W") {
      if (rover.position_x > 9) {
        alert("You've reached the end of the map! You can't go further!");
        return false;
      }
      else {
        rover.position_x = (rover.position_x)+1;
      }
    }
    else if (rover.direction == "S") {
      if (rover.position_y > 9) {
        alert("You've reached the end of the map! You can't go further!");
        return false;
      }
      else {
        rover.position_y = (rover.position_y)+1;
      }
    }
    else if (rover.direction == "E") {
      if (rover.position_x < 1) {
        alert("You've reached the end of the map! You can't go further!");
        return false;
      }
      else {
        rover.position_x = (rover.position_x)-1;
      }
    }
    else if (rover.direction == "N") {
      if (rover.position_y < 1) {
        alert("You've reached the end of the map! You can't go further!");
        return false;
      }
      else {
        rover.position_y = (rover.position_y)-1;
      }
    }
}

function moveBackward(rover){
  console.log("moveBackward was called");
    if (rover.direction == "W") {
      if (rover.position_x < 1) {
        alert("You've reached the end of the map! You can't go further!");
        return false;
      }
      else {
        rover.position_x = (rover.position_x)-1;
      }
    }
    else if (rover.direction == "S") {
      if (rover.position_y < 1) {
        alert("You've reached the end of the map! You can't go further!");
        return false;
      }
      else {
        rover.position_y = (rover.position_y)-1;
      }
    }
    else if (rover.direction == "E") {
      if (rover.position_x > 9) {
        alert("You've reached the end of the map! You can't go further!");
        return false;
      }
      else {
        rover.position_x = (rover.position_x)+1;
      }
    }
    else if (rover.direction == "N") {
      if (rover.position_y > 9) {
        alert("You've reached the end of the map! You can't go further!");
        return false;
      }
      else {
        rover.position_y = (rover.position_y)+1;
      }
    }
}

function paintMap(map){
  var container = document.getElementById("container");
  for (var i = 0; i < map.length; i++) {
    var row = document.createElement("div");
    for (var x = 0; x < map.length; x++) {
      var cell = document.createElement("div");
      cell.setAttribute("class","cell");
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

/*function paintRover(rover) {
  var container = document.getElementById("container");
  while (var i = rover.position_x;) {

  }
}
*/
window.onload = function() {
  var btnReload = document.getElementById("btnReload");
      btnReload.addEventListener("click",function() {
        location.reload();
      });
  paintMap(map);
  var mymov = prompt("(Type 'EXIT' for me to stop, 'l' for left, 'r' for right, 'f' for forwards and 'b' for backwards) Where would you like me to go?: ");
  if (mymov == null) {
    alert("Thanks for playing!");
  } else {
    while (mymov != "EXIT") {
      switch (mymov) {
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "f":
          moveForward(rover);
          travelLog.push("(" + rover.position_y + "," + rover.position_x + ")");
          break;
        case "b":
          moveBackward(rover);
          travelLog.push("(" + rover.position_y + "," + rover.position_x + ")");
          break;
        case "exit":
          alert("Thanks for playing!");
          return false;
        default:
          alert("Thanks for playing!");
          return false;
      }
      console.log(rover.direction, rover.position_x, rover.position_y);
      alert(rover.direction + " " + "(" + rover.position_y + "," + rover.position_x + ")");
      mymov = prompt("Where now?: ");
    }
  }
  alert("Travel log:" + " " + travelLog);
};

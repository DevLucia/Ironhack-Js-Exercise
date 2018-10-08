// Rover Object Goes Here
var rover ={
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []

}
// ======================
var marsMap = [
  [null, null, null,"O", null, null, null, null, null, null],
  [null, "O", null, null, null, null, null, null, null, null],
  ["O", null, null, null, null, "O", null, null, "O", null],
  [null, null, null, null, "O", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, "O", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "O", "O", null],
  [null, null, null, null, null, null, null, "O", "O", null],
  [null, "O", null, null, "O", null, null, null, null, null],
  [null, null, null, null, "O", null, null, null, null, null]
];
// ======================
function turnLeft(rover){
  switch (rover.direction){
    case "N":
      rover.direction="W";
      break;
    case "S":
      rover.direction="E";
      break;
    case "E":
      rover.direction="N";
      break;
    case "W":
      rover.direction="S";
      break;

  }
  console.log("turnLeft was called!"+rover.direction);
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
      rover.direction="E";
      break;
    case "S":
      rover.direction="W";
      break;
    case "E":
      rover.direction="S";
      break;
    case "W":
      rover.direction="N";
      break;
  }
  console.log("turnRight was called!"+rover.direction);
}

function moveForward(rover){
  switch (rover.direction){
    case "N":
      //verificamos que no se va a posiciones negativas y que la celda a la que va no es un obtáculo
      if ((rover.y>0)&&(marsMap[rover.x][rover.y-1]==null)){rover.y-=1;} 
      else if(marsMap[rover.x][rover.y-1]=="O") {console.log("Obstaculo encontrado, imposible avanzar");}
        else console.log("Imposible realizar ese movimiento.");
      break;
    case "S":
      //verifcamos que no se salga del mapa
      if ((rover.y<9)&&(marsMap[rover.x][rover.y+1]==null)){rover.y+=1;} 
      else if (marsMap[rover.x][rover.y+1]=="O"){console.log("Obstaculo encontrado, imposible avanzar");}
        else console.log("Imposible realizar ese movimiento.");
      break;    
    case "E":
      if ((rover.x<9)&&(marsMap[rover.x+1][rover.y]==null)){rover.x+=1;} 
      else if(marsMap[rover.x+1][rover.y]=="O"){console.log("Obstaculo encontrado, imposible avanzar");} 
        else console.log("Imposible realizar ese movimiento.");
      break;
    case "W":
      if ((rover.x>0)&&(marsMap[rover.x-1][rover.y]==null)){rover.x-=1;}
      else if(marsMap[rover.x-1][rover.y]=="O"){console.log("Obstaculo encontrado, imposible avanzar");}
        else console.log("Imposible realizar ese movimiento.");
      break;
  }  
  rover.travelLog.push("("+rover.x+rover.y+")");
  console.log("moveForward was called")
}

function moveBackwards(rover){
  switch (rover.direction){
    case "N":
      //verificamos que no se salga del mapa y la celda a la q va no es un obstaculo
      if ((rover.y<9)&&(marsMap[rover.x][rover.y+1]==null)){rover.y+=1;} 
      else if(marsMap[rover.x][rover.y+1]=="O"){console.log("Obstaculo encontrado, imposible retroceder");}
        else console.log("Imposible realizar ese movimiento.");
      break;
    case "S":
      //verifcamos que no se vaya a posiciones negativas y que no se encuentre con un obstaculo
      if ((rover.y>0)&&(marsMap[rover.x][rover.y-1]==null)){rover.y-=1;} 
      else if(marsMap[rover.x][rover.y-1]=="O"){console.log("Obstaculo encontrado, imposible retroceder");}
        else console.log("Imposible realizar ese movimiento.");
      break;    
    case "E":
      if ((rover.x>0)&&(marsMap[rover.x-1][rover.y]==null)){rover.x-=1;} 
      else if(marsMap[rover.x-1][rover.y]=="O"){console.log("Obstaculo encontrado, imposible retroceder");}
        else console.log("Imposible realizar ese movimiento.");
      break;
    case "W":
      if ((rover.x<9)&&(marsMap[rover.x+1][rover.y]==null)){rover.x+=1;}
      else if(marsMap[rover.x+1][rover.y]=="O"){console.log("Obstaculo encontrado, imposible retroceder");}
        else console.log("Imposible realizar ese movimiento.");
      break;
  }  
  rover.travelLog.push("("+rover.x+rover.y+")");
  console.log("moveBackwards was called")
}

function roverMovement (movements){
  //inicializo travel log con los valores actuales del rover
  rover.travelLog.push("("+rover.x+rover.y+")");
  //empiezo a moverlos con el string de movimientos
  for (var i=0;i<movements.length;i++){
    if (movements[i]=="l"){
      turnLeft(rover);
    } else if (movements[i]=="r"){
        turnRight(rover);
      } else if (movements[i]=="f"){
          moveForward(rover);
        } else if (movements[i]=="b"){
            moveBackwards(rover);  
          } else console.log(movements[i]+" no es un formato válido, por favor, introduzca l r f ó b");
  }
  console.log (rover.travelLog);
}
//hewwo dere
constructor
function isTOUCHING(object1, object2){
    if(Math.abs(object1.x - object2.x )<= object1.width/2+object2.width/2 && 
    Math.abs(object1.y - object2.y)<= object1.height/2+object2.height/2){
      return true
    } else{
      return false
    }
  
  }
function bounceOFF(object1, object2){
    if(Math.abs(object1.x - object2.x )<= object1.width/2+object2.width/2){
      object1.velocityX = -1*object1.velocityX
      object2.velocityX = -1*object2.velocityX
    }
    if(Math.abs(object1.y - object2.y)<= object1.height/2+object2.height/2){
      object1.velocityY = -1*object1.velocityY
      object2.velocityY = -1*object2.velocityY
    }
}
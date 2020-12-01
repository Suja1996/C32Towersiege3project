function isTouching(object1,object2){
  var distance=dist(object2.body.position.x, object2.body.position.y, object1.body.position.x, object1.body.position.y)
//console.log(object2.body.position.x - object1.body.position.x )
    if (distance < object2.r/2+ object1.width/2) {
  return true
  }
  else {
   return  false
  }
  
  
  } 
  
// code your solution here
function superbowlWin(record){
  let winYear = record.find(
    function(element){
  if(element.result === 'W'){
      return element
    }
  })
   if(winYear){
    return winYear.year
   }
   else{
    return undefined
   }
  }



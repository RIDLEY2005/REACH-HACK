export function getRandom(min, max){
  let ranArray = []
  for(let x = min; x <= max; x++){
    ranArray.push(x)
  }
  let ranID = Math.floor(Math.random() * ranArray.length)
  return ranArray[ranID]
}
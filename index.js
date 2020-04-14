const array = [70, 15, -50, 3, 7]
const k = 20

const findNumbers = (array, k) => {

  let obj = {}
  for(let i of array){

    if(obj[i]){
      console.log(i, obj[i])
      return true
    }else{
      obj[k-i] = i
    }

  }
  
  return false

}
  

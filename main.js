const obj={
    firstName:"Jalol",
    lastName:"Yaxyoyev",
    nowYear:2022,
    age:21,
    job:"Student",
    birthYear:function (){
      return  this.nowYear-this.age
    }
}
console.log(obj.birthYear())


const arr=["umid","rustamov",20,40,false,"jalol"]

for (let i=0;i<arr.length;i++){
    if(typeof arr[i]!=="string"){
        continue
    }
    console.log(arr[i])
}
for (let i=0;i<arr.length;i++){
    if(typeof arr[i]!=="string"){
        break
    }
    console.log(arr[i])
}



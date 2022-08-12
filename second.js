let object =[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]
console.log(object)
console.log(object[0])
console.log(object.length)

object.forEach((item)=>{
console.log(item);
})

for(let key in object){
console.log(object[key])
 }

for(let i=0;i<=object.length;i++){
console.log('object:${object[i]}');
}

for(let data of object){
    console.log(data)
    }

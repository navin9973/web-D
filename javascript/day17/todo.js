let todo = [];
let req = prompt("enter the request");
while (true) {
    if (req == "quit") {
        console.log("quiting aap");
        break;
    }
    if (req == "list") {
        console.log("_______________");
        for(let i=0;i<todo.length;i++){
        console.log(i,todo[i]);}
        console.log("_______________");
    }

    else if (req == "add") {
        let task = prompt("enter the request which is add");
        todo.push(task);
        console.log("task is added");
        
    }
   
 
    else if (req == "delete") {
        let idx = prompt("which item is to delete");
        todo.splice(idx,1);
        console.log("task is deleted");
        
    }
    else{
        console.log("wrong request");
        
    }
    req = prompt("enter the request");

}
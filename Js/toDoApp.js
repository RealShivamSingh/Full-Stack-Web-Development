let todo=[];
let req=prompt("Enter your choice");

while(true){
    if(req=="quit"){
        console.log("Quiting from the app");
        break;
    }
    if(req=="List"){
        console.log("--------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("--------------");
        }
        else if(req=="add"){
            let task=prompt("please enter your task to add");
            todo.push(task);
            console.log("task added successfully")
        }
        else if(req=="delete"){
            let idx=prompt("Please enter the  task index" );
            todo.splice(idx,1);
            console.log("Task deleted successfully");
        }
        else{
            prompt("Enter worng task");
        }
        req=prompt("Enter your next task");
    }
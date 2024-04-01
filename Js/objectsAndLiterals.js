const post={
    username:"@shvamMsingh",
    content:"Tech",
    likes:"150",
    repost:"10",
    tags:["@shonmichle"]
};
console.log(post)
const student={
    name:"Shivam",
    rollNo:"005",
    grade:"A",
    rank:"#20",
};
//Here i can also update the objects
student.rollNo="50";
student.name="Shivam Singh";
student.rank="#2";
//We can also delete any objects by using Delete key word
delete student.rollNo;
console.log(student);

let stu={
    name:"Shiva Singh",
    add:"Ramnath Deoria",
    proff:"Software Eng",
    FavThing:["TKd","KBD"],
};
console.log(stu);
let classInfo={
    sam:{
        grade:"A+",
        sub:"PCM",
        rollNo:"50",
    },
    shyam:{
        grade:"C+",
        sub:"PCM",
        rollNo:"60",
    },
    chhola:{
        garde:"A++",
        sub:"PBC",
        rollNo:"01",
    }
}
console.log(classInfo)
//Generating random number 
let ma=Math.floor(Math.random()*100)+1;
console.log(ma)

// //Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

let car={
    BMW:{
        model:"Z+",
        color:"Black",
        price:"2m"
    },
    benz:{
        model:"E-class",
        color:"Color",
        price:"60Lac"
    }
}
console.log(car)
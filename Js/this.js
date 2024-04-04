const student={
    name:"Shivam Singh",
    age:22,
    eng:80,
    math:90,
    sst:80,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.math+this.sst)/3;
        console.log(`${this.name} got average masks = ${avg}`);
    }
}

function outer(){
    let name = "pranit";
     function inner(){
        console.log(name);
    }
    inner();
}
outer();
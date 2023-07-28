const input_array=[];
function local(){
    let inp=JSON.parse(localStorage.getItem('inp'));
    
    
    input_array.push(inp);
    console.log(input_array);

}

function render(){
    let list='';
    for(let i=0;i<input_array.length;i++){
        const todo=input_array[i];
        const todoname=todo.name;
        const tododate=todo.date;
        const no=i+1;
        const html=`
        <div class="text">${no}.${todoname}</div>
        <div class="text">${tododate}</div>
        <button onclick="
        input_array.splice(${i},1);
        localStorage.removeItem('inp');
        render();" class="btn-2">Delete</button>`
        list+=html;
    }
    document.querySelector('.sub2').innerHTML=list;
}
function add(){
    let input=document.querySelector('.input-1');
    let name=input.value;
    let inputdate=document.querySelector('.input-2');
    let date=inputdate.value;
    input_array.push({name,date});
    localStorage.setItem('inp',JSON.stringify(input_array));

    input.value='';
    inputdate.value='';
    
    render();
}
document.querySelector('.btn-1').addEventListener('click',()=>{
    add();
   
})


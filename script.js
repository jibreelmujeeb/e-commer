const items =[];
const add = () =>{
    if (arr.value ==''){
        alert('Haba, no be say you too dey drink garri o way make you half blind ')
    } else{
        items.push(arr.value)
        console.log(items);
        arr.value = ""
        disp.innerHTML = ""
        for (i = 0; i < items.length; i++) {
            disp.innerHTML += `<p class="border p-2 rounded-pill my-3">${items[i]}</p>`
        }   
    }
}
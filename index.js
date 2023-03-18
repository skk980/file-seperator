const noNofiles = document.querySelector('.selectfiles')
var listofCandidate = []
var fileslist = []

noNofiles.addEventListener('change', () => {
    [...noNofiles.files].forEach(e => {
        fileslist.push(e.name)
        document.querySelector('.newCanlist').innerHTML = ''
        document.querySelector('.selectfileslist').innerHTML += ` <li class="list-group-item overflow-auto d-flex justify-content-between align-items-center">
    ${e?.name}
</li>`

    })

})

document.querySelector('.submit').addEventListener("click", function(event) {
    const selectcandidate = document.querySelector('.selectcandidate')
    document.querySelector('.newCanlist').innerHTML = ''
    if ( selectcandidate.value && !listofCandidate.includes(selectcandidate.value?.trim())) {
        listofCandidate.push(event.target.value?.trim())
        document.querySelector('.selectcandidatelist').innerHTML += ` <li class="list-group-item d-flex justify-content-between align-items-center">
        ${selectcandidate.value?.trim()}
     </li>`
     document.querySelector('.selectcandidate').value =''
    } else {
        if(!selectcandidate.value){
            alert('Enter value')
        }else{
            alert('same value entered')
        }
        
    }
})
 

document.querySelector('.selectcandidate').addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.querySelector('.newCanlist').innerHTML = ''
        if ( event?.target?.value && !listofCandidate.includes(event.target.value?.trim())) {
            listofCandidate.push(event.target.value?.trim())
            document.querySelector('.selectcandidatelist').innerHTML += ` <li class="list-group-item d-flex justify-content-between align-items-center">
            ${event.target.value?.trim()}
         </li>`
         document.querySelector('.selectcandidate').value = ''
        } else {
            if(!event.target?.value){
                alert('Enter value')
            }else{
                alert('same value entered')
            }
        }
    }

})

let list = {};
var count = document.querySelector('.selectcount')

document.querySelector('.selectcount').addEventListener('change',()=>{
    document.querySelector('.newCanlist').innerHTML = '' 
})

const getlist = (i) => {
    var arr = [];
    new Array(Number(count?.value)).fill('').forEach(() => {
        const randomno = Math.floor(Math.random() * fileslist.length);
        arr = [...arr, fileslist[randomno]];
        list[listofCandidate[i]] = arr;
        fileslist = fileslist.filter((e, i) => i !== randomno);
    });

    if (listofCandidate[i + 1]) {
        getlist((i = i + 1));
    }

    return list;
};

document.querySelector('.calculate').addEventListener('click', () => {
    const list = getlist(0)
    
    listofCandidate = [] 
    fileslist=[]

    document.querySelector('.selectfileslist').innerHTML = ''
    document.querySelector('.selectcandidatelist').innerHTML = ''
    document.querySelector('.selectcount').value = ''
    document.querySelector('.selectcandidate').value = ''
    document.querySelector('.selectfiles').value = ''


    setTimeout(()=>{
        if (Object.keys(list).length) {
            Object.keys(list).forEach(item=>{
               
                    
                document.querySelector('.newCanlist').innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start optionValue">
                <div class="ms-2 me-auto">
                    <div class="fw-bold ">${item ? item :''}</div>
                    <div class='d-md-flex py-3'>
                     ${
                         list[item].filter((e,i)=>e!==undefined).map(element => `<div  class="alert alert-primary listofdata">
                         ${element}
                       
                    </div>`)
                     }
                     </div>
                </div>
            </li>`
               
            })
        }
    },1000)
    
   
    
   

    
    

    
})

// const removename = (name) => {

//     const index = listofCandidate.findIndex(e => e === `${name}`)
//     listofCandidate.filter((e, i) => i !== index).length ? listofCandidate.filter((e, i) => i !== index).forEach((item) => {
//         console.log(item)
//         document.querySelector('.selectcandidatelist').innerHTML += ` <li class="list-group-item d-flex justify-content-between align-items-center">
//         ${item.trim()}
//          <span class="badge bg-danger rounded-pill remove" onclick=removename('${item.trim()}')>X</span>
//      </li>`
//     }) : document.querySelector('.selectcandidatelist').innerHTML = ``

// }
 let flag=0;

for(let i=0; i<8; i++){
    let container=document.createElement("div");
    container.id=`d${i}`;
    document.body.appendChild(container);
    for(let j=0+flag; j<8; j++){
        if(j%2 == 0){
           let divWhite=document.createElement("div");
           divWhite.className="white";
           container.appendChild(divWhite);
        } else{
           let divBlack=document.createElement("div");
           divBlack.className="black";
           container.appendChild(divBlack);
        }
    }   
    flag= flag== 0 ? 1 :0 ;   
}
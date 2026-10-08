let treeImgEl=document.getElementById("treeImg");
let springEl=document.getElementById("spring");
let summerEl=document.getElementById("summer");
let autumnEl=document.getElementById("autumn");
let winterEl=document.getElementById("winter");

function changeSeason(){
    if(event.target == springEl){
        treeImgEl.src ="https://tse4.mm.bing.net/th/id/OIP.kXStR6OHu-1j-TxyFRrtCgHaEK?r=0&pid=Api&h=220&P=0";
    }
   else if(event.target == summerEl){
        treeImgEl.src ="https://tse2.mm.bing.net/th/id/OIP.VkwIATXfqQ6CPc6pgBQ3lAHaE7?r=0&pid=Api&h=220&P=0";
    }
   else if(event.target == autumnEl){
        treeImgEl.src ="https://tse4.mm.bing.net/th/id/OIP.FKNiBI7jUoyhy_WNjwXviQHaE8?r=0&pid=Api&h=220&P=0";
    }
   else if(event.target == winterEl){
        treeImgEl.src ="https://tse2.mm.bing.net/th/id/OIP.OtDpH8EtxdAmBA-0PSCEuAHaHa?r=0&pid=Api&h=220&P=0";
    }
}
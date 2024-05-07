let cross=document.querySelector("span");

let input=document.querySelector("input.input_search");

let images_parent=document.querySelector("div.images-parent");

let search_button=document.querySelector("button.search");

let more_button=document.querySelector("button.more");

let dark_btn=document.querySelector("input.dark");

let hamburger=document.querySelector("button.hamburger");

let tabPart=document.querySelector("div.tab-part");


input.addEventListener("keyup",()=>{
    if(input.value.length>0){
        cross.style.display="block";
    }
    else{
        cross.style.display="none";
    }
})

cross.addEventListener("click",()=>{
    input.value="";
    cross.style.display="none";
    
})


async function GetImage(){
    let data=await fetch("images.json");
    let jsonData=await data.json();
    // let arr=[];
    console.log(jsonData.length);
    // for(let i=0;500>=i;i++){ 
    //     let random=Math.floor(Math.random()*jsonData.length);  
    //     let img=document.createElement("img");
    //     img.setAttribute("width","400px");
    //     img.setAttribute("height","500px");
    //     if(arr.includes(random)){
    //         continue;
    //     }
    //     else if(!(arr.includes(random))){
    //         console.log(arr.includes(random));
    //         img.src=jsonData[random].url;
    //         arr.push(random);
    //     }
    //     images_parent.appendChild(img);

                
            
    // }

    // Generating random images through Fisher-Yates Algorithm
    function random(arrimg){    

        for(let k=arrimg.length-1;k>0;k--){
            let img=document.createElement("img");
            img.setAttribute("width","400px");
            img.setAttribute("height","500px");
            let j=Math.floor(Math.random()*k+1);
            let temp=arrimg[k];
            arrimg[k]=arrimg[j];
            arrimg[j]=temp;
            img.src=arrimg[k].url;
            images_parent.appendChild(img);
        }
      
    }
    
    random([...jsonData]);
} 

GetImage();

let page=1;

search_button.addEventListener("click",()=>{

    if(input.value.length>0){
        while(images_parent.firstChild){
            images_parent.removeChild(images_parent.firstChild);
        }
    }

    page=1;
    FetchImage(input.value);
})

let search_data="";

async function FetchImage(queryData){
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${queryData}&client_id=x0D-1of4D_dP1gMZUj0nDIDOTytBCuczhRrNxYeD35o`;
    let getData=await fetch(url);
    let ImageJson=await getData.json()
    let img_count=0;
    for(let i=0;ImageJson.results.length>i;i++){
        let img=document.createElement("img");
        img.setAttribute("width","400px");
        img.setAttribute("height","500px");
        images_parent.appendChild(img);
        img.src=ImageJson.results[img_count].urls.full;
        img_count++;
        
    }

    search_data=queryData;
  
    if(page>=1 && ImageJson.results.length>=1){
        more_button.style.display="block";
    }

    else if(ImageJson.results.length==0){
         more_button.style.display="none";  
         alert("Result Not Found");

    }

}


more_button.addEventListener("click",()=>{
    
    FetchImage(search_data,++page);

})


dark_btn.addEventListener("click",()=>{
    if(dark_btn.checked){
        // changing color of hamburger,links
        hamburger.style.color="white";
        tabPart.style.color="white";
        document.querySelector("div.offcanvas-body").style.background="#212121";
        document.querySelector("div.offcanvas-start").style.background="#212121";
        document.querySelector("button.btn-close").style.backgroundColor="white";
        // changing color of Login, Feedback and Our Sities to White
        document.body.style.background="#212121";
        document.body.firstElementChild.lastElementChild.children[0].style.color="white";
        document.body.firstElementChild.lastElementChild.children[1].style.color="white";
        document.body.firstElementChild.lastElementChild.children[2].style.color="white";
        document.body.children[2].style.border="1px solid #212121";

    }
    else{
        // changing color of hamburger,links
        hamburger.style.color="#212121";
        tabPart.style.color="#212121";
        document.querySelector("div.offcanvas-body").style.background="white";
        document.querySelector("div.offcanvas-start").style.background="white";
         // changing color of Login, Feedback and Our Sities to Black
         document.body.style.background="#FFFFFF";
        document.body.firstElementChild.lastElementChild.children[0].style.color="black";
        document.body.firstElementChild.lastElementChild.children[1].style.color="black";
        document.body.firstElementChild.lastElementChild.children[2].style.color="black";
        document.body.children[2].style.border="1px solid white";

    }
})





// Collection
// 1 Key = H7f2PZIgdL4fR0o8EB76T0Unb57eq7GoHvsTtTOQ_g4
// 2 Key = x0D-1of4D_dP1gMZUj0nDIDOTytBCuczhRrNxYeD35o

// let url="https://api.unsplash.com/collections/?client_id=x0D-1of4D_dP1gMZUj0nDIDOTytBCuczhRrNxYeD35o";

// Random
// let url="https://api.unsplash.com/photos/random/?client_id=x0D-1of4D_dP1gMZUj0nDIDOTytBCuczhRrNxYeD35o";



// let count=1;

// async function getImage(){
//     let data=await fetch(url);
//     let jsonData=await data.json();
//     // console.log(jsonData);
    
//     // Random
//     // console.log(jsonData.links.download);
//     // let count=0;
//     for(let i=0;1>i;i++){
//         let img=document.createElement("img");
//         // For Random
//         img.src=jsonData.links.download;
        
//         // img.src=jsonData[count].preview_photos[0].urls.full;
//         // console.log(jsonData[0].preview_photos[0].urls.full);
//         img.setAttribute("width","600px");
//         img.setAttribute("height","400px");
//         images_parent.appendChild(img);
//         if(count==12){
//             break;
//         }
//         else{
//             count++;
//             getImage();
//         }
//         console.log(count);

//         // count++;
    
//     }
// }

// getImage()

// let url1="https://api.pexels.com/v1/collections/featured?per_page=1&2DGQwZOVdH5CvYr1EndjNyfsQdgFD9uu0YHbsn5SZwXsLqM5Wt4yTdzg";

// async function oiu(){
//     let a=await fetch(url);
//     let k=await a.json();
//     console.log(k);
// } 

// oiu();


// Pexels Api
// 2DGQwZOVdH5CvYr1EndjNyfsQdgFD9uu0YHbsn5SZwXsLqM5Wt4yTdzg

// Pixabay Api
// Your API key: 43601829-5d452f2057c044d6ff40581bc
// https://pixabay.com/api/?key=43601829-5d452f2057c044d6ff40581bc&q=yellow+flowers&image_type=photo


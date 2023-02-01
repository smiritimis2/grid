let first=document.getElementById("first");
let second=document.getElementById("second");
let score=document.getElementById("score");
let third=document.getElementById("third");
let fourth=document.getElementById("fourth");
let dice=document.getElementById("dice");
let token=document.getElementById("token");

var order=0;

let area=document.getElementById("main");
let info=document.getElementById("show");
let names=document.getElementById("name");
let emails=document.getElementById("email");
let users=document.getElementById("username");
let btn=document.getElementById("submit");
var arr=[{
     id:0,
    name:"ram",
    email:"mishrasmiriti2@gmail.com",
    user:"make"
}]

function add()
{
    let name=names.value;
    let email=emails.value;
    let user=users.value;
 let len=arr.length;
let brr={
    id:len,
    name:name,
    email:email,
    user:user
}
arr.push(brr);
names.value="";
emails.value="";
users.value="";
}
btn.addEventListener("click",add)








var countf=0;var pos=-1;
first.addEventListener("click",()=>{
   /// window.location.href="/form.html";
   countf++;
    order++;pos++;
     if(order>=1 && countf==1 && pos==0)
     {
         
      area.style.display="block";
    
    }
      pos--;

})
var counts=0; 
second.addEventListener("click",()=>{
    if(countf==1){
    order++;counts++;pos++;

     

    if(order>1 && counts==1 && pos==0){
    area.style.display="none";
    info.style.display="block";
    info.innerHTML="";
    arr.forEach((item)=>{
    if(item.id>0){
    
    
       
       let Item=document.createElement("tr");
       Item.innerHTML=`
      
       <td>Name ${item.name}</td>
       
       &nbsp 
       &nbsp  &nbsp 
       &nbsp  &nbsp  &nbsp 
       &nbsp  &nbsp  &nbsp 
       &nbsp  &nbsp  &nbsp  &nbsp 
       &nbsp  &nbsp  &nbsp  &nbsp 
       <td> Username  ${item.user}</td>
       `
       
      Item.style.display="block";
      Item.style.height="80px";
      Item.style.width="250px";
      Item.style.color="black";
      Item.style.borderStyle="solid";

      Item.style.margin="20px 10px";
      Item.style.borderRadius="5px";
        info.append(Item);

    }})

}
pos--;
}
}
)

var number=0; var countt=0;
third.addEventListener("click",()=>{
 pos++;

   /* score.style.display="block";
     
    score.innerHTML=" ";
    score.innerHTML=` ${sum} `;*/
  if(counts==1){
    order++;countt++;
    if(order>2 && countt==1 && pos==0)
    {
        score.style.display="block";
     
        score.innerHTML=" ";
        score.innerHTML=`Score: ${sum} `;

       
    area.style.display="none";
    info.style.display="none";
    dice.style.display="block";
    }
    pos--;}

})
var sum=0; var count=0;var attempt=0;
dice.addEventListener("click",()=>{
    count++; attempt++;

 //dice.style.display="block";
pos++;
 if(count<=3 && attempt<=6 && pos==0)
 {
 
// if(sum<=10)
//{
    sum=sum+ Math.floor(Math.random()*6)+1;
//}
    
   

}






  if(sum<=10 && count==3 && attempt==3 && pos==0)
  {
    alert("try again after scoring more than 10");
    
    
    sum=0;count=0;
    score.innerHTML=" ";
    score.innerHTML=`${sum}`;

    score.innerHTML="";
}




score.innerHTML=`${sum}`;
if(sum<=10 && attempt==6)
{
    alert("Bad Luck");sum=0;
}
score.innerHTML=" ";
score.innerHTML=`${sum}`;
console.log(sum);

pos--;
}
 
)
 var countl=0;
fourth.addEventListener("click",()=>{
   countl++;
    order++;pos++;
    if(order>=3 && countl==1 && pos==0)
    {
 if(count>=3 && sum>10)
 {
     /*let capital="ABCDEFGHIJKLMNOPQRST";
     let small="abcdefghijklmnopqrstuvwxyz";*/
     dice.style.display="none";
     area.style.display="none";
     info.style.display="none";
     token.style.display="block";


     let number="0123456789";
     //let special="!@#$%^&*()_+";
     let characters=number;
     let tokens="";
     for(let i=0;i<12;i++)
     {
         let random=Math.floor(Math.random()*characters.length);
         tokens=tokens+characters[random];
     }
     //console.log(token);


    
     
    
     let Item=document.createElement("tr");
       Item.innerHTML=`
      Congratulations
      &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp

      &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp
      
      
      &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp

    
      
           Token    
      
      
           &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp
                        <td>${tokens}</td>
                        &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp

                        &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp
                        
                        
                        &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp
                  
      


       
       
       `
      
      Item.style.display="block";
      Item.style.height="80px";
      Item.style.width="200px";
      Item.style.color="black";
      Item.style.borderStyle="solid";
      Item.style.textAlign="center"
      Item.style.margin="20px 10px";
      Item.style.borderRadius="5px";
        token.append(Item);

 }

pos--;
    }
})

 
  const elements=document.getElementsByClassName("button");
  let seatsleft=parseInt(document.getElementById("seat-left").innerText);
  let seatAdd=0;
  let count=0;
  const price=550;


  for(const element of elements){
    
    element.addEventListener("click", function(e){
      element.classList.add('bg-green-400')
      // seatsleft=seatsleft-1;
      let seatstatus=getElementByID('seat-left');
      // console.log(seatstatus.innerText);
      
      seatsleft=seatsleft-1;
      seatstatus.innerText=seatsleft;

      let seatAdded=getElementByID('seat-add');
      // console.log(seatadded);
      seatAdd=seatAdd+1;
      seatAdded.innerText=seatAdd;

      count++;
        
      console.log(count);

      if (count == 4) {
      document.getElementById("coupon").removeAttribute("disabled");
    }
      if (count > 4){
        alert("You have to allow for booking 4 seats");
        element.classList.remove('bg-green-400')
        return;
      }

      const seatText = e.target;
      seatText.setAttribute("disabled", true);
      seatText.style.color = "white";
      seatText.style.color = "white";
      seatText.style.backgroundColor = "#1DD100";
       
      let seatNum=element.innerText;

      

      

      
      // console.log(seatNum);
      

      let TableBody=getElementByID('t-body');
      // console.log(TableHead);
      const tr=document.createElement("tr");
      const td1 =document.createElement("td");
      td1.innerText=seatNum;
      const td2=document.createElement("td");
      td2.innerText="Economy";
      const td3=document.createElement("td");
      td3.innerText= price;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      TableBody.appendChild(tr);
      totalPrice("total", price);
      
      // console.log(price);

      

    });
    
  }

  function getElementByID(elementID){
    const element=document.getElementById(elementID);
    return element;
    
  }

  function totalPrice(eID,value){
    const totals=parseInt(document.getElementById(eID).innerText);
    // console.log(totals);
    
    // console.log(InnerTotal);
     let sum =totals+value;
     SetText("total",sum);
     grandtotal();

  }

  function grandtotal(){
    const mainTotal= getValue("total");
    
     
    SetText("g-total" , mainTotal);
  }

  function SetText(id,value){
    document.getElementById(id).innerText=value;
  }

  function getValue(id) {
    const budget =parseInt(document.getElementById(id).innerText);
      
    return budget;
    
  }

  const button=document.getElementById('coupon');
  button.addEventListener("click", function(){
    const CouponValue=document.getElementById("coupon-input").value;
    const code=CouponValue.toUpperCase();
    console.log(CouponValue);
    document.getElementById("coupon-input").classList.add("hidden");
    document.getElementById("coupon").classList.add("hidden");

    if(code === "NEW15" ){
      const amount=parseFloat(document.getElementById("total").innerText) *  0.15;
      const remainTotal = document.getElementById("g-total");
      console.log(remainTotal);

      remainTotal.innerText=  parseFloat(document.getElementById("total").innerText) - amount;

      document.getElementById("coupon-input").value = "";
    }
    else if(code === "COUPLE20"){
      const amount=parseFloat(document.getElementById("total").innerText) * 0.2;
      const remainTotal = document.getElementById("g-total");
      remainTotal.innerText =parseFloat(document.getElementById("total").innerText) - amount;
    document.getElementById("coupon-input").value = "";
    }
    else{
       alert("Invalid coupon")
       document.getElementById("coupon-input").value = "";
      document.getElementById("coupon-input").classList.remove("hidden");
      document.getElementById("coupon").classList.remove("hidden");
    }
  });
  
  

 
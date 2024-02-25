function reza(){
    let x=10
    let y=50
    const z= (x+y)
    document.getElementById('ammo').innerHTML = Date()
}

function MM(){
    const age = document.getElementById("xx").value
    const bribe = document.getElementById("yy").value
    if (age>=18 & age<=70){
        document.getElementById("rx").innerHTML = "Lisence Aproved"
    }
    else{
        if(age<18 & bribe>=500){
        document.getElementById("rx").innerHTML = "Lisence Aproved"
        }
        else{
            if (age > 70){
                document.getElementById("rx").innerHTML= "Invalid"
        
              }
              else{
                if (bribe < 500) {
                    document.getElementById("rx").innerHTML= "Invalid"
                   
                  }
            else{
            document.getElementById("rx").innerHTML =  "Lisence Not Approved";
            return false;
        }
        }
    }
  
}
}
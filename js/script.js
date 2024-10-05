const phone = document.getElementById("phone");
const pin = document.getElementById("pin");
const wrongPin = document.getElementById("form_control");
const  btn_log = document.getElementById("btn_log");
btn_log.addEventListener('click',function(event)
    {
        event.preventDefault();
        let ph_num = phone.value;
        let pin_num = pin.value;
        if(pin_num.length === 4)
            { 
                if(ph_num === authentication.mobile && pin_num === authentication.pin)
                    {   
                        phone.value = " ";
                        pin.value = "";
                        window.location.href = "./payoo.html"
                    }
                else
                    {
                        phone.value = " ";
                        pin.value = "";
                        alert("Invalid phone number or pin.");
                    }
            }
        else
            {
                phone.value = " ";
                pin.value = "";
                let br = document.createElement('br');
                let p = document.createElement('p');
                p.style.color = "red";
                p.innerText = "Pin must have 4 characters!";
                wrongPin.appendChild(br);
                wrongPin.appendChild(p);
            }
    })
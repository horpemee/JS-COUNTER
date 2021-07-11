
    function increase () {
    let counter = document.getElementById("number");
    if (counter.innerText < 50)
        {
            counter.innerText++;
        }
}
    function decrease () {
        let counter = document.getElementById("number");
        if (counter.innerText > 0)
        {
            counter.innerText--;
        }
         else if 
             (counter.innerText <= 0) {
                 alert ("Void");
        }

    }
 
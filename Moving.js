function myMove(speed,topMv,botMv,leftMv,rightMv) {
    var elem = document.getElementById('mole');
    var pos = 50;
    var id = setInterval(frame, speed);
    function frame() {
        if (pos == 350){
            clearInterval(id);
            
            
        }else{
            pos++;
            if(topMv){
                elem.style.top=pos+'px';
                
            }
            if(leftMv){
                elem.style.left=pos+'px';
            }
            if(botMv){
                elem.style.top=(350-pos)+'px';
            
        }
           if(rightMv){
                elem.style.left=(350-pos)+'px';
    }
    
    
}
    }
}

var counter = 0;
d3.select("#mole")
  .on ("click", function()
     {
    
    if(counter == 0){
        console.log('its doing this one')
    myMove(3,true,false,true,true)
    }
    else if(counter == 1)
        {
            console.log('its doing 2')
            myMove(3,false,true,false,true)
        }
    else if(counter == 2)
        {
            console.log('its doing 3')
            myMove(3,true,false,false,true)
        }
    else
        {
            console.log('done')
            d3.select("body")
            .append("p")
            .text("done, good job")
        }
    counter = counter+1
    console.log(counter)

    
})

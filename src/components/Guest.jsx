function Guest(tguests){
    let pa =document.getElementById('pA')
    let pc =document.getElementById('pC')
    
    function restar(target){
      let content = parseInt(target.textContent)
      let tcontent = parseInt(tguests.textContent)
      if(tcontent>0 && content>0){
        content-=1

        tcontent-=1
        target.textContent = content
        tguests.textContent = tcontent
      }
  
    }

    function sumar(target){
      let content = parseInt(target.textContent)
      let tcontent = parseInt(tguests.textContent)
     /*  problemas con el desplegar */
        content+=1
        tcontent+=1
  
        target.textContent = content
        tguests.textContent = tcontent
       
      }
     
    return(
      <div id="adbtns">
        <div  className="contenedor">
          <h5 id="H5">Adult</h5>
          <span  className="age">Age 13 or above</span>
          <div className="adBar">
             <button  className="btnrestar" onClick={()=>restar(pa)}>－</button>
             <span id= "pA" >0</span>
             <button   className="btnsumar" onClick={()=>sumar(pa)} >＋</button>
            </div>
          </div>

            <div className="contenedor">
              <h5 id="H5">Children</h5>
              <span className="age" >Age 2-12</span>
              <div className="adBar">
              <button  className="btnrestar" onClick={()=>restar(pc)}>－</button>
                <span id="pC">0</span>
                <button className="btnsumar" onClick={()=>sumar(pc)} >＋</button>
              </div>
            </div>
      </div>
    )
   
  }



  export default Guest 

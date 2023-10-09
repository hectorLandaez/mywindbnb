import Guest from "./Guest";
import Cities from "./Cities";

function Nav({FnSubmit}) {
  let tguests = document.getElementById("tguests");
  let btns = document.getElementById("adbtns");
  let cbtns = document.getElementById("citybtns");
  let PDiv = document.getElementById('PDiv')
  let btns1 = document.getElementById('btns1')

  function ocultar(bt1, bt2) {
    bt1.style.display = "block";
    bt2.style.display = "none";
  }
  
 
  return (
    <header>
        
        <div className="PDiv" id="PDiv">
        <div className="pEdit">
        <h4 className="t"> Edit your search</h4>
        <button onClick={()=>ocultar(btns1, PDiv)} className="close"><span class="material-symbols-outlined">
close
</span></button>
        </div>
        <nav>
        <div className="btns2">
        <form id="formNav" onSubmit={FnSubmit}>
                <button
                  className="botn1"
                  type="button"
                  onClick={() => ocultar(cbtns, btns)}>
                
                  <h4 className="t">Location</h4>
                  <h4 id="location">whole finland</h4>
                </button>
                <button
                  className="botn2"
                  type="button"
                  onClick={() => ocultar(btns, cbtns)} >
          
                  <h4 className="t">Guest </h4>
                  <h4 id="tguests">0</h4>
                </button>
                <button className="botn3" type="submit" onClick={() => ocultar(btns1, PDiv)}>
                  Buscar
                </button>
              </form>
        </div>
      </nav>
      <div id="gc">
        {Guest(tguests)}
        {Cities() }
      </div>
        </div>
      
    </header>
  );
}

export default Nav;

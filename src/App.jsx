import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [data, setData] = useState([]);
  const [sdata, setSdata] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  const getSdata = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setSdata(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = (text, number) => {
    const filtered = sdata.filter(
      (Element) => Element.city.includes(text) && Element.maxGuests >= number
    );

    return filtered;
  };

  const handleFormFilter = (e) => {
    e.preventDefault();
    let location = document.getElementById("location");
    let tguests = document.getElementById("tguests");
   
    let text = location.textContent;
    let number = parseInt(tguests.textContent);
  

    
    const filtered = filterData(text, number);
    if (filtered.length != 0) {
      setData(filtered);
      
    } else {
      setData(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getSdata();
  }, []);

  let PDiv = document.getElementById("PDiv");
  let btns1 = document.getElementById("btns1");
 

  function ocultar(bt1, bt2) {
    bt1.style.display = "block";
    bt2.style.display = "none";
  }

 
  

  return (
    <>
      <div>
        <Nav FnSubmit={handleFormFilter}></Nav>
        <div id="btns1">
          <div className="btns1">
            <div className="logo">
              <span>
                <img src="src/img/logo.svg" />
              </span>
            </div>

            <div className="botones1">
              <button className="locaton1" onClick={() => ocultar(PDiv, btns1)}>
                whole,finland
              </button>
              <button className="guest1" onClick={() => ocultar(PDiv, btns1)}>
                0
              </button>
              <button className="buscar1" onClick={() => ocultar(PDiv, btns1)}>
                <span class="material-symbols-outlined">search</span>
              </button>
            </div>
          </div>
        </div>
        <div className="stays">
          <h3>Stays in Finland</h3> <span>{data.length} stays </span>
        </div>
        <main>
          {data.map((el, i) => (
            <div key={i} className="card">
              {ocultar(btns1, PDiv)}
              <div className="divImg">
                <img src={el.photo} alt={el.title} />
              </div>
              <div className="text">
                <span className="age">{el.type}</span>
                <span className="star-span">
                  <span class="material-symbols-outlined">grade</span>
                  {el.rating}
                </span>
              </div>
              <span className="te">
                <h4 key={i}>{el.title}</h4>
              </span>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

function Cities() {
  const [data, setData] = useState([]);
  let location = document.getElementById("location");


  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  let mir = [];
  for (let i = 0; i < data.length; i++) {
    const el = data[i];
    mir.push(el.city);
  }
  let nmir = new Set(mir);
  let nnmir = [...nmir];
  return (
    <div id="citybtns">
      {nnmir.map((el, i) => {
        return (
          <div>
            <button
              className="citybtn"
              onClick={() => (location.textContent = el)}
            >
              <span class="material-symbols-outlined">pin_drop</span>
              {el}, Finland
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cities;

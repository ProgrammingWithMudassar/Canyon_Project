import React, { useState } from "react";
import { Divider, Grid } from "@mui/material";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "../Styles.css"

const Standard = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showTable, setShowTable] = useState(false);
  const countries = ["USA", "Japan"];
  const [isopen, setisopen] = useState(false);
  const [size, setsize] = useState(0);
  const [cs, setCs] = useState(0);
  const [id, setid] = useState(0);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const showTableHandler = () => {
    setShowTable(!showTable)
  }


  return (
    <section className="sideBarMenuData">
      <select value={selectedCountry} className="country"
        style={{ backgroundColor: "#fff", height: "2rem", width: "100%", border: "1px solid #c4c4c4", borderRadius: "4px", cursor: 'pointer' }} onChange={handleCountryChange} >
        <option value="" >Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      <Grid container spacing={2} sx={{ mt: 0.4 }}>
        <Grid item xs={1.9} sx={{ mt: 0.5, cursor: "pointer" }}>
          {showTable ? <AiFillCaretDown onClick={showTableHandler} /> : <AiFillCaretUp onClick={showTableHandler} />}
        </Grid>
        <Grid item xs={3.3}><input type="number" placeholder="Size" className="borderInput" /></Grid>
        <Grid item xs={3.3}><input type="number" placeholder="CS" className="borderInput" /></Grid>
        <Grid item xs={3.3}><input type="number" placeholder="ID" className="borderInput" /></Grid>
      </Grid>
      {
        showTable ? null : <div>
          <table style={{ width: "100%", maxHeight:"1vh",overflow:'scroll', border: '1px solid #858585', padding: "3px", borderRadius: "6px" }}>
            <thead style={{ backgroundColor: "gray" }}>
            </thead>
            <tbody style={{ }}>
              <tr>
                <td><input type="checkbox" style={{ width: '100%', scale: "1.3", cursor: "pointer" }} /></td>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
              <Divider sx={{width:"500%"}}/>
              <tr>
                <td>input</td>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
              <Divider sx={{width:"500%"}}/>
              <tr>
                <td>input</td>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
              <Divider sx={{width:"500%"}}/>
              <tr>
                <td>input</td>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </section>
  );
};

export default Standard;
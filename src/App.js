import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import ProductPicker from "./components/ProductPicker";


const style = {
  font_weight: "fw-semibold",
};

function App() {
  const [modal_state, setModal_State] = useState(false);
const [discount, setDiscount] = useState(false)

  const [inputs, setInputs] = useState([{ firstName: "", lastName: "" }]);

  const handleAddInput = () => {
    setInputs([...inputs, { firstName: "", lastName: "" }]);
  };

  const toggleDrawer = () => {
    setModal_State(!modal_state);
  };

  // DiscountHandler
  const DiscountHandler = () =>{
    setDiscount(!discount)
  }
  return (
    <div className="App">
      <h4>Add Product</h4>
        <div className={`d-flex p-2 justify-content-evenly `}>
        <div>
        <div className="d-flex justify-content-around">
        <p className={style.font_weight}>Products</p>
        <p className={style.font_weight}>Discount</p>
        </div>
        
      {inputs.map((item, i)=>

          <div key={i} className="input-group p-2">
            <input
              disabled
              type="text"
              className="form-control"
              placeholder="Select Product"
            />
            <div className="input-group-append ">
              <span
                className="input-group-text"
                onClick={() => toggleDrawer(modal_state)}
              >
                <i className="bi bi-pencil-fill"></i>
              </span>
            </div>
        {discount ? "": <Button onClick={()=>DiscountHandler()} className="mx-4" variant="contained" size="small" color="success">
            Add Discount
          </Button>}
         
          </div>
        )}
        </div>
      </div>
  
     
      <Button variant="outlined" size="small" color="success"  onClick={() => handleAddInput()}>
        Add Product
      </Button>

      {/* sideModal */}
      <ProductPicker modal_state={modal_state} toggleDrawer={toggleDrawer} />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

const style = {
  font_weight: "fw-semibold",
};

function App() {
  return (
    <div className="App">
      <h4>Add Product</h4>
      <div className={`d-flex p-2 justify-content-evenly `}>
        <div>
          <p className={style.font_weight}>Products</p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Select Product"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i class="bi bi-pencil-fill"></i>
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className={style.font_weight}>Discount</p>
          <Button variant="contained" size="small" color="success">
            Add Discount
          </Button>
        </div>
      </div>
      <Button variant="outlined" size="small" color="success">
        Add Product
      </Button>
    </div>
  );
}

export default App;

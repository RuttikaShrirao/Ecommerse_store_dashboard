import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// search component
import SearchField from "./SearchField";
import { Checkbox } from "@mui/material";

// checkbox in product picker
import Product_varient from "./Product_varient";


export default function ProductPicker({ modal_state, toggleDrawer }) {


  return (
    <div>
      <>
        <Drawer
          anchor={"right"}
          open={modal_state}
          onClose={() => toggleDrawer(!modal_state)}
        >
          <Box className="p-3" sx={{ width: 350 }} role="presentation">

          {/* cancle btn */}
          <span className="float-end">
          <i className="bi bi-x-lg"  onClick={() => toggleDrawer(!modal_state)}></i>
          </span>
    
            <h6>Select Products</h6>
            
            <hr />
            {/* search comp */}
            <div className="input-group">
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Select Product"
              />
            </div>
            {/* end search comp */}

            <hr />

{/* checkbox picker */}
<Product_varient/>
            
          </Box>
        </Drawer>
      </>
    </div>
  );
}

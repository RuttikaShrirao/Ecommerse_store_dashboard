import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// mui
import Checkbox from "@mui/material/Checkbox";

// console.log(apikey.config())

const DynamicCheckboxGroups = () => {
  const [productAndvarient, setProductAndvarient] = useState([]);
  // const [parentChildData, setParentChildData] = useState([]);
  // const [checkedItems, setCheckedItems] = useState({});
  const [checkedItems, setCheckedItems] = useState([
    {
      Product_title: [],
      varient: [],
    },
  ]);
  // const [parentStates, setParentStates] = useState({});
  // const parentRefs = useRef({});

  // mui
  const [checked, setChecked] = React.useState(false);

  // ----------------------------------------

  // Fetch parent-child data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("https://stageapi.monkcommerce.app/task/products/search", {
          method: "GET",
          headers: { "x-api-key": "72njgfa948d9aS7gs5" },
          // redirect: 'follow'
        })
          .then((response) => response.json())
          .then((result) => {
            setProductAndvarient(result);
          })
          .catch((e) => console.log(e));

        // Initialize the parent-child state with the API response
        // const initialCheckedItems = {};
        // const initialParentStates = {};

        // productAndvarient.forEach(({ parentId, children }) => {
        //     initialCheckedItems[parentId] = children.reduce((acc, child) => {
        //         acc[child] = false; // Initially all children unchecked
        //         return acc;
        //       }, {});
        //       initialParentStates[parentId] = false; // Initially all parents unchecked
        //     });

        // setParentChildData(data);
        // setCheckedItems(initialCheckedItems);
        // setParentStates(initialParentStates);
      } catch (error) {
        console.error("Error fetching parent-child data from API:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(productAndvarient,"response");

  // Update parent checkbox state based on child checkboxes
  //       useEffect(() => {
  //         parentChildData.forEach(({ parentId }) => {
  //           const allChecked = Object.values(checkedItems[parentId] || {}).every(
  //             Boolean
  //     );
  //     const noneChecked = Object.values(checkedItems[parentId] || {}).every(
  //       (val) => !val
  //     );

  //     setParentStates((prev) => ({
  //       ...prev,
  //       [parentId]: allChecked,
  //     }));

  //     if (parentRefs.current[parentId]) {
  //       parentRefs.current[parentId].indeterminate =
  //         !allChecked && !noneChecked;
  //     }
  //   });
  // }, [checkedItems, parentChildData]);

  // Handle change in a child checkbox
  // const handleChildChange = (parentId, childId, event) => {
  //   setCheckedItems({
  //     ...checkedItems,
  //     [parentId]: {
  //       ...checkedItems[parentId],
  //       [childId]: event.target.checked,
  //     },
  //   });
  // };

  // Handle change in a parent checkbox
  // const handleParentChange = (parentId, event) => {
  //   const newCheckedState = event.target.checked;
  //   const updatedChildren = Object.keys(checkedItems[parentId]).reduce(
  //     (acc, child) => {
  //       acc[child] = newCheckedState;
  //       return acc;
  //     },
  //     {}
  //   );

  //   setCheckedItems({
  //     ...checkedItems,
  //     [parentId]: updatedChildren,
  //   });
  //   setParentStates({
  //     ...parentStates,
  //     [parentId]: newCheckedState,
  //   });
  // };

  // Submit the updated checkbox state to the API
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api.example.com/update-checkboxes",
        checkedItems
      ); // Replace with your API URL
      console.log("Data successfully submitted:", response.data);
    } catch (error) {
      console.error("Error submitting checkbox data:", error);
    }
  };

  // Product Checkbox
  // const handleProductCheckboxChange=(id,Product)=>{
  const handleProductCheckboxChange = (id, Product_title,varient_title) => {
    // {
    //   productAndvarient
    //     .filter((f_product) => f_product.id == id)
    //     .map((filter_p_id) =>
    //       filter_p_id.id == id ? setChecked(true) : setChecked(false)
    //     );
    // }
    //  console.log(checked_Product.includes(id),"productss",checked_Product,"checked_Product",id)

    //  setCheckedItems([...checkedItems,{Product : Product} ])
    // console.log(varient_title,"varient_title",Product_title)
    setCheckedItems([...checkedItems, { Product_title: Product_title,varient:[varient_title] }]);

  };
  
  console.log(checkedItems, "checked_Product");

  return (
    <div>
      {productAndvarient.map((product) => (
        <div key={product.id}>
          <div className="d-flex">
            <Checkbox
               checked={checked[0] && checked[1]}
               indeterminate={checked[0] !== checked[1]}
              onChange={() =>
                handleProductCheckboxChange(product.id, product.title)
              }
              // onChange={()=>handleProductCheckboxChange(product.id,product)}
            />
            <p>{product.title}</p>
          </div>

          {product.variants.map((varient) => (
            <div key={varient.id} className="d-flex">
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={() => handleProductCheckboxChange(varient.id, product.title,varient.title)}
              />
              {/* <p>{varient}</p> */}
              <p>{varient.title}</p>
              {/* </div> */}
            </div>
          ))}

          <hr />
        </div>
      ))}
    </div>
  );
};

export default DynamicCheckboxGroups;

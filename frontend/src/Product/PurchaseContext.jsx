import React, { Children } from "react";
import { useContext, useState } from "react";
const BuyContext = React.createContext();
const PurchaseContext = ({ children }) => {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  return (
    <div>
      <BuyContext.Provider
        value={{
          id,
          title,
          desc,
          price,
          img,
          setImg,
          setPrice,
          setDesc,
          setTitle,
          setId,
        }}
      >
        {children}
      </BuyContext.Provider>
    </div>
  );
};

export default PurchaseContext;

export const usePurchase = () => {
  return useContext(BuyContext);
};

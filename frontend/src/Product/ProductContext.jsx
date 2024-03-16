import React, { useState } from "react";
import { useContext } from "react";

const PContext = React.createContext();

export const ProductContext = ({ children }) => {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [feedback, setFeedback] = useState([]);

  return (
    <div>
      <PContext.Provider
        value={{
          title,
          desc,
          price,
          img,
          feedback,
          setFeedback,
          setImg,
          setPrice,
          setDesc,
          setTitle,
          setId,
        }}
      >
        {children}
      </PContext.Provider>
    </div>
  );
};
export const usePContext = () => {
  return useContext(PContext);
};

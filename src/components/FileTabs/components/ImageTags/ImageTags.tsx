import React from "react";
import style from "./style/style.module.css";

interface ImageTagsProps {
  imageNames: string[];
  onUpload: () => void;
}

const ImageTags: React.FC<ImageTagsProps> = ({ imageNames, onUpload }) => {
  return (
    <div className={style.container}>
      <div className={style.tagsContainer}>
        {imageNames.map((name, index) => (
          <div key={index} className={style.imageTag}>
            {name}
          </div>
        ))}
      </div>
      <button className={style.uploadButton} onClick={onUpload}>
        Upload Images
      </button>
    </div>
  );
};

export default ImageTags;

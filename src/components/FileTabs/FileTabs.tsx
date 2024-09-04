import React, { useState } from "react";
import style from "./style/style.module.css";
import { FileTabsProps } from "./interface";
import Image from "next/image";
import { ImageTags } from "./components";

const FileTabs: React.FC<FileTabsProps> = ({
  tabs,
  initialActiveTabId = 0,
}) => {
  const [activeTabId, setActiveTabId] = useState(initialActiveTabId);
  const [image, setImage] = useState<string | null>(null);
  const [imageNames, setImageNames] = useState<string[]>([]);
  const [showTags, setShowTags] = useState<boolean>(false);

  const handleUploadImage = () => {
    setImage("/images/ImgC.png");
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  const handleSend = () => {
    if (image) {
      setImageNames([...imageNames, "ImgC.png"]);
      setShowTags(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.tabsContainer}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${style.tab} ${
              tab.id === activeTabId ? style.activeTab : style.inactiveTab
            }`}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={style.contentContainer}>
        {showTags && (
          <div className={style.tagsWrapper}>
            <ImageTags imageNames={imageNames} onUpload={handleUploadImage} />
          </div>
        )}
        <div
          className={showTags ? style.innerContentShowTags : style.innerContent}
        >
          {!image ? (
            <div className={style.centeredContent}>
              <button
                className={style.uploadButton}
                onClick={handleUploadImage}
              >
                Upload Images
              </button>
            </div>
          ) : !showTags ? (
            <div className={style.centeredContent}>
              <Image
                src={image}
                alt="Uploaded"
                className={style.image}
                width={300}
                height={300}
              />
            </div>
          ) : (
            <div className={style.rowContainer}>
              <Image
                src={image}
                alt="Uploaded"
                className={style.image}
                width={150}
                height={150}
              />
              <Image
                src={image}
                alt="Uploaded"
                className={style.image}
                width={150}
                height={150}
              />
              {[
                {
                  title: "Data IA",
                  labels: [
                    "KI67",
                    "Total Cells",
                    "Positive Cells",
                    "Negative Cells",
                  ],
                },
                {
                  title: "Data",
                  labels: [
                    "KI67",
                    "Total Cells",
                    "Positive Cells",
                    "Negative Cells",
                  ],
                },
                {
                  title: "Wrong Data",
                  labels: [
                    "KI67",
                    "Total Cells",
                    "Positive Cells",
                    "Negative Cells",
                  ],
                },
              ].map((box, index) => (
                <div key={index} className={style.box}>
                  <h3 className={style.boxTitle}>{box.title}</h3>
                  {box.labels.map((label, rowIndex) => (
                    <div key={rowIndex} className={style.inputRow}>
                      <label className={style.label}>{label}</label>
                      <input className={style.input} type="text" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          <div className={style.bottomContent}>
            {!showTags && !image ? (
              <button className={style.sendButton} onClick={handleSend}>
                Send
              </button>
            ) : !showTags ? (
              <>
                <button
                  className={style.deleteButton}
                  onClick={handleDeleteImage}
                >
                  Delete
                </button>
                <button className={style.sendButton} onClick={handleSend}>
                  Send
                </button>
              </>
            ) : (
              <>
                <button
                  className={style.deleteResultButton}
                  onClick={handleDeleteImage}
                >
                  Delete Result
                </button>
                <button
                  className={style.updateResultsButton}
                  onClick={handleSend}
                >
                  Update Results
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileTabs;

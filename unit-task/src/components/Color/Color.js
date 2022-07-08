import React from "react";
import styles from "./color.module.css";
function Color({ deleteColor, name, hex, id }) {
  return (
    <div>
      <div className={styles.colorList}>
        <div className={styles.scolorHexTitle}>
          <div className={styles.textPosition}>
            <div
              className={styles.colorPlace}
              style={{ backgroundColor: hex }}
            ></div>
            <p className={styles.hexText}>{hex}</p>
          </div>
          <p className={styles.titleText}>{name}</p>
        </div>
        <div className={styles.buttonsDeleteCreate}>
          <button
            data-id={id}
            onClick={(e) => deleteColor(e)}
            type="button"
            className={styles.deleteCreate}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Color;

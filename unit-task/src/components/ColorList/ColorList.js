import React from "react";
import Color from "../Color/Color";
// import "../../style/ColorsList.css";
import styles from "./colorList.module.css";
function ColorList({ colors, deleteColor }) {
  return (
    <div className={styles.colors}>
      {colors.map(({ id, name, hex }) => {
        return (
          <Color
            key={id}
            deleteColor={deleteColor}
            id={id}
            name={name}
            hex={hex}
          />
        );
      })}
    </div>
  );
}

export default ColorList;

import React from "react";
import ColorList from "../ColorList/ColorList";
import api from "../../api/colors";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  const [colors, setColors] = useState([]);
  const getColors = async () => {
    const respons = await api.get("/colors");
    return respons.data;
  };

  const deleteColor = async (e) => {
    await api.delete(`/colors/${e.target.dataset.id}`);
    getColors();
  };

  useEffect(() => {
    const getAllColors = async () => {
      const allColors = await getColors();
      if (allColors) setColors(allColors);
    };
    getAllColors();
  }, [colors]);
  return (
    <div>
      <div className={styles.headTitle}>
        <h1>Colors</h1>
      </div>
      <div className={styles.addNewColor}>
        <Link to={"/addNew"}>
          <button className={styles.addNew} type="button">
            Add new
          </button>
        </Link>
      </div>
      <ColorList deleteColor={deleteColor} colors={colors} />
    </div>
  );
}

export default Home;

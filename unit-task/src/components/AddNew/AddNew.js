import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/colors";
import { useNavigate } from "react-router";
// import "../style/AddNew.css";
import styles from "./addNew.module.css";
function AddNew() {
  const regx = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [hex, setHex] = useState("");
  const handleSave = () => {
    const data = { name, hex };
    if(name === "" || hex ===""){
      alert('Enter color name and hex name')
    }
    if (regx.test(hex))  {
      addNewColors(data);
      navigate("/");
    }
  };
  const addNewColors = async (data) => {
    const respons = await api.post("/colors", data);
    return respons.data;
  };
  return (
    <>
      <div className={styles.titlePlace}>
        <h1 className={styles.title}>Add New Color</h1>
      </div>
      <div className={styles.addNewPlace}>
        <form className={styles.addNewForm}>
          <label className={styles.addNewLabel}>
            <p className={styles.inputText}>Enter color name:</p>
            <input
              className={styles.inputPlace}
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className={styles.addNewLabel}>
            <p className={styles.inputText}>Enter hex name:</p>
            <input
              className={styles.inputPlace}
              type="text"
              name="hex"
              placeholder="Hex"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
            />
          </label>
          <button className={styles.btnSave} type="button" onClick={handleSave}>
            Save
          </button>

          <Link className={styles.linkBack} to={"/"}>
            <button className={styles.addBack} type="button">
              Back
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default AddNew;

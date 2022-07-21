import React,{useState} from "react";
import Styles from "../../styling/Categories.module.css";
import {GrFormSearch  } from "react-icons/gr";
import appdata from "./data.json"
const Categories = (props) => {
  const [getData,SetData]=useState(appdata.Apps);
    const [filtereddata,Setfilter]=useState();
    const{handleclick}=props
  return (
    <>
      <div className={Styles.apps_sidebar}>
        <div className={Styles.search_module} >
            <GrFormSearch style={{paddingTop:"5px",fontSize:"18px"}}/>
          <input className={Styles.input}
            type="text"
            placeholder="Search"
           
            spellcheck="false"
          />
          <editor-squiggler>
            <div class="ms-editor-squiggles-container"></div>
          </editor-squiggler>
        </div>
        <div class="categories module">
          <h2 className={Styles.sidebar_title}>Categories</h2>
          <ul>
            <li className={Styles.active} onClick={handleclick}>All</li>
            <li onClick={()=>handleclick("Activity Trackers")}>Activity Trackers</li>
            <li onClick={()=>handleclick("Step Trackers")}>Step Trackers</li>
            <li onClick={()=>handleclick("Scales")}>Scales</li>
            <li onClick={()=>handleclick("Lifestyle")}>Lifestyle</li>
            <li onClick={()=>handleclick("Wearables")}>Wearables</li>
            <li onClick={()=>handleclick("Fitness Apps")}>Fitness Apps</li>
            <li onClick={()=>handleclick("Exercise Equipment")}>Exercise Equipment</li>
            <li onClick={()=>handleclick("Fertility")}>Fertility</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;

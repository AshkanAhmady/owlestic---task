import { useState } from "react";
import { RegionSelectOptionsType } from "../../types";
import styles from "./SelectRegion.module.scss"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
]


const SelectRegion = () => {
    const [selected, setSelected] = useState({ value: "", label: "Filter by Region" })
    const [icon, setIcon] = useState(faAngleDown)
    const [showOptions, setShowOptions] = useState(false)

    const showOptionsHandler = () => {
        setIcon((prev) => prev == faAngleDown ? faAngleUp : faAngleDown)
        setShowOptions(!showOptions)
    }

    const selectHandler = (option: RegionSelectOptionsType) => {
        setSelected(option)
        setIcon((prev) => prev == faAngleDown ? faAngleUp : faAngleDown)
        setShowOptions(!showOptions)
        // and send request to do filter
    }

    return (
        <div className={styles.selectRegion}>
            <div onClick={showOptionsHandler} className={styles.input}>
                <span>{selected.label}</span>
                <FontAwesomeIcon
                    icon={icon}
                />
            </div>
            <div className={`${styles.options} ${!showOptions ? styles.Hideoptions : ''}`}>
                {options.map((option, index) => {
                    return <p onClick={() => selectHandler(option)} key={index}>{option.label}</p>
                })}
            </div>
        </div>
    );
}

export default SelectRegion;
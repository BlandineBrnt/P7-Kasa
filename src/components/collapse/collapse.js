import { useState, useRef } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./collapse.css";

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const parentRef = useRef();

    return (
        <div className="collapse">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                {props.label}
                <FaChevronUp
                    className={isOpen === false ? "isClose" : "isOpen"}
                />
            </button>

            <div
                className="contenuParent"
                ref={parentRef}
                style={
                    isOpen
                        ? {
                              height: parentRef.current.scrollHeight + "px",
                          }
                        : {
                              height: "0px",
                          }
                }
            >
                <div className="contenu">{props.children}</div>
            </div>
        </div>
    );
}

export default Collapse;

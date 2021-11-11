import s from "../../Friends/Friends.module.css";
import React, {useState} from "react";


let Pagination = (props) => {
    let pagesCount = Math.ceil(props.count / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let lastPortion = pages[pages.length - 1];
    let [activePortion, changeActivePortion] = useState(2)
    debugger;
    return <ul>
        {pages.filter(el => el == 1 || el == lastPortion || (el <= activePortion && el >= (activePortion - 2)) || (el >= activePortion && el <= (activePortion + 2)))
            .map(el => {
            return <li onClick={() => {
                props.setNewPageNumber(el);
                changeActivePortion(el);
            }} className={el === props.pageNumber && s.activePage}>{el}</li>
        })}
    </ul>
}

export default Pagination;
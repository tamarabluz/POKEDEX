import React from "react";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick} className="pagination-button"><div>◀️</div></button>
            <div className="pagination-page">{page} de {totalPages}</div>
            <button onClick={onRightClick} className="pagination-button"><div>▶️</div></button>
        </div>
    )
}

export default Pagination;
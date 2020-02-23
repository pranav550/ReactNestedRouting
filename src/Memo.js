import React, { Fragment } from "react";

function MemoComp({ name }) {
    console.log("Memo")
    return (

        <Fragment>
            <h1>{name}</h1>
        </Fragment>
    )
}

export default React.memo(MemoComp)
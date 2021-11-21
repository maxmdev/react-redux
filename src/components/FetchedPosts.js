import React from "react";

export default ({ posts }) => {
    if(!posts.length) {
        return (
            <button className='btn btn-primary'>Load</button>
        )
    }


    return (
        <div>

        </div>
    )
}
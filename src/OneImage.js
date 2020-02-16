import React from 'react';

const OneImage = ({src}) => {
    return(
        <div className="col-sm">
            <a href="details.html">
                <img alt="" src={src}
                className="img-fluid" />
            </a>
        </div>
    )
}

export default OneImage;
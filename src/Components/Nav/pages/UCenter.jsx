import React from 'react';

const UCenter = props => {
    console.log(props);
    return(
      <div>UCenter参数:{ props.match.params.name }</div>
    )
}

export default UCenter;

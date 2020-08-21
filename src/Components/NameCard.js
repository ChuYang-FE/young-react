import React from "react";

class NameCard extends React.Component {
  render() {
    const { name, phoneNum, city, tags } = this.props
    return (
      <div className="alert alert-success">
        <h4 className="alert-header">{name}</h4>
        <ul>
          <li>电话：{phoneNum}</li>
          <li>城市：{city}</li>
        </ul>
        <hr/>
        <p>
          { tags.map((tag,index) => (
            <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
          ))}
        </p>
      </div>
    )
  }
}

export default NameCard
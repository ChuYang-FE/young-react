import React, { useState, useEffect } from "react";

class TokenForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { setToken } = this.props;
    const token = this.tokenInput.value;
    if (token) {
      setToken(token);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="token"
          placeholder="请输入token"
          ref={(input) => {
            this.tokenInput = input;
          }}
        />
      </form>
    );
  }
}

const TokenApp = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  useEffect(() => {
    sessionStorage.setItem("token", token);
  });
  return (
    <div>
      <h1>Hello!</h1>
      {token ? token : <TokenForm setToken={setToken} />}
    </div>
  );
};

export default TokenApp;

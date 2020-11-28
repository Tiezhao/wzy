import React from "React";

import "./style.less";
import HomePageFooter from "./component/homePageFooter";
import OtherFooter from "./component/otherFooter";

class MyFooter extends React.Component {
  state = {
    sex: "meal",
  };

  render() {
    const url = window.location.pathname;

    // console.log("props", this.props);
    // console.log("state", this.state);

    return (
      <div className="myfooter">
        {url === "/app/dashboard" ? <HomePageFooter /> : <OtherFooter />}
      </div>
    );
  }
}

MyFooter.defaultProps = {
  age: 23,
};

export default MyFooter;

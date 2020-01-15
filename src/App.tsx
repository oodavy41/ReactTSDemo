import * as React from "react";

import "./App.css";

import Navigate from "@components/slidePanel";
import UploadPage from "@src/pages/upload";
import ShowCasePage from "@pages/showcase";

const pages = [UploadPage, ShowCasePage];
const names = ["UpLoad", "Showcase"];

export default class App extends React.Component<{}, { url: number }> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      url: 1
    };
  }
  changePage(index: number) {
    this.setState({ url: index });
  }
  render() {
    const PageContext = pages[this.state.url];
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Test Title</h1>
        <Navigate>
          {pages.map((page, index) => {
            return (
              <div 
                className="page-cell"
                onClick={() => {
                  this.changePage(index);
                }}
              >
                {names[index]}
              </div>
            );
          })}
        </Navigate>
        <PageContext></PageContext>
      </div>
    );
  }
}

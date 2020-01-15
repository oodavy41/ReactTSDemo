import * as React from "react";
import "./showcase.css";
import resources from "@utils/videoRequest";

import Page from "@components/pageContainer";
import VideoCard from "@components/videoCard";

const playDely = 250;
interface showCaseStates {
  videoArray: Array<string>;
  playingIndex: number;
}

export default class ShowCase extends React.Component<{}, showCaseStates> {
  stateList: boolean[] = [];
  timeouter: NodeJS.Timeout;
  constructor(props: showCaseStates) {
    super(props);
    this.state = {
      videoArray: resources,
      playingIndex: -1
    };
    this.stateList = this.state.videoArray.map(() => false);
  }

  componentDidMount() {}
  render() {
    return (
      <Page title="ShowCase Page">
        <div className="showcase-masonry">
          {this.state.videoArray.map((src, index) => {
            return (
              <VideoCard
                onPlayed={() => this.onPlayEnd(index)}
                onClickPlay={() => this.onPlayForce(index)}
                playIndex={this.state.playingIndex}
                reportVisiblilty={visible => {
                  this.getVisiblilty(visible, index);
                }}
                key={index}
                index={index}
                videoSrc={src}
              ></VideoCard>
            );
          })}
        </div>
      </Page>
    );
  }
  getVisiblilty = (visible: boolean, index: number) => {
    this.stateList[index] = visible;
    if (this.state.playingIndex < 0 && visible) {
      this.playVideo(index);
    }
    this.playVideoDely(visible, index);
  };

  playVideoDely(visible: boolean, index: number) {
    this.timeouter && clearTimeout(this.timeouter);
    this.timeouter = setTimeout(() => {
      !this.stateList[this.state.playingIndex] && this.playTopVideo();
    }, playDely);
  }

  onPlayForce(index: number) {
    this.playVideo(index);
  }

  onPlayEnd(index: number) {
    if (this.stateList[index + 1]) {
      this.playVideo(index + 1);
    } else {
      this.playTopVideo();
    }
  }
  playVideo(index: number) {
    this.setState({ playingIndex: index });
  }
  playTopVideo() {
    this.setState({ playingIndex: this.stateList.findIndex(state => state) });
  }
}

import * as React from "react";
import "./videoCard.css";

import viewPortHandler from "./viewPortHandler";

interface videoCardProps {
  videoSrc: string;
  index: number;
  playIndex: number;
  onPlayed: () => void;
  onClickPlay: () => void;
}

class VideoCard extends React.Component<videoCardProps> {
  videoElement: HTMLVideoElement;

  constructor(props: videoCardProps) {
    super(props);
    this.state = {
      playing: false
    };
  }

  componentDidMount() {
    const { onPlayed, onClickPlay } = this.props;
    if (this.videoElement) {
      this.videoElement.addEventListener("ended", onPlayed);
      this.videoElement.addEventListener("canplay", this.onCanPlay);
      this.videoElement.addEventListener("play", onClickPlay);
    }
  }

  componentDidUpdate() {
    const { index, playIndex } = this.props;
    if (index === playIndex) {
      this.videoElement.paused && this.videoElement.play();
    } else {
      this.videoElement.pause();
    }
  }
  componentWillUnmount() {
    const { onPlayed, onClickPlay } = this.props;
    this.videoElement.removeEventListener("ended", onPlayed);
    this.videoElement.removeEventListener("canplay", this.onCanPlay);
    this.videoElement.removeEventListener("play", onClickPlay);
  }
  render() {
    const { videoSrc, index } = this.props;
    return (
      <div className="video-card">
        <video className="video-element" ref={ref => (this.videoElement = ref)} src={videoSrc} controls width="320"></video>
        <div className="video-title">
          {`Video ${index}`}
          <br />
          12345678!@#$%^
        </div>
      </div>
    );
  }

  onCanPlay = () => {
    const { index, playIndex } = this.props;
    index === playIndex && this.videoElement.play();
  };
}

export default viewPortHandler(VideoCard);

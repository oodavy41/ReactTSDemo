import * as React from "react";
interface viewportHandlerProps {
  reportVisiblilty: (visibility: boolean) => void;
}

interface viewportHandlerStates {
  unloaded: boolean;
  visibility: boolean;
}

const handler = <P extends object>(Component: React.ComponentType<P>) =>
  class WithViewportHandler extends React.Component<P & viewportHandlerProps, viewportHandlerStates> {
    container: HTMLElement;
    viewObserver: IntersectionObserver;

    constructor(props: P & viewportHandlerProps) {
      super(props);
      this.state = {
        unloaded: true,
        visibility: false
      };
      this.viewObserver = new IntersectionObserver(this.onVisibilityChange, { threshold: 0.5 });
    }

    componentDidMount() {
      const { reportVisiblilty } = this.props;
      this.viewObserver.observe(this.container);
    }
    componentWillUnmount() {
      this.viewObserver.disconnect();
    }
    render() {
      const { reportVisiblilty } = this.props as viewportHandlerProps;
      return <div ref={ref => (this.container = ref)}>{this.state.unloaded ? "" : <Component {...this.props}></Component>}</div>;
    }
    onVisibilityChange = (elements: any) => {
      const { reportVisiblilty } = this.props;
      const visible = elements[0].isIntersecting;
      if (visible && this.state.unloaded) {
        this.setState({ unloaded: false });
      }
      reportVisiblilty(visible);
    };
  };

export default handler;

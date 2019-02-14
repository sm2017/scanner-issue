import React, {Component} from 'react';
import {Trans, withNamespaces} from "react-i18next";

type Props = {};

type State = {};

class Test extends Component<Props, State> {
  render() {
    return (
      <Trans i18nKey="myTest">
        Test Trans
      </Trans>
    );
  }
}

export default  withNamespaces()(Test);

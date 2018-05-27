// @flow

import React, { Component } from 'react';
import type { Node } from 'react';

import Toast from 'components/common/toast';
import Header from './components/header';
import Footer from './components/footer';

import styles from './layout.styles.pcss';

type PropsType = {
  children: Node,
};

class Layout extends Component<PropsType> {
  render(): Node {
    return (
      <div className={styles.page}>
        <Header />

        <div className={styles.content}>
          {this.props.children}
        </div>

        <Footer />

        <Toast />
      </div>
    );
  }
}

export default Layout;

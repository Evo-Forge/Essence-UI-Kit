import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Paper} from 'react-essence';

class MateriableOther extends React.Component {

    render() {
        return (
          <Block>
            <Block className={'header-bg e-background-indigo-500'}>
            </Block>
            <Block className={'main-bg e-background-grey-100'}>
              <Block className={'e-container '}>
                <Paper className={'e-text-indigo-400 e-background-white'}>
                  <Text type={'h2'} classes={'e-text-center e-display-2'}>
                    headings
                  </Text>
                </Paper>
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = MateriableOther;

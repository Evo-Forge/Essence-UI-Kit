import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem} from 'react-essence';

class MateriableBlog extends React.Component {

    render() {
        return (
        <Block>
          <Block classes='top-blog e-background-indigo-500'>
          </Block>
      		<Block className={'e-container go-top'}>
            <Block className={'e-row'}>
              <Block classes={'brick brick-4 border'}>
                <Text type={'h1'} classes={'e-text-center e-text-white no-margin-bottom'}>Materiable
                </Text>
                <Text type={'p'} classes={'e-text-center e-text-light-blue-300 e-right under-right'}>Blog
                </Text>
              </Block>
              <Block classes={'brick brick-8 border'}>
              </Block>
            </Block>
  				</Block>
        </Block>

        );
    }
}

module.exports = MateriableBlog;

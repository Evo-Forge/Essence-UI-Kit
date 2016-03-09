import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Tab} from 'react-essence';
var tabs = {
 'header': [
   { 'context': (<Text classes={'e-text-uppercase'}>About Me</Text>) },
   { 'context': (<Text classes={'e-text-uppercase'}>follow me</Text>) },
   { 'context': (<Text classes={'e-text-uppercase'}>My works</Text>) }
  ]
};

class MateriableBlog extends React.Component {

    render() {
        return (
        <Block className={'materiable-blog'}>
          <Block classes='top-blog e-background-indigo-500'>
          </Block>
      		<Block className={'e-container go-top'}>
            <Block className={'e-row'}>
              <Block classes={'brick brick-4 border'}>
                <Text type={'h1'} classes={'e-text-center e-text-white no-margin-bottom'}>Materiable
                </Text>
                <Text type={'p'} classes={'e-text-center e-text-light-blue-300 e-right under-right'}>Blog
                </Text>
                <Tab
                  data={tabs}
                  classes={'e-background-indigo-500 e-text-grey-50'}
                  indicator={'e-background-red-500'}/>
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

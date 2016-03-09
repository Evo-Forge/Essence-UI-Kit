import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Paper} from 'react-essence';

class MateriableOther extends React.Component {

    render() {
        return (
          <Block className={'materiables-other'}>
            <Block className={'header-bg e-background-indigo-500'}>
            </Block>
            <Block className={'main-bg e-background-grey-100'}>
              <Block className={'e-container '}>
                <Paper className={'padding-50 e-background-white negative-margin'}>
                  <Text type={'h2'} classes={'e-text-left e-text-grey-400 e-text-uppercase e-display-1'}>
                    headings
                  </Text>
                  <Text type={'p'} classes={'e-text-left e-text-grey-800 e-body2'}>
                    When you decide to move to self-employment, the first destination will mostly be a small room in your home,
                    trying through it to manage your business and projects. Working at home has various disadvantages,
                    including lack of focus, which is the first problem that we should avoid.
                  </Text>
                  <Text type={'h1'} classes={'e-text-left e-text-black e-display-2'}>
                    Heading h1
                  </Text>
                  <Text type={'h2'} classes={'e-text-left e-text-black e-display-1'}>
                    Heading h2
                  </Text>
                  <Text type={'h3'} classes={'e-text-left e-text-grey-600 e-headline'}>
                    Heading h3
                  </Text>
                  <Text type={'h4'} classes={'e-text-left e-text-black e-title'}>
                    Heading h4
                  </Text>
                  <Text type={'h5'} classes={'e-text-left e-text-black e-subhead'}>
                    Heading h5
                  </Text>
                  <Text type={'h6'} classes={'e-text-left e-text-black e-body2'}>
                    Heading h6
                  </Text>
                  <Text type={'h2'} classes={'e-text-left e-margin-top-100 e-text-grey-400 e-text-uppercase e-display-1'}>
                    raised flat buttons
                  </Text>
                  <Block>
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'flat'} />
                    <Btn label={'Button'} ripple={false} type={'danger'} className={'flat'} />
                    <Btn label={'Button'} ripple={false} type={'succes'} className={'flat'} />
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'flat e-background-indigo-800'} />
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'flat e-background-yellow-800'} />
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'flat e-background-pink-400'} />
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'flat e-background-black'} />
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'flat e-background-grey-800'} />
                  </Block>
                  <Block>
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'raised e-background-white e-text-blue-600'} />
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'raised e-background-white e-text-red-600'} />
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'raised e-background-white e-text-green-700'} />
                    <Btn label={'Button'} ripple={false} type={'primary'} className={'raised e-background-white e-text-indigo-800'} />
                  </Block>
                </Paper>
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = MateriableOther;

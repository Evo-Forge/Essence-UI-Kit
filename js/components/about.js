import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Icon, Image, Text, Utils, Menu, List, ListItem, Paper } from 'react-essence';

class MateriableAbout extends React.Component {

    render() {
        return (
          <Block className={'materiables-about e-background-grey-100'}>
            <Block className={'header-bg e-background-indigo-500'}>{/*light blue background*/}</Block>
            <Block className={'e-container'}>
              <Paper className={'e-background-white container'}>
                <Text type={'h2'} classes={'e-text-left e-text-grey-400 e-text-uppercase e-display-1'}>
                  our vision
                </Text>
                <Text type={'p'} classes={'e-text-left e-text-grey-800 e-body2'}>
                  When you decide to move to self-employment, the first destination will mostly be a small room in your home,
                  trying through it to manage your business and projects. Working at home has various disadvantages,
                  including lack of focus, which is the first problem that we should avoid.
                </Text>
                <Text type={'h2'} classes={'e-text-left e-text-grey-400 e-text-uppercase e-display-1 e-margin-top-50'}>
                  our service
                </Text>
                <Block className={'flex-row e-margin-top-15'}>

                  <Block className={'flex-container'}>
                    <Block className={'radius-block e-text-center e-margin-bottom-15 e-background-grey-500'}>
                      <Icon name={"image-timer-auto"} className={"e-text-grey-200"} />
                    </Block>
                    <Text type={'h4'} classes={'e-text-center e-title'}>
                      H.Rackham
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-800 e-body2 e-margin-bottom-15'}>
                      Concept Strategist
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-left e-text-grey-800 e-body2'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </Text>
                    <List type={'inline'}>
                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"action-android"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"social-share"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"hardware-cast-connected"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"device-bluetooth-connected"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>
                    </List>

                    <List type={'inline'} className={'e-margin-top-15'}>
                      <ListItem>
                        <Text type={'a'} href={'#'} classes={'e-button e-text-grey-500 e-text-uppercase'}>
                          hire me
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} href={'#'} classes={'e-button e-text-blue-500 e-text-uppercase'}>
                          more
                        </Text>
                      </ListItem>
                    </List>
                  </Block>

                  <Block className={'flex-container'}>
                    <Block className={'radius-block e-text-center e-margin-bottom-15 e-background-grey-500'}>
                      <Icon name={"image-timer-auto"} className={"e-text-grey-200"} />
                    </Block>
                    <Text type={'h4'} classes={'e-text-center e-title'}>
                      H.Rackham
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-800 e-body2 e-margin-bottom-15'}>
                      Concept Strategist
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-left e-text-grey-800 e-body2'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </Text>
                    <List type={'inline'}>
                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"action-android"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"social-share"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"hardware-cast-connected"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"device-bluetooth-connected"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>
                    </List>

                    <List type={'inline'} className={'e-margin-top-15'}>
                      <ListItem>
                        <Text type={'a'} href={'#'} classes={'e-button e-text-grey-500 e-text-uppercase'}>
                          hire me
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} href={'#'} classes={'e-button e-text-blue-500 e-text-uppercase'}>
                          more
                        </Text>
                      </ListItem>
                    </List>
                  </Block>

                  <Block className={'flex-container'}>
                    <Block className={'radius-block e-text-center e-margin-bottom-15 e-background-grey-500'}>
                      <Icon name={"image-timer-auto"} className={"e-text-grey-200"} />
                    </Block>
                    <Text type={'h4'} classes={'e-text-center e-title'}>
                      H.Rackham
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-800 e-body2 e-margin-bottom-15'}>
                      Concept Strategist
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-left e-text-grey-800 e-body2'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </Text>
                    <List type={'inline'}>
                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"action-android"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"social-share"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"hardware-cast-connected"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} classes={'e-text-center e-button'} hreft={'#'}>
                          <Icon name={"device-bluetooth-connected"} className={"e-text-grey-600"} />
                        </Text>
                      </ListItem>
                    </List>

                    <List type={'inline'} className={'e-margin-top-15'}>
                      <ListItem>
                        <Text type={'a'} href={'#'} classes={'e-button e-text-grey-500 e-text-uppercase'}>
                          hire me
                        </Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'a'} href={'#'} classes={'e-button e-text-blue-500 e-text-uppercase'}>
                          more
                        </Text>
                      </ListItem>
                    </List>
                  </Block>


                </Block>
              </Paper>
            </Block>
          </Block>
        );
    }
}

module.exports = MateriableAbout;

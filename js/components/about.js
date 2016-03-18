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
                  our team
                </Text>
                <Block className={'flex-row e-margin-top-15'}>

                  <Block className={'flex-container'}>
                    <Block className={'radius-block e-text-center e-margin-bottom-15 e-background-grey-500'}>
                      <Icon name={"image-timer-auto"} className={"e-text-grey-200"} />
                    </Block>
                    <Text type={'h4'} classes={'e-text-center e-title'}>
                      H.Rackham
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-400 e-body2 e-margin-bottom-15'}>
                      Concept Strategist
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-left e-text-grey-400 e-body2'}>
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

                    <Block className={'button-container'}>
                      <Btn label={'hire me'} ripple={true} type={'primary'} className={'flat e-background-white e-text-grey-800'} />
                      <Btn label={'more'} ripple={true} type={'primary'} className={'flat e-background-white e-text-blue-600'} />
                    </Block>
                  </Block>

                  <Block className={'flex-container'}>
                    <Block className={'radius-block e-text-center e-margin-bottom-15 e-background-grey-500'}>
                      <Icon name={"image-timer-auto"} className={"e-text-grey-200"} />
                    </Block>
                    <Text type={'h4'} classes={'e-text-center e-title'}>
                      H.Rackham
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-400 e-body2 e-margin-bottom-15'}>
                      Concept Strategist
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-left e-text-grey-400 e-body2'}>
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
                    <Block className={'button-container'}>
                      <Btn label={'hire me'} ripple={true} type={'primary'} className={'flat e-background-white e-text-grey-800'} />
                      <Btn label={'more'} ripple={true} type={'primary'} className={'flat e-background-white e-text-blue-600'} />
                    </Block>

                  </Block>

                  <Block className={'flex-container'}>
                    <Block className={'radius-block e-text-center e-margin-bottom-15 e-background-grey-500'}>
                      <Icon name={"image-timer-auto"} className={"e-text-grey-200"} />
                    </Block>
                    <Text type={'h4'} classes={'e-text-center e-title'}>
                      H.Rackham
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-400 e-body2 e-margin-bottom-15'}>
                      Concept Strategist
                    </Text>
                    <Text type={'p'} classes={'e-text-center e-text-left e-text-grey-400 e-body2'}>
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

                    <Block className={'button-container'}>
                      <Btn label={'hire me'} ripple={true} type={'primary'} className={'flat e-background-white e-text-grey-800'} />
                      <Btn label={'more'} ripple={true} type={'primary'} className={'flat e-background-white e-text-blue-600'} />
                    </Block>
                  </Block>
                </Block>

                <Block className={'flex-row'}>
                  <Block className={'flex-item e-margin-top-50'}>
                    <Text type={'h2'} classes={'e-text-left e-text-grey-400 e-text-uppercase e-display-1'}>
                      get social
                    </Text>
                    <Block className={'button-container'}>
                      <Btn icon={'action-accessibility'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                      <Btn icon={'action-info-outline'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                      <Btn icon={'action-loyalty'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                      <Btn icon={'action-thumb-up'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                      <Btn icon={'av-timer'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                    </Block>
                  </Block>

                  <Block className={'flex-item e-margin-top-50'}>
                    <Text type={'h2'} classes={'e-text-left e-text-grey-400 e-text-uppercase e-display-1'}>
                      contact info
                    </Text>

                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-400'}>
                      <Text>Section 1.10.33 of de Finibus</Text>
                      <Text type={'span'}>Bonorum et malorum sk</Text>
                      <Text type={'span'}>9002 st.</Text>
                    </Text>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-400'}>
                      <Text type={'span'}>+3321 1123 456227</Text>
                      <Text type={'span'}>+3321 1123 456227</Text>
                    </Text>

                  </Block>

                  <Block className={'flex-item full-width e-margin-top-15'}>
                    <Text type={'h2'} classes={'e-text-left e-text-grey-400 e-text-uppercase e-display-1'}>
                      from twitter
                    </Text>

                    <Block className={'padding-right'}>
                      <Text type={'p'} className={'p-grey e-background-grey-400 e-text-grey-600 e-body1'}>
                        <Text type={'a'} href={'#'} className={'e-text-light-blue-500'}>@Toriam</Text>
                          <Text type={'span'} > Lorem ipsum si simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <Text type={'span'} className={'text-underline'}>#theme</Text></Text>
                      </Text>

                      <Text type={'p'} className={'p-time e-body1 e-text-grey-600'}>
                        <Icon name={"image-adjust"} />
                        <Text type={'span'}>15 minutes ago</Text>
                      </Text>
                    </Block>

                    <Block className={'padding-left'}>
                      <Text type={'p'} className={'p-grey e-background-grey-400 e-text-grey-600 e-body1'}>
                        <Text type={'a'} href={'#'} className={'e-text-light-blue-500'}>@Toriam</Text>
                        <Text type={'span'} > Lorem ipsum si simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <Text type={'span'} className={'text-underline'}>#theme</Text></Text>
                      </Text>

                      <Text type={'p'} className={'p-time e-body1 e-text-grey-600'}>
                        <Icon name={"image-adjust"} />
                        <Text type={'span'}>15 minutes ago</Text>
                      </Text>
                    </Block>

                  </Block>


                </Block>
              </Paper>
            </Block>
          </Block>
        );
    }
}

module.exports = MateriableAbout;

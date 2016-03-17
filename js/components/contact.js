import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Paper, Icon } from 'react-essence';
import Input from 'essence-input';

class MateriableContact extends React.Component {

    render() {
        return (
          <Block className={'materiables-contact'} id={'contact'}>
            <Block className={'header-bg-big'}>
            </Block>
            <Block className={'e-background-grey-100'}>
              <Block className={'e-container '}>
                <Paper className={'padding-50 e-background-white negative-margin container'}>
                  <Block classes={'e-row'}>
                    <Block classes={'brick brick-6'}>
                      <Text type={'h2'} classes={'e-text-left e-text-grey-800 e-text-uppercase e-headline'}>
                        send a message
                      </Text>
                      <Block>
                        <Icon name={"social-person"} className={"e-text-grey-800"} />
                        <Input type={'text'} name={'label'} label={'Your name'} />
                      </Block>
                      <Block>
                        <Icon name={"communication-email"} className={"e-text-grey-800 "} />
                        <Input type={'email'} name={'label'} label={'Your email'} />
                      </Block>
                      <Block>
                        <Icon name={"social-whatshot"} className={"e-text-grey-800 "} />
                        <Input type={'text'} name={'label'} label={'Your job'} />
                      </Block>
                      <Block>
                        <Icon name={"communication-messenger"} className={"e-text-grey-800 "} />
                        <Input type={'text'} name={'label'} label={'Your message'} />
                      </Block>
                      <Btn label={'Send message'} ripple={true} type={'primary'} className={'flat e-background-white e-text-blue-600 e-right'} />
                      <Btn label={'Clear'} ripple={true} type={'primary'} className={'flat e-background-white e-text-grey-800 e-right'} />
                    </Block>
                    <Block classes={'brick brick-6'}>
                      <Text type={'h2'} classes={'e-text-left e-text-grey-800 e-text-uppercase e-headline'}>
                        get social
                      </Text>
                      <Btn icon={'action-accessibility'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                      <Btn icon={'action-info-outline'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                      <Btn icon={'action-loyalty'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                      <Btn icon={'action-thumb-up'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                      <Btn icon={'av-timer'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                      <Block classes={'brick brick-6 e-padding-top-50 contact-info'}>
                        <Text type={'h2'} classes={'e-text-left e-text-grey-800 e-text-uppercase e-headline'}>
                          contact info
                        </Text>
                        <Text type={'p'} classes={'e-text-left e-body1'}>
                          Section 1.10.33 of de Finibus
                          Bonorum et malorum sk
                          9002 st.
                        </Text>
                        <Text type={'p'} classes={'e-text-left e-body1'}>
                          +3321 1123 456227
                        </Text>
                        <Text type={'p'} classes={'e-text-left e-body1'}>
                          +3321 1123 456227
                        </Text>
                      </Block>
                      <Block classes={'brick brick-6 e-padding-top-50 contact-info'}>
                      </Block>
                    </Block>
                  </Block>
                </Paper>
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = MateriableContact;

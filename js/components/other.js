import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Paper } from 'react-essence';
import Chip from 'essence-chip';

var ChipNoIconNonDeletable = {
  name: 'noiconnondeletable',
  text: [<span>Material design</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

var ChipNoIconNonDeletable1 = {
  name: 'noiconnondeletable',
  text: [<span>Blog theme</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

var ChipNoIconNonDeletable2 = {
  name: 'noiconnondeletable',
  text: [<span>Html template</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

var ChipNoIconNonDeletable3 = {
  name: 'noiconnondeletable',
  text: [<span>UX</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

var ChipNoIconNonDeletable4 = {
  name: 'noiconnondeletable',
  text: [<span>UI</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

var ChipNoIconNonDeletable5 = {
  name: 'noiconnondeletable',
  text: [<span>Fully responsive template</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

var ChipNoIconNonDeletable6 = {
  name: 'noiconnondeletable',
  text: [<span>DS</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

var ChipNoIconNonDeletable7 = {
  name: 'noiconnondeletable',
  text: [<span>Workflow</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

var ChipNoIconNonDeletable8 = {
  name: 'noiconnondeletable',
  text: [<span>Wordpress</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

class MateriableOther extends React.Component {

    render() {
        return (
          <Block className={'materiables-other'} id={'pages'}>
            <Block className={'header-bg e-background-indigo-500'}>
              {/* <Btn icon={'hardware-keyboard-arrow-down'} ripple={true} type={'fab'} className={'fab e-text-white hide-fab e-btn-fab adjust-fab-header e-background-pink-A200'} /> */}
            </Block>
            <Block className={'main-bg e-background-grey-100'}>
              <Block className={'e-container '}>
                <Paper className={'padding-50 e-background-white negative-margin container'}>
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
                  <Block className={'flex-container'}>
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat'} />
                    <Btn label={'Button'} ripple={true} type={'danger'} className={'flat'} />
                    <Btn label={'Button'} ripple={true} type={'succes'} className={'flat'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-indigo-800'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-yellow-800'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-pink-400'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-black'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-grey-800'} />
                  </Block>
                  <Block className={'flex-container'}>
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'raised e-background-white e-text-blue-600'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'raised e-background-white e-text-red-600'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'raised e-background-white e-text-green-700'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'raised e-background-white e-text-indigo-800'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'raised e-background-white e-text-yellow-800'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'raised e-background-white e-text-pink-400'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'raised e-background-white e-text-black'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'raised e-background-white e-text-grey-800'} />
                  </Block>
                  <Block className={'flex-container'}>
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-white e-text-blue-600'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-white e-text-red-600'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-white e-text-green-700'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-white e-text-indigo-800'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-white e-text-yellow-800'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-white e-text-pink-400'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-white e-text-black'} />
                    <Btn label={'Button'} ripple={true} type={'primary'} className={'flat e-background-white e-text-grey-800'} />
                  </Block>
                  <Text type={'h2'} classes={'e-text-left e-margin-top-100 e-text-grey-400 e-text-uppercase e-display-1'}>
                    floating action buttons
                  </Text>
                  <Block className={'flex-container'}>
                    <Btn icon={'content-add'} ripple={true} type={'fab'} className={'fab e-text-white e-background-blue-600'} />
                    <Btn icon={'content-add'} ripple={true} type={'fab'} className={'fab e-text-white e-background-red-600'} />
                    <Btn icon={'content-add'} ripple={true} type={'fab'} className={'fab e-text-white e-background-green-700'} />
                    <Btn icon={'content-add'} ripple={true} type={'fab'} className={'fab e-text-white e-background-indigo-800'} />
                    <Btn icon={'content-add'} ripple={true} type={'fab'} className={'fab e-text-white e-background-yellow-800'} />
                    <Btn icon={'content-add'} ripple={true} type={'fab'} className={'fab e-text-white e-background-pink-400'} />
                    <Btn icon={'content-add'} ripple={true} type={'fab'} className={'fab e-text-white e-background-black'} />
                    <Btn icon={'content-add'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-700'} />
                  </Block>
                    <Text type={'h2'} classes={'e-text-left e-margin-top-100 e-text-grey-400 e-text-uppercase e-display-1'}>
                      social icons
                    </Text>
                    <Block className={'flex-container'}>
                    <Btn icon={'action-accessibility'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                    <Btn icon={'action-info-outline'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                    <Btn icon={'action-loyalty'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                    <Btn icon={'action-thumb-up'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                    <Btn icon={'av-timer'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                    <Btn icon={'communication-stay-primary-portrait'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                    <Btn icon={'hardware-security'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                    <Btn icon={'action-accessibility'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                  </Block>
                  <Block classes={'length-small'}>
                    <Text type={'h2'} classes={'e-text-left e-margin-top-100 e-text-grey-400 e-text-uppercase e-display-1'}>
                      tags
                    </Text>
                    <Chip data={ChipNoIconNonDeletable} className={'margin-chip'} /><Chip data={ChipNoIconNonDeletable1} className={'margin-chip'} /><Chip data={ChipNoIconNonDeletable2} className={'margin-chip'} /><Chip data={ChipNoIconNonDeletable3} className={'margin-chip'} />
                    <Chip data={ChipNoIconNonDeletable4} className={'margin-chip'} /><Chip data={ChipNoIconNonDeletable5} className={'margin-chip'} /><Chip data={ChipNoIconNonDeletable6} className={'margin-chip'} /><Chip data={ChipNoIconNonDeletable7} className={'margin-chip'} />
                    <Chip data={ChipNoIconNonDeletable} className={'margin-chip'} /><Chip data={ChipNoIconNonDeletable8} className={'margin-chip'} />
                  </Block>
                  <Block>
                    <Text type={'h2'} classes={'e-text-left e-margin-top-100 e-text-grey-400 e-text-uppercase e-display-1'}>
                      quotes
                    </Text>
                    <Block classes={'left-border length-small e-padding-left-25'}>
                      <Text type={'em'} classes={'e-text-left e-text-grey-600 e-headline'}>
                        "If we could sell our experiences for what they cost us, we'd all be millionaires." - Abigail Van Buren
                      </Text>
                    </Block>
                  </Block>
                </Paper>
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = MateriableOther;

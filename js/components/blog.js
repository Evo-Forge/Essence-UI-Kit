import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Divider, Icon, Image, Menu, List, ListItem} from 'react-essence';
import Tab from 'essence-tab';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';
import Chip from 'essence-chip';

var ChipNoIconNonDeletable1 = {
  name: 'ChipNoIconNonDeletable',
  text: [<span>Material design</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
}
var ChipNoIconNonDeletable2 = {
  name: 'ChipNoIconNonDeletable',
  text: [<span>Blog Theme</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
}
var ChipNoIconNonDeletable3 = {
  name: 'ChipNoIconNonDeletable',
  text: [<span>Fully responsive template</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
}
var ChipNoIconNonDeletable4 = {
  name: 'ChipNoIconNonDeletable',
  text: [<span>Workflow</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
}
var ChipNoIconNonDeletable5 = {
  name: 'ChipNoIconNonDeletable',
  text: [<span>Material design</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
}
var ChipNoIconNonDeletable6 = {
  name: 'ChipNoIconNonDeletable',
  text: [<span>Html template</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
}

var tabs = {
 'header': [
   { 'context': (<Text>Latest</Text>) },
   { 'context': (<Text>Popular</Text>) },
   { 'context': (<Text>Top Rating</Text>) }
  ],
  'rows': [
   (<Block>
     <List type={'navigation'} classes={'e-twolinelist'}>
       <ListItem>
        <Text type={'a'}>
         <Image src={'http://www.1-computerdesks.com/images/Sunteam/2015_LAPTOP_DESK_A_250.jpg'} alt={'Desk'} classes={'e-left poze-latest'}/>
         <Block classes={'content e-left'}>
          <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
          <Text classes={'secondary'}>Jan 9, 2016</Text>
         </Block>
        </Text>
       </ListItem>
      <Divider classes={'thinnest e-background-grey-200'} />
       <ListItem>
         <Text type={'a'}>
          <Image src={'http://www.1-computerdesks.com/images/Sunteam/2015_LAPTOP_DESK_A_250.jpg'} alt={'Desk'} classes={'e-left poze-latest'}/>
          <Block classes={'content e-left'}>
           <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
           <Text classes={'secondary'}>Jan 9, 2016</Text>
          </Block>
         </Text>
       </ListItem>
       <Divider classes={'thinnest e-background-grey-200'} />
       <ListItem>
         <Text type={'a'}>
          <Image src={'http://www.1-computerdesks.com/images/Sunteam/2015_LAPTOP_DESK_A_250.jpg'} alt={'Desk'} classes={'e-left poze-latest'}/>
          <Block classes={'content e-left'}>
           <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
           <Text classes={'secondary'}>Jan 9, 2016</Text>
          </Block>
         </Text>
       </ListItem>
      </List>
    </Block>
   ),
   (<Text>This is the context for Tab 2</Text>),
   (<Text>This is the context for Tab 2</Text>)
 ]
};

var tabs = {
 'header': [
   { 'context': (<Text>About me</Text>) },
   { 'context': (<Text>Follow me</Text>) },
   { 'context': (<Text>My works</Text>) }
],

  'rows': [
   (<Block>
      <Card>
        <CardContent className={'e-text-center'}>
          <List type={'inline'}>
            <ListItem>
              <Btn icon={'social-person'} ripple={false} type={'succes'} classes={'fab e-background-deep-purple-A200'} />
            </ListItem>
            <ListItem>
              <Image src={'http://i.skyrock.net/8001/80148001/pics/3129738968_1_10_BuQ0dDiz.jpg'} className={'profil'} />
            </ListItem>
            <ListItem>
              <Btn icon={'social-person'} ripple={false} type={'info'} className={'fab'} />
            </ListItem>
          </List>
          <Block>
            <Text type={'p'} classes={'e-text-grey-800 e-body2'}>Leonard J. Kem
            </Text>
            <Text type={'span'} classes={'e-text-center e-caption'}>
              <Icon name={"communication-location-on"} className={"e-text-grey-700"} />
              San Francisco CA</Text>
            <Block classes={'bl-padding'}>
              <Text type={'span'} classes={'e-text-center e-caption'}>
                Lorem ipsum dolor sit amet, eum altera putent eleifend ut. Est an facer graeco nominavi.
              </Text>
            </Block>
          </Block>
          <Text type={'a'} classes={'e-text-center e-caption e-body2 e-text-blue-400'}>More</Text>
        </CardContent>
      </Card>
      <Card ClassNames={'e-text-left'}>
        <CardHeader>
        <Text type={'h2'} classes={'e-text-uppercase e-title'}> Latest Conmments </Text>
        </CardHeader>
        <CardContent>
          <Block>
            <Text type={'p'} classes={'e-subhead'}>
              <Text type={'a'} classes={'e-text-center e-subhead e-text-blue-400'}>Steve Pancake </Text>
            commented on
            </Text>
            <Text type={'p'} classes={'e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet
            </Text>
            <Block classes={'e-background-grey-200 bl-padding'}>
              <Text type={'span'} classes={'e-text-center e-caption'}>
                Lorem ipsum dolor sit amet, eum altera putent eleifend ut. Est an facer graeco nominavi.
              </Text>
            </Block>
            <Text type={'span'} classes={'e-text-center e-caption'}>
              <Icon name={"image-panorama-fisheye"} className={"e-text-grey-700"} />
              15 minutes ago</Text>
            <Divider classes={'thinnest e-background-grey-200'} />
          </Block>
          <Block>
            <Text type={'p'} classes={'e-subhead'}>
              <Text type={'a'} classes={'e-text-center e-subhead e-text-blue-400'}>Steve Pancake </Text>
            commented on
            </Text>
            <Text type={'p'} classes={'e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet
            </Text>
            <Block classes={'e-background-grey-200 bl-padding'}>
              <Text type={'span'} classes={'e-text-center e-caption'}>
                Lorem ipsum dolor sit amet, eum altera putent eleifend ut. Est an facer graeco nominavi.
              </Text>
            </Block>
            <Text type={'span'} classes={'e-text-center e-caption'}>
              <Icon name={"image-panorama-fisheye"} className={"e-text-grey-700"} />
              15 minutes ago</Text>
            <Divider classes={'thinnest e-background-grey-200'} />
          </Block>
          <Block>
            <Text type={'p'} classes={'e-subhead'}>
              <Text type={'a'} classes={'e-text-center e-subhead e-text-blue-400'}>Steve Pancake </Text>
            commented on
            </Text>
            <Text type={'p'} classes={'e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet
            </Text>
            <Block classes={'e-background-grey-200 bl-padding'}>
              <Text type={'span'} classes={'e-text-center e-caption'}>
                Lorem ipsum dolor sit amet, eum altera putent eleifend ut. Est an facer graeco nominavi.
              </Text>
            </Block>
            <Text type={'span'} classes={'e-text-center e-caption'}>
              <Icon name={"image-panorama-fisheye"} className={"e-text-grey-700"} />
              15 minutes ago</Text>
          </Block>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <Tab
          data={tabs}
          classes={'e-background-cyan-500 e-text-grey-50 e-caption nav-no-padding'}
          indicator={'e-background-red-500'}/>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Text type={'h2'} classes={'e-text-uppercase e-title'}>Categories </Text>
        </CardHeader>
        <CardContent className={'e-text-grey-700'}>
          <List type={'navigation'}>
            <ListItem>
            <Text type={'a'}>
              <Icon name={"action-home e-left"} className={"e-text-grey-700"} />
              <Block classes={'content e-left'}>Home</Block>
              </Text>
            </ListItem>
            <ListItem>
              <Text type={'a'}>
              <Icon name={"av-web e-left"} className={"e-text-grey-700"} />
              <Block classes={'content e-left'}>Layout</Block>
              </Text>
            </ListItem>
            <ListItem>
              <Text type={'a'}>
              <Icon name={"hardware-keyboard-alt e-left"} className={"e-text-pink-A400"} />
              <Block classes={'content e-left e-text-black'}>Blog</Block>
              </Text>
            </ListItem>
            <ListItem>
              <Text type={'a'}>
              <Icon name={"action-receipt e-left"} className={"e-text-grey-700"} />
              <Block classes={'content e-left'}>Pages</Block>
              </Text>
            </ListItem>
            <ListItem>
              <Text type={'a'}>
              <Icon name={"editor-insert-photo e-left"} className={"e-text-grey-700"} />
              <Block classes={'content e-left'}>Portofolio</Block>
              </Text>
            </ListItem>
            <ListItem>
              <Text type={'a'}>
              <Icon name={"communication-email e-left"} className={"e-text-grey-700"} />
              <Block classes={'content e-left'}>Contact</Block>
              </Text>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Text type={'h2'} classes={'e-text-uppercase e-title'}>Popular Posts </Text>
        </CardHeader>
        <CardContent>
        <List type={'navigation'} classes={'e-twolinelist'}>
          <ListItem>
           <Text type={'a'}>
            <Image src={'http://www.1-computerdesks.com/images/Sunteam/2015_LAPTOP_DESK_A_250.jpg'} alt={'Desk'} classes={'e-left poze-latest'}/>
            <Block classes={'content e-left'}>
             <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
             <Text classes={'secondary'}>Jan 9, 2016</Text>
            </Block>
           </Text>
          </ListItem>
         <Divider classes={'thinnest e-background-grey-200'} />
          <ListItem>
            <Text type={'a'}>
             <Image src={'http://www.1-computerdesks.com/images/Sunteam/2015_LAPTOP_DESK_A_250.jpg'} alt={'Desk'} classes={'e-left poze-latest'}/>
             <Block classes={'content e-left'}>
              <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
              <Text classes={'secondary'}>Jan 9, 2016</Text>
             </Block>
            </Text>
          </ListItem>
          <Divider classes={'thinnest e-background-grey-200'} />
          <ListItem>
            <Text type={'a'}>
             <Image src={'http://www.1-computerdesks.com/images/Sunteam/2015_LAPTOP_DESK_A_250.jpg'} alt={'Desk'} classes={'e-left poze-latest'}/>
             <Block classes={'content e-left'}>
              <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
              <Text classes={'secondary'}>Jan 9, 2016</Text>
             </Block>
            </Text>
          </ListItem>
          <Divider classes={'thinnest e-background-grey-200'} />
          <ListItem>
            <Text type={'a'}>
             <Image src={'http://www.1-computerdesks.com/images/Sunteam/2015_LAPTOP_DESK_A_250.jpg'} alt={'Desk'} classes={'e-left poze-latest'}/>
             <Block classes={'content e-left'}>
              <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
              <Text classes={'secondary'}>Jan 9, 2016</Text>
             </Block>
            </Text>
          </ListItem>
          <Divider classes={'thinnest e-background-grey-200'} />
          <ListItem>
            <Text type={'a'}>
             <Image src={'http://www.1-computerdesks.com/images/Sunteam/2015_LAPTOP_DESK_A_250.jpg'} alt={'Desk'} classes={'e-left poze-latest'}/>
             <Block classes={'content e-left'}>
              <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
              <Text classes={'secondary'}>Jan 9, 2016</Text>
             </Block>
            </Text>
          </ListItem>
        </List>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Text type={'h2'} classes={'e-text-uppercase e-title'}>tags </Text>
        </CardHeader>
        <CardContent>
           <Chip data={ChipNoIconNonDeletable1} className={'margin-chip'}/>
           <Chip data={ChipNoIconNonDeletable2} className={'margin-chip'}/>
           <Chip data={ChipNoIconNonDeletable3} className={'margin-chip'}/>
           <Chip data={ChipNoIconNonDeletable4} className={'margin-chip'}/>
           <Chip data={ChipNoIconNonDeletable5} className={'margin-chip'}/>
           <Chip data={ChipNoIconNonDeletable6} className={'margin-chip'}/>
        </CardContent>
      </Card>
    </Block>
   ),
   (<Block>
      <Text>This is the context for Tab 2</Text>
      <Btn label={'Button Example'} ripple={false} type={'succes'} className={'raised'} />
    </Block>
    ),
   (<Text>This is the context for Tab with callback alert</Text>)
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
              <Block classes={'brick brick-4 border tab-display'}>
                <Block className={'align-blog-p e-text-right'}>
                  <Text type={'h1'} classes={'e-text-white no-margin-bottom'}>Materiable
                  </Text>
                  <Text type={'p'} classes={'e-text-blue-400 e-body2'}>Blog
                  </Text>
                </Block>
                <Tab
                  data={tabs}
                  classes={'e-background-indigo-500 e-text-grey-500 e-text-left e-caption nav-no-padding'}
                  indicator={'e-background-red-500'}/>
              </Block>
              <Block classes={'brick brick-8 border'}>
                <Block>

                </Block>
              </Block>
            </Block>
  				</Block>
        </Block>

        );
    }
}

module.exports = MateriableBlog;

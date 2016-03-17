import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Divider, Icon, Image, Input, Menu, List, ListItem} from 'react-essence';
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
var tabs2 = {
 'header': [
   { 'context': (<Text>Latest</Text>) },
   { 'context': (<Text>Popular</Text>) },
   { 'context': (<Text>Top Rating</Text>) }
  ],
  'rows': [
   (<Block>
     <List type={'navigation'} classes={'e-twolinelist'}>
       <ListItem>
        <Text type={'a'} className={'a-padding-left'}>
         <Image src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThstworJpqzrTiWCtoiEH4RQ580ocfKYKFJVRNuMp4mkZAm2sFPQ'} alt={'Desk'} classes={'e-left poze-latest'}/>
         <Block classes={'content e-left'}>
          <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
          <Text classes={'secondary'}>Jan 9, 2016</Text>
         </Block>
        </Text>
       </ListItem>
      <Divider classes={'thinnest e-background-grey-200'} />
       <ListItem>
         <Text type={'a'} className={'a-padding-left'}>
          <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNHE-lGPyaV9jyMtZM9xoC7oRDY8NyaER6yiZlWViHhAykfLP7g'} alt={'Desk'} classes={'e-left poze-latest'}/>
          <Block classes={'content e-left'}>
           <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
           <Text classes={'secondary'}>Jan 9, 2016</Text>
          </Block>
         </Text>
       </ListItem>
       <Divider classes={'thinnest e-background-grey-200'} />
       <ListItem>
         <Text type={'a'} className={'a-padding-left'}>
          <Image src={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQimbPhHFzhQo2bgJWqYUMKftSvcI2ctkwasP6hgBabTlaSqs1a8w'} alt={'Desk'} classes={'e-left poze-latest'}/>
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
      <Card className={'e-background-white'}>
        <CardContent className={'e-text-center'}>
          <List type={'inline'}>
            <ListItem>
              <Btn icon={'social-person'} ripple={true} type={'succes'} classes={'fab e-background-deep-purple-A200'} />
            </ListItem>
            <ListItem>
              <Image src={'http://i.skyrock.net/8001/80148001/pics/3129738968_1_10_BuQ0dDiz.jpg'} className={'profil'} />
            </ListItem>
            <ListItem>
              <Btn icon={'social-person'} ripple={true} type={'info'} className={'fab'} />
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

class MateriableSinglePost extends React.Component {

    render() {
        return (

          <Block className={'materiable-singlepost e-background-grey-200'}>

            <Block className={'header e-text-center'}>
              <Image src={'./assets/img/tiger.jpg'} className={'image-replacer'}/>
              <Text type={'h1'} className={'e-display-3 e-text-left e-text-white'}>Single post with full image</Text>
            </Block>

        		<Block className={'e-container main-content go-top'}>
              <Block classes={'main-right-column'}>
                <Card>
                  <CardContent className={'all-posts-container e-background-white'}>
                    <Block className={'post-container'}>
                      <Block className={'right-column'}>
                        <Block className={'post-content'}>
                          <Text type={'h1'} classes={'e-headline'}>Single Post with full image</Text>
                          <Text type={'span'} classes={'e-body1'}><Icon name={"social-person"} className={"e-text-grey-700"} />By: </Text>
                          <Text type={'a'} classes={'e-body1 e-text-blue-400'}>Leonardo J Kem</Text>
                          <Text type={'span'} classes={'e-text-center e-caption'}>
                            <Icon name={"image-panorama-fisheye"} className={"e-text-grey-700"} />
                            15 minutes ago</Text>
                            <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </Text>
                            <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            </Text>
                            <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                              consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </Text>
                            <Text type={'h1'} classes={'e-title'}>1. Sed ut perspiciatis unde omnis</Text>
                            <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </Text>
                            <Text type={'h1'} classes={'e-title'}>2. Sed quia non numquam eius</Text>
                            <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </Text>
                            <Text type={'h1'} classes={'e-title'}>3. Totam rem aperiam, eaque ipsa quae</Text>
                            <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </Text>
                            <Text type={'h1'} classes={'e-title'}>4. Voluptatem accusantium</Text>
                            <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </Text>
                            <Block classes={'brick brick-6'}>
                              <Block classes={'brick brick-3'}>
                                <Image src={'http://i.skyrock.net/8001/80148001/pics/3129738968_1_10_BuQ0dDiz.jpg'} className={'profil-post'} />
                              </Block>
                              <Block classes={'brick brick-9'}>
                                <Text type={'span'} classes={'e-title'}>By: </Text>
                                <Text type={'a'} classes={'e-title e-text-blue-400'}>Leonardo J Kem</Text>
                                <Text type={'p'} classes={'e-body1 e-text-grey-700'}>I am interested in researching web sites, and exploring the artistic </Text>
                              </Block>
                            </Block>
                            <Block classes={'brick brick-6'}>
                              <Text type={'span'} classes={'e-title'}>Tags: </Text>
                              <Chip data={ChipNoIconNonDeletable1} className={'margin-chip'}/>
                              <Chip data={ChipNoIconNonDeletable2} className={'margin-chip'}/>
                              <Chip data={ChipNoIconNonDeletable3} className={'margin-chip'}/>
                              <Chip data={ChipNoIconNonDeletable4} className={'margin-chip'}/>
                            </Block>
                        </Block>
                      </Block>
                    </Block>{/*end .post-container*/}
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className={'all-posts-container e-background-white'}>
                    <Block className={'e-margin-60 comments'}>
                       <Text type={'h2'} classes={'e-text-uppercase e-title'}>LATEST COMMENTS </Text>
                       <List type={'navigation'} classes={'e-twolinelist first-ul'}>
                         <ListItem>
                           <Text type={'p'} classes={'e-subhead p-comment-title'}>
                              <Image src={'http://getessence.io/assets/img/essence_icon.png'} width={'30px'} height={'30px'} alt={'Essence Image'} />
                              <Text type={'span'} classes={'e-text-center e-subhead e-text-blue-400'}>Steve Pancake </Text>
                            </Text>
                            <Block classes={'e-background-grey-200 bl-padding relative'}>
                               <Text type={'p'} classes={'e-text-left e-caption width-p-comments'}>
                                 Lorem ipsum dolor sit amet, aeque harum tantas at pro, ea usu feugait scribentur. Alia fabulas consectetuer duo te, case consul eu pro. Mei minim melius utroque ne.
                               </Text>
                               <Icon name={"content-reply"} className={"e-text-grey-400 top-icon"} />
                               <Icon name={"action-favorite"} className={"e-text-grey-400 bottom-icon"} />
                             </Block>
                         </ListItem>

                         <ListItem>
                           <Text type={'p'} classes={'e-subhead p-comment-title'}>
                              <Image src={'http://getessence.io/assets/img/essence_icon.png'} width={'30px'} height={'30px'} alt={'Essence Image'} />
                              <Text type={'span'} classes={'e-text-center e-subhead e-text-blue-400'}>Steve Pancake </Text>
                            </Text>
                            <Block classes={'e-background-grey-200 bl-padding relative'}>
                               <Text type={'p'} classes={'e-text-left e-caption width-p-comments'}>
                                 Lorem ipsum dolor sit amet, aeque harum tantas at pro, ea usu feugait scribentur. Alia fabulas consectetuer duo te, case consul eu pro. Mei minim melius utroque ne.
                               </Text>
                               <Icon name={"content-reply"} className={"e-text-grey-400 top-icon"} />
                               <Icon name={"action-favorite"} className={"e-text-grey-400 bottom-icon"} />
                             </Block>
                         </ListItem>

                         <ListItem>
                           <Text type={'p'} classes={'e-subhead p-comment-title'}>
                              <Image src={'http://getessence.io/assets/img/essence_icon.png'} width={'30px'} height={'30px'} alt={'Essence Image'} />
                              <Text type={'span'} classes={'e-text-center e-subhead e-text-blue-400'}>Steve Pancake </Text>
                            </Text>
                            <Block classes={'e-background-grey-200 bl-padding relative'}>
                               <Text type={'p'} classes={'e-text-left e-caption width-p-comments'}>
                                 Lorem ipsum dolor sit amet, aeque harum tantas at pro, ea usu feugait scribentur. Alia fabulas consectetuer duo te, case consul eu pro. Mei minim melius utroque ne.
                               </Text>
                               <Icon name={"content-reply"} className={"e-text-grey-400 top-icon"} />
                               <Icon name={"action-favorite"} className={"e-text-grey-400 bottom-icon"} />
                             </Block>
                             <List className={'second-ul'}>
                               <ListItem>
                                 <Text type={'p'} classes={'e-subhead p-comment-title'}>
                                    <Image src={'http://getessence.io/assets/img/essence_icon.png'} width={'30px'} height={'30px'} alt={'Essence Image'} />
                                    <Text type={'span'} classes={'e-text-center e-subhead e-text-blue-400'}>Steve Pancake </Text>
                                  </Text>
                                  <Block classes={'e-background-grey-200 bl-padding relative'}>
                                     <Text type={'p'} classes={'e-text-left e-caption width-p-comments'}>
                                       Lorem ipsum dolor sit amet, aeque harum tantas at pro, ea usu feugait scribentur. Alia fabulas consectetuer duo te, case consul eu pro. Mei minim melius utroque ne.
                                     </Text>
                                     <Icon name={"content-reply"} className={"e-text-grey-400 top-icon"} />
                                     <Icon name={"action-favorite"} className={"e-text-grey-400 bottom-icon"} />
                                   </Block>
                               </ListItem>
                               <ListItem>
                                 <Text type={'p'} classes={'e-subhead p-comment-title'}>
                                    <Image src={'http://getessence.io/assets/img/essence_icon.png'} width={'30px'} height={'30px'} alt={'Essence Image'} />
                                    <Text type={'span'} classes={'e-text-center e-subhead e-text-blue-400'}>Steve Pancake </Text>
                                  </Text>
                                  <Block classes={'e-background-grey-200 bl-padding relative'}>
                                     <Text type={'p'} classes={'e-text-left e-caption width-p-comments'}>
                                       Lorem ipsum dolor sit amet, aeque harum tantas at pro, ea usu feugait scribentur. Alia fabulas consectetuer duo te, case consul eu pro. Mei minim melius utroque ne.
                                     </Text>
                                     <Icon name={"content-reply"} className={"e-text-grey-400 top-icon"} />
                                     <Icon name={"action-favorite"} className={"e-text-grey-400 bottom-icon"} />
                                   </Block>
                               </ListItem>
                             </List>
                         </ListItem>

                         <ListItem>
                           <Text type={'p'} classes={'e-subhead p-comment-title'}>
                              <Image src={'http://getessence.io/assets/img/essence_icon.png'} width={'30px'} height={'30px'} alt={'Essence Image'} />
                              <Text type={'span'} classes={'e-text-center e-subhead e-text-blue-400'}>Steve Pancake </Text>
                            </Text>
                            <Block classes={'e-background-grey-200 bl-padding relative'}>
                               <Text type={'p'} classes={'e-text-left e-caption width-p-comments'}>
                                 Lorem ipsum dolor sit amet, aeque harum tantas at pro, ea usu feugait scribentur. Alia fabulas consectetuer duo te, case consul eu pro. Mei minim melius utroque ne.
                               </Text>
                               <Icon name={"content-reply"} className={"e-text-grey-400 top-icon"} />
                               <Icon name={"action-favorite"} className={"e-text-grey-400 bottom-icon"} />
                             </Block>
                         </ListItem>

                       </List>
                     </Block>
                  </CardContent>
                </Card> {/*end comments */}

                {/* Join discussion*/}
                <Card classes={'discussion e-background-white'}>
                  <Block classes={'padding-30'}>
                    <Text type={'h2'} classes={'e-text-left e-text-grey-800 e-text-uppercase e-headline'}>
                      Join discussion
                    </Text>
                    <Block>
                      <Icon name={"social-person"} className={"e-text-grey-800"} />
                      <Input type={'text'} name={'label'} label={'Your name'}/>
                    </Block>
                    <Block>
                      <Icon name={"communication-email"} className={"e-text-grey-800"} />
                      <Input type={'email'} name={'label'} label={'Your email'}/>
                    </Block>
                    <Block>
                      <Icon name={"social-whatshot"} className={"e-text-grey-800"} />
                      <Input type={'text'} name={'label'} label={'Your job'}/>
                    </Block>
                    <Block>
                      <Icon name={"communication-messenger"} className={"e-text-grey-800"} />
                      <Input type={'text'} name={'label'} label={'Your message'}/>
                    </Block>
                    <Btn label={'Send message'} ripple={true} type={'primary'} className={'flat e-background-white e-text-blue-600 e-right'} />
                    <Btn label={'Clear'} ripple={true} type={'primary'} className={'flat e-background-white e-text-grey-800 e-right'} />
                  </Block>
                </Card>
                {/* End of Join discussion*/}

              </Block>

  				  </Block>
          </Block>

        );
    }
}

module.exports = MateriableSinglePost;
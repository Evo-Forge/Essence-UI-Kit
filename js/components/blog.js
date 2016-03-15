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

          <Block className={'materiable-blog e-background-grey-200'}>
                    <Block classes='top-blog e-background-indigo-500'>
                    </Block>
                		<Block className={'e-container go-top'}>
                      <Block className={'e-row'}>
                        <Block classes={'brick brick-4 tab-display'}>
                            <Block className={'align-blog-p e-text-right'}>
                              <Text type={'h1'} classes={'e-text-white no-margin-bottom'}>Materiable
                              </Text>
                              <Text type={'p'} classes={'e-text-blue-400 e-body2'}>Blog
                              </Text>
                            </Block>
                            <Tab
                            data={tabs}
                            classes={'e-background-indigo-500 e-text-grey-500 e-text-left e-caption adjust-margin-card nav-no-padding'}
                            indicator={'e-background-red-500'}/>

                            <Card className={'adjust-margin-card'}>
                              <CardHeader>
                                <Text type={'h2'} classes={'e-text-uppercase e-title'}>LATEST COMMENTS </Text>
                              </CardHeader>
                              <CardContent>
                              <List type={'navigation'} classes={'e-twolinelist'}>
                                <ListItem>
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
                                </ListItem>
                               <Divider classes={'thinnest e-background-grey-200'} />
                                <ListItem>
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
                                </ListItem>
                                <Divider classes={'thinnest e-background-grey-200'} />
                                <ListItem>
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
                                </ListItem>
                                <Divider classes={'thinnest e-background-grey-200'} />
                              </List>
                              </CardContent>
                            </Card>

                            <Card className={'adjust-margin-card second-card'}>
                              <CardContent classNames={'no-padding-fo-card'}>
                              <Tab
                                data={tabs2}
                                classes={'e-background-cyan-500 e-text-grey-50 e-caption nav-no-padding'}
                                indicator={'e-background-red-500'}/>
                              </CardContent>
                            </Card>

                            <Card className={'adjust-margin-card'}>
                              <CardHeader>
                                <Text type={'h2'} classes={'e-text-uppercase e-title'}>Categories </Text>
                              </CardHeader>
                              <CardContent className={'e-text-grey-700'}>
                                <List type={'navigation'}>
                                     <ListItem className={'list-nav-little'}>
                                          <Text className={'adjust-list-nav'}>
                                             <Text type={'span'} className={"e-text-grey-400"}><Icon name={"action-home"} className={"e-text-grey-400"} />Home</Text>
                                          </Text>
                                      </ListItem>
                                      <ListItem className={'list-nav-little'}>
                                           <Text className={'adjust-list-nav'}>
                                              <Text type={'span'} className={"e-text-grey-400"}><Icon name={"action-receipt"} className={"e-text-grey-400"} />Layout</Text>
                                           </Text>
                                       </ListItem>
                                      <ListItem className={'list-nav-little'}>
                                           <Text className={'adjust-list-nav'}>
                                              <Text type={'span'} className={"e-text-grey-400"}><Icon name={"editor-insert-emoticon"} className={"e-text-grey-400"} />Blog</Text>
                                           </Text>
                                       </ListItem>
                                       <ListItem className={'list-nav-little'}>
                                            <Text className={'adjust-list-nav'}>
                                               <Text type={'span'} className={"e-text-grey-400"}><Icon name={"editor-format-align-left"} className={"e-text-grey-400"} />Pages</Text>
                                            </Text>
                                        </ListItem>
                                        <ListItem className={'list-nav-little'}>
                                             <Text className={'adjust-list-nav'}>
                                                <Text type={'span'} className={"e-text-grey-400"}><Icon name={"editor-insert-photo"} className={"e-text-grey-400"} />Portfolio</Text>
                                             </Text>
                                         </ListItem>
                                         <ListItem className={'list-nav-little'}>
                                              <Text className={'adjust-list-nav'}>
                                                 <Text type={'span'} className={"e-text-grey-400"}><Icon name={"maps-local-post-office"} className={"e-text-grey-400"} />Contact</Text>
                                              </Text>
                                         </ListItem>
                                </List>
                              </CardContent>
                            </Card>

                            <Card className={'adjust-margin-card'}>
                              <CardHeader>
                                <Text type={'h2'} classes={'e-text-uppercase e-title'}>Popular Posts </Text>
                              </CardHeader>
                              <CardContent>
                              <List type={'navigation'} classes={'e-twolinelist'}>
                                <ListItem>
                                 <Text type={'a'}>
                                  <Image src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTO7TvGqH2wc9wamdVoZpqu1uOcw_jVvQfBH4xiNec-m1UApK-Lfw'} alt={'Desk'} classes={'e-left poze-latest'}/>
                                  <Block classes={'content e-left'}>
                                   <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
                                   <Text classes={'secondary'}>Jan 9, 2016</Text>
                                  </Block>
                                 </Text>
                                </ListItem>
                               <Divider classes={'thinnest e-background-grey-200'} />
                                <ListItem>
                                  <Text type={'a'}>
                                   <Image src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThstworJpqzrTiWCtoiEH4RQ580ocfKYKFJVRNuMp4mkZAm2sFPQ'} alt={'Desk'} classes={'e-left poze-latest'}/>
                                   <Block classes={'content e-left'}>
                                    <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
                                    <Text classes={'secondary'}>Jan 9, 2016</Text>
                                   </Block>
                                  </Text>
                                </ListItem>
                                <Divider classes={'thinnest e-background-grey-200'} />
                                <ListItem>
                                  <Text type={'a'}>
                                   <Image src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTO7TvGqH2wc9wamdVoZpqu1uOcw_jVvQfBH4xiNec-m1UApK-Lfw'} alt={'Desk'} classes={'e-left poze-latest'}/>
                                   <Block classes={'content e-left'}>
                                    <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
                                    <Text classes={'secondary'}>Jan 9, 2016</Text>
                                   </Block>
                                  </Text>
                                </ListItem>
                                <Divider classes={'thinnest e-background-grey-200'} />
                                <ListItem>
                                  <Text type={'a'}>
                                   <Image src={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQimbPhHFzhQo2bgJWqYUMKftSvcI2ctkwasP6hgBabTlaSqs1a8w'} alt={'Desk'} classes={'e-left poze-latest'}/>
                                   <Block classes={'content e-left'}>
                                    <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
                                    <Text classes={'secondary'}>Jan 9, 2016</Text>
                                   </Block>
                                  </Text>
                                </ListItem>
                                <Divider classes={'thinnest e-background-grey-200'} />
                                <ListItem>
                                  <Text type={'a'}>
                                   <Image src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKssMJr9AH8wSNTCuRj13eYAheW-H6b89AZSBtb6pPAoWyywqa'} alt={'Desk'} classes={'e-left poze-latest'}/>
                                   <Block classes={'content e-left'}>
                                    <Text type={'p'} classes={'primary e-text-grey-800 e-body2'}>Lorem ipsum dolor sit amet, eum altera putent eleifend.</Text>
                                    <Text classes={'secondary'}>Jan 9, 2016</Text>
                                   </Block>
                                  </Text>
                                </ListItem>
                              </List>
                              </CardContent>
                            </Card>

                            <Card className={'adjust-margin-card'}>
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
              <Block classes={'brick brick-8 e-background-white border all-posts-container'}>

                <Block className={'post-container small-image'}>
                  <Block className={'post-header left-column'}>
                    <Image src={'./assets/img/tiger.jpg'} className={'image-replacer'}/>
                  </Block>
                  <Block className={'right-column'}>
                    <Block className={'post-content'}>
                      <Text type={'h1'} classes={'e-headline'}>Featured image post</Text>
                      <Text type={'span'} classes={'e-body1'}><Icon name={"social-person"} className={"e-text-grey-700"} />By: </Text>
                      <Text type={'a'} classes={'e-body1 e-text-blue-400'}>Leonardo J Kem</Text>
                      <Text type={'span'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-panorama-fisheye"} className={"e-text-grey-700"} />
                        15 minutes ago</Text>
                        <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                          Lorem ipsum dolor sit amet, per ut ignota efficiendi, munere fabellas ne per, eam et oportere corrumpit. Cu exerci intellegam dissentiunt qui. Ius integre luptatum recusabo at, vim in partem fabellas voluptatibus, ei cum autem etiam quidam. Dolor erroribus vituperatoribus id ius, et reque iusto pertinacia cum.
                        </Text>
                    </Block>
                    <Block className={'post-footer'}>
                      <Block className={'left-footer'}>
                        <Btn label={'Read More'} ripple={true} type={'info'} className={'raised'} />
                        <List type={'inline'} className={'post-links'}>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>32 like</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>15 comments</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-orange-A700'}>
                              <Icon name={"content-reply"} className={"e-text-orange-A700"} />
                              Share</Text>
                          </ListItem>
                        </List>
                      </Block>
                      <Text type={'a'} href={'#'} className={'favorite'}>
                        <Icon name={"action-favorite"} className={"e-text-pink-A400"} />
                      </Text>
                    </Block>
                  </Block>
                  <Divider classes={'thin e-background-grey-300 e-margin-top-15'} />
                </Block>{/*end .post-container*/}

                <Block className={'post-container'}>
                  <Block className={'post-header left-column'}>
                    <Image src={'./assets/img/tiger.jpg'} className={'image-replacer'}/>
                  </Block>
                  <Block className={'right-column'}>
                    <Block className={'post-content'}>
                      <Text type={'h1'} classes={'e-headline'}>Featured image post</Text>
                      <Text type={'span'} classes={'e-body1'}><Icon name={"social-person"} className={"e-text-grey-700"} />By: </Text>
                      <Text type={'a'} classes={'e-body1 e-text-blue-400'}>Leonardo J Kem</Text>
                      <Text type={'span'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-panorama-fisheye"} className={"e-text-grey-700"} />
                        15 minutes ago</Text>
                        <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                          Lorem ipsum dolor sit amet, per ut ignota efficiendi, munere fabellas ne per, eam et oportere corrumpit. Cu exerci intellegam dissentiunt qui. Ius integre luptatum recusabo at, vim in partem fabellas voluptatibus, ei cum autem etiam quidam. Dolor erroribus vituperatoribus id ius, et reque iusto pertinacia cum.
                        </Text>
                    </Block>
                    <Block className={'post-footer'}>
                      <Block className={'left-footer'}>
                        <Btn label={'Read More'} ripple={true} type={'info'} className={'raised'} />
                        <List type={'inline'} className={'post-links'}>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>32 like</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>15 comments</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-orange-A700'}>
                              <Icon name={"content-reply"} className={"e-text-orange-A700"} />
                              Share</Text>
                          </ListItem>
                        </List>
                      </Block>
                      <Text type={'a'} href={'#'} className={'favorite'}>
                        <Icon name={"action-favorite"} className={"e-text-pink-A400"} />
                      </Text>
                    </Block>
                  </Block>
                  <Divider classes={'thin e-background-grey-300 e-margin-top-15'} />
                </Block>{/*end .post-container*/}

                <Block className={'post-container masonry'}>
                  <Block className={'post-header left-column'}>
                    <Image src={'./assets/img/tiger.jpg'} className={'image-replacer'}/>
                  </Block>
                  <Block className={'right-column'}>
                    <Block className={'post-content'}>
                      <Text type={'h1'} classes={'e-headline'}>Featured image post</Text>
                      <Text type={'span'} classes={'e-body1'}><Icon name={"social-person"} className={"e-text-grey-700"} />By: </Text>
                      <Text type={'a'} classes={'e-body1 e-text-blue-400'}>Leonardo J Kem</Text>
                      <Text type={'span'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-panorama-fisheye"} className={"e-text-grey-700"} />
                        15 minutes ago</Text>
                        <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                          Lorem ipsum dolor sit amet, per ut ignota efficiendi, munere fabellas ne per, eam et oportere corrumpit. Cu exerci intellegam dissentiunt qui. Ius integre luptatum recusabo at, vim in partem fabellas voluptatibus, ei cum autem etiam quidam. Dolor erroribus vituperatoribus id ius, et reque iusto pertinacia cum.
                        </Text>
                    </Block>
                    <Block className={'post-footer'}>
                      <Block className={'left-footer'}>
                        <Btn label={'Read More'} ripple={true} type={'info'} className={'raised'} />
                        <List type={'inline'} className={'post-links'}>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>32 like</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>15 comments</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-orange-A700'}>
                              <Icon name={"content-reply"} className={"e-text-orange-A700"} />
                              Share</Text>
                          </ListItem>
                        </List>
                      </Block>
                      <Text type={'a'} href={'#'} className={'favorite'}>
                        <Icon name={"action-favorite"} className={"e-text-pink-A400"} />
                      </Text>
                    </Block>
                  </Block>
                  <Divider classes={'thin e-background-grey-300 e-margin-top-15'} />
                </Block>{/*end .post-container*/}

                <Block className={'post-container masonry'}>
                  <Block className={'post-header left-column'}>
                    <Image src={'./assets/img/tiger.jpg'} className={'image-replacer'}/>
                  </Block>
                  <Block className={'right-column'}>
                    <Block className={'post-content'}>
                      <Text type={'h1'} classes={'e-headline'}>Featured image post</Text>
                      <Text type={'span'} classes={'e-body1'}><Icon name={"social-person"} className={"e-text-grey-700"} />By: </Text>
                      <Text type={'a'} classes={'e-body1 e-text-blue-400'}>Leonardo J Kem</Text>
                      <Text type={'span'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-panorama-fisheye"} className={"e-text-grey-700"} />
                        15 minutes ago</Text>
                        <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                          Lorem ipsum dolor sit amet, per ut ignota efficiendi, munere fabellas ne per, eam et oportere corrumpit. Cu exerci intellegam dissentiunt qui. Ius integre luptatum recusabo at, vim in partem fabellas voluptatibus, ei cum autem etiam quidam. Dolor erroribus vituperatoribus id ius, et reque iusto pertinacia cum.
                        </Text>
                    </Block>
                    <Block className={'post-footer'}>
                      <Block className={'left-footer'}>
                        <Btn label={'Read More'} ripple={true} type={'info'} className={'raised'} />
                        <List type={'inline'} className={'post-links'}>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>32 like</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>15 comments</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-orange-A700'}>
                              <Icon name={"content-reply"} className={"e-text-orange-A700"} />
                              Share</Text>
                          </ListItem>
                        </List>
                      </Block>
                      <Text type={'a'} href={'#'} className={'favorite'}>
                        <Icon name={"action-favorite"} className={"e-text-pink-A400"} />
                      </Text>
                    </Block>
                  </Block>
                  <Divider classes={'thin e-background-grey-300 e-margin-top-15'} />
                </Block>{/*end .post-container*/}

                <Block className={'post-container masonry'}>
                  <Block className={'post-header left-column'}>
                    <Image src={'./assets/img/tiger.jpg'} className={'image-replacer'}/>
                  </Block>
                  <Block className={'right-column'}>
                    <Block className={'post-content'}>
                      <Text type={'h1'} classes={'e-headline'}>Featured image post</Text>
                      <Text type={'span'} classes={'e-body1'}><Icon name={"social-person"} className={"e-text-grey-700"} />By: </Text>
                      <Text type={'a'} classes={'e-body1 e-text-blue-400'}>Leonardo J Kem</Text>
                      <Text type={'span'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-panorama-fisheye"} className={"e-text-grey-700"} />
                        15 minutes ago</Text>
                        <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                          Lorem ipsum dolor sit amet, per ut ignota efficiendi, munere fabellas ne per, eam et oportere corrumpit. Cu exerci intellegam dissentiunt qui. Ius integre luptatum recusabo at, vim in partem fabellas voluptatibus, ei cum autem etiam quidam. Dolor erroribus vituperatoribus id ius, et reque iusto pertinacia cum.
                        </Text>
                    </Block>
                    <Block className={'post-footer'}>
                      <Block className={'left-footer'}>
                        <Btn label={'Read More'} ripple={true} type={'info'} className={'raised'} />
                        <List type={'inline'} className={'post-links'}>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>32 like</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'span'} classes={'e-text-center e-text-uppercase e-body1'}>15 comments</Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-orange-A700'}>
                              <Icon name={"content-reply"} className={"e-text-orange-A700"} />
                              Share</Text>
                          </ListItem>
                        </List>
                      </Block>
                      <Text type={'a'} href={'#'} className={'favorite'}>
                        <Icon name={"action-favorite"} className={"e-text-pink-A400"} />
                      </Text>
                    </Block>
                  </Block>
                  <Divider classes={'thin e-background-grey-300 e-margin-top-15'} />
                </Block>{/*end .post-container*/}


              </Block>
            </Block>
  				</Block>
        </Block>

        );
    }
}

module.exports = MateriableBlog;

import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor() {
        super();

        this.state = {
            sections: [  {
                title: 'HATS',
                imageUrl: 'https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'JACKETS',
                imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rw-waterproof-jackets-1597863491.jpg',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'SNEAKERS',
                imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-mens-sneakers-2018-1541700506.jpg',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'WOMENS',
                imageUrl: 'https://www.wabe.org/wp-content/uploads/2019/03/Women-header.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'MENS',
                imageUrl: 'https://hespokestyle.com/wp-content/uploads/2017/09/dress-codes-collage-800x397.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }
            ]
            
        }
    }

    render(){
        return (
            <div className='directory-menu'>
            {this.state.sections.map(({title,imageUrl, size, id }) => (
            <MenuItem key={id} title={title}  imageUrl={imageUrl} size={size}> </MenuItem>
                )
            )}       
            
            </div>

        );
    }
}

export default Directory;
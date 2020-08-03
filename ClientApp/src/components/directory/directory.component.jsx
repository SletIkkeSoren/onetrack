import React from 'react'

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
             sections: [{
                  title: 'Koncerts done easy',
                  imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Festival bangers!!',
                  imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Intense',
                  imageUrl: 'https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Soul',
                  imageUrl: 'https://images.unsplash.com/photo-1474959783111-a0f551bdad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Rap',
                  imageUrl: 'https://images.unsplash.com/photo-1525610936498-fa025f75ea37?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
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
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
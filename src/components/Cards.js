import React from 'react'
import CardItem from './CardItem'
import '../components/Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out These EPIC Locations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                    <CardItem
              src='https://cdn.pixabay.com/photo/2017/09/27/13/37/srilanka-2792097_960_720.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
             <CardItem
              src='https://cdn.pixabay.com/photo/2015/11/05/15/18/buddha-1024347_960_720.jpg'
              text='Home Away From Home '
              label='Meditaion'
              path='/services'
            />
                    </ul>
                
                    <ul className='cards__items'>
                    <CardItem
              src='https://cdn.pixabay.com/photo/2013/10/05/17/03/rail-road-191097_960_720.jpg'
              text='Sri Lanka The Beautiful '
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://cdn.pixabay.com/photo/2014/02/16/09/38/baby-elephant-267124_960_720.jpg'
              text={`The Joy Is In The Journey, Not At The Journey's End.`}
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://images.freeimages.com/images/large-previews/d58/sipidan-kapalai-water-village-1378920.jpg'
              text='Over The Mountain, Across The Sea'
              label='Adrenaline'
              path='/sign-up'
            />
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

import Banner from './banner/Banner';
import CardSwipe from './swipe/CardSwipe';
import Card from './card/Card';
import React from 'react';
import './Details.css';

function Details() {

    return (
        <div className='details'>
            <Banner />
            <div className='card-container'>
                <Card tittle={'Web Development'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'}/>
                <Card tittle={'UI/UX Design'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'}/>
                <Card tittle={'Sound Design'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'}/>
                <Card tittle={'Game Design'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'}/>
                <Card tittle={'2D/3D Design'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'}/>
                <Card tittle={'GraphicArts'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'}/>
            </div>
            <CardSwipe />
        </div>
    )
}

export default Details
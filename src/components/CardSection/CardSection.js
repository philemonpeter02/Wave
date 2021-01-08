import React from 'react'
import Cards from './Cards'
import './CardSection.css'

const CardSection = () => {
    return (
        <div className="Cards">
        <h2>Designed And Developed By Philemon Peter</h2>
        <div className="CardGroup">
        <Cards title="React Website" text="Designed and developed by Philemon Peter" image={require('../../images/wallpaper.jpg')} />
        <Cards title="React Website" text="Designed and developed by Philemon Peter" image={require('../../images/wallpaper2.jpg')} />
        <Cards title="React Website" text="Designed and developed by Philemon Peter" image={require('../../images/wallpaper3.jpg')} />
        <Cards title="React Website" text="Designed and developed by Philemon Peter" image={require('../../images/wallpaper4.jpg')} />
        <Cards title="React Website" text="Designed and developed by Philemon Peter" image={require('../../images/wallpaper2.jpg')} />
        <Cards title="React Website" text="Designed and developed by Philemon Peter" image={require('../../images/wallpaper.jpg')} />
        </div>
        </div>
    )
}

export default CardSection

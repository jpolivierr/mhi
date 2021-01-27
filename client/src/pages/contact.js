import React from 'react'
import Header from '../component/Header/Header'
import {ContactPageGrid} from '../component/Page-grid/PageGrid'

const contact = () => {
    return (
        <div className='about'>
           <Header title = 'Contact Us'/>
           <ContactPageGrid/>
        </div>
    )
}

export default contact

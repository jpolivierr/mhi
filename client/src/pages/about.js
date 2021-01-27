import React from 'react'
import Header from '../component/Header/Header'
import HomePageGrid from '../component/Page-grid/PageGrid'
import JoinUs from '../component/Join-us/JoinUs'


const about = () => {
    return (
        <div className='about' >
            <Header title='About Us'/>
            <HomePageGrid/>
            <JoinUs/>
        
        </div>
    )
}

export default about

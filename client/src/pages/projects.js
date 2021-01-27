import React from 'react'
import PageHeader from '../component/Header/Header'
import {ProjectPageGrid} from '../component/Page-grid/PageGrid'
import News from '../component/News/News'

const projects = () => {
    return (
        <div className='about'>
            <PageHeader title='PROJECTS'/>
            <ProjectPageGrid/>
            <News/>
    </div>
    )
}

export default projects

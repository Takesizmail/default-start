import React from 'react'
import {ProjectApiConsumer} from '../context'

const withProjectApi = (Wrapped) =>{
    return (props) =>{
        return(
            <ProjectApiConsumer>
                { (services) =>{
                    return<Wrapped {...props} services={services}/>
                }}
                </ProjectApiConsumer>
        )
    }
}
export default withProjectApi
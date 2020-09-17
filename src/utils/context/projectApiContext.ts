import React from 'react'

const {Provider: ProjectApiProvider, Consumer : ProjectApiConsumer} = React.createContext({});

export {
    ProjectApiProvider,
    ProjectApiConsumer
}
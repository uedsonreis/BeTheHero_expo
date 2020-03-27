import React, { ReactNode } from 'react'
import Routes from './src/routes'

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export default class App extends React.Component<any, any> {

    render(): ReactNode {
        return ( <Routes /> );
    }
}
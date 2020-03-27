import React, { ReactNode } from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const logoImg = require('../assets/logo.png')

type Props = { children?: ReactNode, style?: any }

export class Container extends React.Component<Props, any> {
    render(): ReactNode {
        return (
            <View style={styles.container}>{this.props.children}</View>
        )
    }
}

export class Header extends React.Component<Props, any> {
    render(): ReactNode {
        return (
            <View style={styles.header}>
                {this.props.children}
                <Image source={logoImg} />
            </View>
        )
    }
}

export class ViewIncident extends React.Component<Props, any> {
    render(): ReactNode {
        return (
            <View style={styles.viewIncident}>{this.props.children}</View>
        )
    }
}

export class TextProperty extends React.Component<Props, any> {
    render(): ReactNode {
        return (
            <Text style={styles.textProperty}>{this.props.children}</Text>
        )
    }
}

export class TextValue extends React.Component<Props, any> {
    render(): ReactNode {
        return (
            <Text style={[styles.textValue, this.props.style]}>{this.props.children}</Text>
        )
    }
}
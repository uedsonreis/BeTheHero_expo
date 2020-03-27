import React, { ReactNode } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { MessageSender } from '../../services/message.sender'

import { Container, Header, ViewIncident, TextProperty, TextValue } from '../../components'

import styles from './styles'
import { Incident } from '../../entities'

type Props = { navigation: NavigationProp<any>, route: any }

export default class DetailPage extends React.Component<Props, any> {

    private incident: Incident
    private msgSender: MessageSender

    constructor(props: Props) {
        super(props)
        this.incident = this.props.route.params.incident
        this.msgSender = new MessageSender(this.incident)
    }

    render(): ReactNode {
        const incident = this.incident

        return (
            <Container>
                <Header>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Feather name="arrow-left" size={28} color='#e82041' />
                    </TouchableOpacity>
                </Header>

                <ViewIncident>
                    <TextProperty>ONG:</TextProperty>
                    <TextValue>{incident.name} de {incident.city} ({incident.uf})</TextValue>

                    <TextProperty>CASO:</TextProperty>
                    <TextValue>{incident.title}</TextValue>

                    <TextProperty>VALOR:</TextProperty>
                    <TextValue style={{ marginBottom: 0 }}>{
                        Intl.NumberFormat(
                            'pt-BR', { style: 'currency', currency: 'BRL' }
                        ).format(incident.value)
                    }</TextValue>
                </ViewIncident>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                    <Text style={styles.heroDescription}>Entre em contato:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={() => this.msgSender.sendWhatsapp()}>
                            <Text style={styles.actionText}>Whatsapp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={() => this.msgSender.sendEmail()}>
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Container>
        )
    }

}
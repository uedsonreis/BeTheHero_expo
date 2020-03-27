import React, { ReactNode } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api'

import { Container, Header, ViewIncident, TextProperty, TextValue } from '../../components'

import styles from './styles'
import { Incident } from '../../entities'

type Props = { navigation: NavigationProp<any>, route: any }

type State = { incidents: Incident[], total: number, page: number, loading: boolean }

export default class IncidentsPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = { incidents: [], total: 0, page: 1, loading: false }
    }

    componentDidMount(): void {
        this.loadIncidents()
    }

    async loadIncidents(): Promise<void> {
        const { incidents, total, page, loading } = this.state
        
        if (loading) return
        if (total > 0 && total === incidents.length) return

        this.setState({ loading: true })

        try {
            const response = await api.get('incidents?page='+ page)
            this.setState({
                incidents: [ ...incidents, ...response.data],
                total: Number(response.headers['x-total-count']),
                page: page + 1
            })
        } catch (error) {
            console.error(error)
            alert("Erro ao recuperar a lista de casos!")
        }

        this.setState({ loading: false })
    }

    private navigateToDetail(incident: Incident) {
        this.props.navigation.navigate('detail', { incident })
    }

    render(): ReactNode {
        const { incidents, total } = this.state

        return (
            <Container>
                <Header>
                    <Text style={styles.headerText}>
                        Total de <Text style={styles.headerTitleBold}>{total} caso(s).</Text>
                    </Text>
                </Header>
                
                <Text style={styles.title}> Bem vindo! </Text>
                
                <Text style={styles.description}>
                    Escolha um dos casos abaixo e salve o dia.
                </Text>

                <FlatList
                    data={incidents}
                    style={styles.incidentList}
                    keyExtractor={incident => String(incident.id)}
                    showsVerticalScrollIndicator={false}
                    onEndReached={(e) => this.loadIncidents()}
                    onEndReachedThreshold={0.2}
                    renderItem={({ item: incident }) => (
                        <ViewIncident>
                            
                            <TextProperty>ONG:</TextProperty>
                            <TextValue>{incident.name}</TextValue>

                            <TextProperty>CASO:</TextProperty>
                            <TextValue>{incident.title}</TextValue>

                            <TextProperty>VALOR:</TextProperty>
                            <TextValue>{
                                Intl.NumberFormat(
                                    'pt-BR', { style: 'currency', currency: 'BRL' }
                                ).format(incident.value)
                            }</TextValue>

                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => this.navigateToDetail(incident)}
                            >
                                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                                <Feather name="arrow-right" size={16} color="#e02041" />
                            </TouchableOpacity>

                        </ViewIncident>
                    )}
                />

            </Container>
        )
    }

}
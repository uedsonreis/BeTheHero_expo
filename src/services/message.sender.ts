import { Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'
import { Incident } from '../entities'

export class MessageSender {

    private message: string

    constructor(private incident: Incident) {
        this.message = "Olá "+ incident.name
            +", estou entrando em contato pois gostaria de ajudar no caso "+ incident.title
            +" com um valor de R$ "+ incident.value.toFixed(2)
    }

    public sendEmail(): void {
        MailComposer.composeAsync({
            subject: 'Herói do caso: '+ this.incident,
            recipients: [this.incident.email],
            body: this.message
        })
    }

    public sendWhatsapp(): void {
        Linking.openURL(`whatsapp://send?phone=55${this.incident.whatsapp}&text=${this.message}`)
    }
}
import { StyleSheet } from 'react-native'
 
export default StyleSheet.create({
    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTitleBold: {
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        color: '#13131a',
        fontWeight: 'bold'
    },

    incidentList: {
        marginTop: 32,
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
})
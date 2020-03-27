import React, { ReactNode } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import IncidentsPage from '../pages/Incidents'
import DetailPage from '../pages/Detail'

export default class Router extends React.Component<any, any> {

    render(): ReactNode {
        const StackNavigator = createStackNavigator()

        return (
            <NavigationContainer>
                <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
                    <StackNavigator.Screen name={'incidents'} component={IncidentsPage} />
                    <StackNavigator.Screen name={'detail'} component={DetailPage} />
                </StackNavigator.Navigator>
            </NavigationContainer>
        )

    }
}
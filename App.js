import React from 'react';
import {
    AppRegistry,
    View,
    Button,
    Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;

        return <View>
            <Text>Hola!</Text>
            <Button onPress = {() => navigate('Main')} title = "Main screen" />
        </View>;
    }
}

class RecentChatsScreen extends React.Component {
    render() {
        return <Text>List of recent chats</Text>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return <Text>List of all contacts</Text>
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
});


const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Main: { screen: MainScreenNavigator},
});

AppRegistry.registerComponent('NavegacionesAnidadas', () => SimpleApp);

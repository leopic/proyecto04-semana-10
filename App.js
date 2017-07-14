'use strict';

import React from 'react';
import {
    AppRegistry,
    Button,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { DrawerNavigator } from "react-navigation";
import { TabNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
    render() {
        return <View style={{padding: 40}}>
            <Text>List of recent chats</Text>
            <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="Open"/>
        </View>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return <View style={{padding: 40}}>
            <Text>List of all contacts</Text>
            <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="Open"/>
        </View>
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
});

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('./chats-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={[styles.container]}>
                <Text>Home</Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title="Open"/>
            </View>
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('./notif-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={[styles.container]}>
                <Text>Notifications</Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title="Open"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    container: {
      padding: 40,
    },
});

const MyApp = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
    Main: {
        screen: MainScreenNavigator,
        navigationOptions: {
            drawerLabel: 'Main',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./chats-icon.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        },
    },
});

AppRegistry.registerComponent('NavegacionesAnidadas', () => MyApp);

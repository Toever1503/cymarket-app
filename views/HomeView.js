import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Home = () => {
    const goToAbout = () => {
        Actions.about()
    }
    return (
        <View>
            <TouchableOpacity style={{width: '100%'}} onPress={goToAbout}>
                <Text>This is HOME!</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home
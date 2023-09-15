import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />
      <View style={{height:'100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee' }}>
        <Text style={{ textAlign: 'center', color: 'black', fontFamily:'Poppins-Bold' }}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

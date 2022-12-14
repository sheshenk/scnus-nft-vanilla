import React from "react";
import { useNavigation } from "@react-navigation/native"
import { Dimensions, Image, Linking, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"

export default function TokenScreen({ route }) {
	const { token } = route.params
	const imageWidth = Dimensions.get('window').width
	const navigation = useNavigation()
	return (
		<>
			<StatusBar barStyle='light-content'/>
			<ScrollView bounces={false}>
				<Image source={{ uri: token.image }} style={{ width: imageWidth, height: imageWidth }}/>
				<LinearGradient style={{ position: 'absolute', width: imageWidth, height: imageWidth }} colors={['rgba(0,0,0,0.7)', 'transparent', 'transparent', 'transparent']}/>
				<View style={{ padding: 30, backgroundColor: '#fff', marginTop: -20, borderRadius: 20 }}>
					<Text style={{ color: '#000', fontSize: 28, fontWeight: 'bold' }}>{token.name}</Text>
					<Text style={{ color: '#000', fontSize: 12, marginTop: 12, opacity: 0.6, letterSpacing: 0.5, textTransform: 'uppercase' }}>Minted By You: 21/07/2022, 08:55 PM</Text>
					<Text style={{ color: '#000', fontSize: 12, marginTop: 4, opacity: 0.6, letterSpacing: 0.5 }}>TOKEN ID: {token.tokenId}</Text>
					<Text style={{ color: '#000', fontSize: 18, lineHeight: 16 * 1.618, marginTop: 24 }}>{token.description}</Text>
					<View style={{ display: 'flex', flexDirection: 'row', marginTop: 32, marginBottom: 64 }}>
						<TouchableOpacity onPress={() => Linking.openURL(token.website)} activeOpacity={0.8} style={{ backgroundColor: '#364378', padding: 12, borderRadius: 8 }}>
							<Text style={{ color: '#fff', fontSize: 14 }}>Visit Website</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {}} activeOpacity={0.8} style={{ backgroundColor: '#e67e22', padding: 12, borderRadius: 8, marginLeft: 12 }}>
							<Text style={{ color: '#fff', fontSize: 14 }}>View on Etherscan</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			<SafeAreaView style={{ position: 'absolute' }}>
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 10 }}>
					<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} style={{ backgroundColor: 'white', padding: 10, borderRadius: 100 }}>
						<Image source={require('../../assets/icons/back.png')} style={{ width: 30, height: 30 }}/>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</>
	)
}
import React from "react";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import logo from '../../../assets/logo.png'
import { useMoralisDapp } from "../../../misc/providers/MoralisDappProvider";
import LogoutModal from "../auth/LogoutModal";

export default function HomeHeader() {
	const { walletAddress } = useMoralisDapp()
	const address = walletAddress || '0xXXXXXXXXXXXXXXXX'
	const [logoutVisible, setLogoutVisible] = useState(false)
	return (
		<>
		<LogoutModal visible={logoutVisible} close={() => setLogoutVisible(false)}/>
		<View style={{ height: 200, backgroundColor: '#ecf0f1', paddingTop: 40, paddingBottom: 40}}>
			<View style={{ flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 30 }}>
				<TouchableOpacity activeOpacity={0.8} onPress={() => setLogoutVisible(true)}>
					<Text style={{ color: '#000', fontSize: 16, opacity: 0.5}}>Your Wallet Address</Text>
					<Text style={{ color: '#000', fontSize: 24, marginTop: 6, fontWeight: 'bold'}}>{address.slice(0, 8)}...{address.slice(-4)}</Text>
				</TouchableOpacity>
				<Image source={logo} style={{ width: 50, height: 50 }}/>
			</View>
		</View>
		</>
	)
}
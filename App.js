import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

export default function App() {
	const [height, setHeight] = React.useState(0);
	const [mass, setMass] = React.useState(0);
	const [resultNumber, setResultNumber] = React.useState(0);
	const [resultText, setResultText] = React.useState("");

	const handleCalculate = () => {
		let imc = (mass * 703) / height ** 2;
		setResultNumber(imc.toFixed(2));

		if (imc < 18.5) {
			setResultText("Underweight");
		} else if (imc > 18.5 && imc < 25) {
			setResultText("Normal Weight");
		} else if (imc >= 25 && imc < 30) {
			setResultText("Overweight");
		} else {
			setResultText("Obesity");
		}
	};

	return (
		<ImageBackground
			source={require("./assets/bg.png")}
			style={{ width: "100%", height: "100%" }}>
			<View style={styles.container}>
				<Text
					style={{
						color: "#FFCB1F",
						justifyContent: "center",
						alignSelf: "center",
						marginTop: 30,
						fontSize: 15,
					}}>
					BMI Calculator
				</Text>
				<View style={styles.intro}>
					<TextInput
						placeholder="Height"
						keyboardType="numeric"
						style={styles.input}
						onChangeText={setHeight}
					/>
					<TextInput
						placeholder="Mass"
						keyboardType="numeric"
						style={styles.input}
						onChangeText={setMass}
					/>
				</View>

				<TouchableOpacity style={styles.button} onPress={handleCalculate}>
					<Text style={styles.buttonText}>Calculate </Text>
				</TouchableOpacity>
				<Text style={styles.result}>{resultNumber}</Text>
				<Text style={[styles.result, { fontSize: 35 }]}>{resultText}</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#f5fcff"
	},
	intro: {
		flexDirection: "row",
	},
	input: {
		height: 80,
		textAlign: "center",
		width: "50%",
		fontSize: 50,
		marginTop: 24,
		color: "#FFCB1F",
	},
	button: {
		backgroundColor: "#1D1D1B",
	},
	buttonText: {
		alignSelf: "center",
		padding: 30,
		fontSize: 25,
		color: "#FFCB1F",
		fontWeight: "bold",
	},
	result: {
		alignSelf: "center",
		color: "#FFCB1F",
		fontSize: 65,
		padding: 15,
	},
});

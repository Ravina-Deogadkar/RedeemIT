import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';
import React, { Component } from 'react';
import { addOfferDetails } from '../actions/offerAction';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';

class Offer extends Component {

	constructor(props) {
		this.state = {
			title: "",
			desc: "",
			validity: "",
			date: new Date()
		}
		super(props)
	}

	saveOffer = () => {
		console.log("title");
		const offers = {
			title: title,
			desc: desc,
			validity: validity,
			dateAdded: new Date()
		};
		this.props.addOfferDetails(offers);

	}
	onChange = (selectedDate) => {
		const currentDate = selectedDate || date;
		setDate(currentDate);
	};
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.header}>Got an offer</Text>
				</View>
				<View>
					<TextInput style={styles.titleInput} value={title} onChangeText={text => settitle(text)} placeholder="Title">
					</TextInput>
				</View>
				<View>
					<TextInput style={styles.titleInput} multiline numberOfLines={4} value={desc} onChangeText={text => setdesc(text)} placeholder="Description">
					</TextInput>
				</View>
				<View>
					<TextInput style={styles.titleInput} value={validity} onChangeText={text => setvalidity(text)} placeholder="Validity">
					</TextInput>
					{/* <DateTimePicker
					testID="dateTimePicker"
					value={date}
					mode="date"
					is24Hour={true}
					display="default"
					onChange={onChange}
				/> */}
				</View>
				<View>
					<Button title="Save" onPress={saveOffer}></Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: 'center',
		marginVertical: 10
	},
	titleInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginVertical: 5
	},
	container: {
		marginHorizontal: 20
	}
});

const mapStateToProps = (state)=>{
	return{
		offers: state.offers
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		addOfferDetails_action:dispatch(addOfferDetails)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Offer);
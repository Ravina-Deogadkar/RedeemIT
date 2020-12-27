import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';
import React, { Component } from 'react';
import { addOffer } from '../actions/offerAction';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Offer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title: "",
			desc: "",
			validity: "",
			date: new Date()
		}
	}

	saveOffer = () => {
		console.log("title");
		const offers = {
			title: this.state.title,
			desc: this.state.desc,
			validity: this.state.validity,
			dateAdded: new Date()
		};
		this.props.addOffer(offers);

	}
	onChange = (selectedDate) => {
		const currentDate = selectedDate || date;
		setDate(currentDate);
	};
	render() {
		console.log(this.props.offers);
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.header}>Got an offer</Text>
				</View>
				<View>
					<TextInput style={styles.titleInput} value={this.state.title} onChangeText={text => this.setState({title:text})} placeholder="Title">
					</TextInput>
				</View>
				<View>
					<TextInput style={styles.titleInput} multiline numberOfLines={4} value={this.state.desc} onChangeText={text => this.setState({ desc: text })} placeholder="Description">
					</TextInput>
				</View>
				<View>
					<TextInput style={styles.titleInput} value={this.state.validity} onChangeText={text => this.setState({ validity: text })} placeholder="Validity">
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
					<Button title="Save" onPress={this.saveOffer}></Button>
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

const mapDispatchToProps=(dispatch)=>(
	bindActionCreators({
		addOffer,
	}, dispatch)
);

export default connect(mapStateToProps,mapDispatchToProps)(Offer);
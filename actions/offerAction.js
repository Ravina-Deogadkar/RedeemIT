const add_offer=(offerdetails)=>({
	type:'ADD_OFFER',
	payload: offerdetails
});

export const addOfferDetails=(data)=>{
	return (dispatch)=>{
		dispatch(add_offer(data))
	}
}
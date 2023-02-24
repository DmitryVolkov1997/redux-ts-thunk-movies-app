import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type RadioSlice = {
	radio: string
}

const initialState: RadioSlice = {
	radio: 'all'
}

const radioSlice = createSlice({
	name: 'radio',
	initialState,
	reducers: {
		setRadio(state, action: PayloadAction<string>) {
			state.radio = action.payload
		}
	}
})

export const {setRadio} = radioSlice.actions
export default radioSlice.reducer
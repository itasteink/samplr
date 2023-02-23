import * as React from 'react'
import { TagInput as ETagInput } from 'evergreen-ui'

export const TagInput = (props) => {
	const [values, setValues] = React.useState(['Kauri', 'Willow'])

	return (
		<ETagInput
			inputProps={{ placeholder: 'Add trees...' }}
			values={values}
			onChange={(values) => {
				setValues(values)
			}}
		/>
	)
}

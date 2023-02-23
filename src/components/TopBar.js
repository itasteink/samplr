import * as React from 'react'
import { Pane, Heading, Button } from 'evergreen-ui'

export const TopBar = (props) => {
	return (
		<Pane display="flex" padding={16} background="tint2" borderRadius={3}>
			<Pane flex={1} alignItems="center" display="flex">
				<Heading size={600}>SAMPLR</Heading>
			</Pane>

			<Pane>
				<Button marginRight={16}>Button</Button>
				<Button appearance="primary">Primary Button</Button>
			</Pane>
		</Pane>
	)
}

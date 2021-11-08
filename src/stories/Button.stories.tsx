import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof Button>

// More on component BtnStorys: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BtnStory: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = BtnStory.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Click'
}

export const Small = BtnStory.bind({})
Small.args = {
	size: 'small',
	label: 'Click',
	onClick: () => alert('small')
}

export const Medium = BtnStory.bind({})
Medium.args = {
	size: 'medium',
	label: 'Click',
	onClick: () => alert('medium')
}

export const Large = BtnStory.bind({})
Large.args = {
	size: 'large',
	label: 'Click',
	onClick: () => alert('large')
}

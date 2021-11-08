import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Btn } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const story = {
	title: 'Components/Btn',
	component: Btn,
	docs: {
		source: {
			code: 'My favorite btn'
		}
	}
} as ComponentMeta<typeof Btn>

export default story

// More on component BtnStory: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BtnStory: ComponentStory<typeof Btn> = (args) => <Btn {...args} />

/** Best component ever */
export const Default = BtnStory.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	label: 'Click Me'
}

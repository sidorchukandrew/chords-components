import Input from "./Input";

export default {
	component: Input,
	title: "Input",
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
	value: "Hello",
};

export const Outlined = Template.bind({});

Outlined.args = {
	value: "Hello",
};

export const Pill = Template.bind({});

Pill.args = {
	value: "Hello",
	variant: "pill",
};

export const Underlined = Template.bind({});

Underlined.args = {
	value: "Hello",
	variant: "underlined",
};

export const Open = Template.bind({});

Open.args = {
	value: "Hello",
	variant: "open",
};

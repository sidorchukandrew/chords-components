import Button from "./Button";

export default {
	component: Button,
	title: "Button",
};

const Template = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
	children: "Click me!",
};

export const Full = Template.bind({});
Full.args = {
	children: "Click me!",
	fullWidth: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: "Click me!",
	variant: "outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: "Click me!",
	variant: "outlined",
	disabled: true,
};

export const Pill = Template.bind({});
Pill.args = {
	children: "Click me!",
	variant: "pill",
};

export const Gray = Template.bind({});
Gray.args = {
	children: "Click me!",
	variant: "gray",
	color: "black",
};

export const Text = Template.bind({});
Text.args = {
	children: "Click me!",
	variant: "text",
};

export const Open = Template.bind({});
Open.args = {
	children: "Click me!",
	variant: "open",
};

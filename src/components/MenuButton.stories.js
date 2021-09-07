import MenuButton from "./MenuButton";

export default {
	component: MenuButton,
	title: "Menu Button",
};

const Template = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: "Hello",
	color: "black",
	size: "sm",
};

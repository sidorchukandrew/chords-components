import ProfilePicture from "./ProfilePicture";

export default {
	component: ProfilePicture,
	title: "Profile Picture",
};

const Template = (args) => <ProfilePicture {...args} />;

export const Default = Template.bind({});
Default.args = {
	url: "https://avatars.githubusercontent.com/u/47313528?v=4",
};

export const XS = Template.bind({});
XS.args = {
	url: "https://avatars.githubusercontent.com/u/47313528?v=4",
	size: "xs",
};

export const SM = Template.bind({});
SM.args = {
	url: "https://avatars.githubusercontent.com/u/47313528?v=4",
	size: "sm",
};

export const MD = Template.bind({});
MD.args = {
	url: "https://avatars.githubusercontent.com/u/47313528?v=4",
	size: "md",
};

export const LG = Template.bind({});
LG.args = {
	url: "https://avatars.githubusercontent.com/u/47313528?v=4",
	size: "lg",
};

export const XL = Template.bind({});
XL.args = {
	url: "https://avatars.githubusercontent.com/u/47313528?v=4",
	size: "xl",
};


export const XXL = Template.bind({});
XXL.args = {
	url: "https://avatars.githubusercontent.com/u/47313528?v=4",
	size: "2xl",
};

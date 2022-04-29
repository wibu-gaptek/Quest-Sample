import Button from ".";

export default {
  title: "Button",
  component: Button,
};

const Component = (args) => <Button {...args} />;

export const ButtonPrimary = Component.bind({});
ButtonPrimary.args = {
  label: "Test",
};

export const ButtonSecondary = Component.bind({});
ButtonSecondary.args = {
  label: "Test 2",
};

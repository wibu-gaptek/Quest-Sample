import { Button } from ".";

export default {
  title: "Button",
  component: Button,
};

const Component = (args) => <Button {...args}>{args.children}</Button>;

export const ButtonPrimary = Component.bind({});
ButtonPrimary.args = {
  children: "Test",
};

export const ButtonSecondary = Component.bind({});
ButtonSecondary.args = {
  children: "Test 2",
};

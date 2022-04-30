import { ButtonPopup } from ".";

export default {
  title: "ButtonPopup",
  component: ButtonPopup,
};

const Component = (args) => <ButtonPopup {...args}></ButtonPopup>;

export const ButtonPopupPrimary = Component.bind({});
ButtonPopupPrimary.args = {
  children: "Teasdasdst",
};

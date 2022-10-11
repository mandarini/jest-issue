import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Kater } from './kater';
import { Data } from '@jestory/data';

const Story: ComponentMeta<typeof Kater> = {
  component: Kater,
  title: 'Kater',
};
export default Story;

const Template: ComponentStory<typeof Kater> = (args) => <Kater {...args} />;
const kat = Data['A'];

export const Primary = Template.bind({});
Primary.args = {
  title: kat,
};

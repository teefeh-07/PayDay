// NotificationCenter component stories
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationCenter } from '../components/NotificationCenter';


const meta: Meta<typeof NotificationCenter> = {
  title: 'PayDay/NotificationCenter',
  component: NotificationCenter,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: { title: 'NotificationCenter', loading: false },
};


export const Loading: Story = {
  args: { title: 'NotificationCenter', loading: true },
};


export const WithError: Story = {
  args: { title: 'NotificationCenter', loading: false },
};

// Dashboard component stories
import type { Meta, StoryObj } from '@storybook/react';
import { Dashboard } from '../components/Dashboard';


const meta: Meta<typeof Dashboard> = {
  title: 'PayDay/Dashboard',
  component: Dashboard,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: { title: 'Dashboard', loading: false },
};


export const Loading: Story = {
  args: { title: 'Dashboard', loading: true },
};


export const WithError: Story = {
  args: { title: 'Dashboard', loading: false },
};


// End of Dashboard stories

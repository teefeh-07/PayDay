// WalletPanel component stories
import type { Meta, StoryObj } from '@storybook/react';
import { WalletPanel } from '../components/WalletPanel';


const meta: Meta<typeof WalletPanel> = {
  title: 'PayDay/WalletPanel',
  component: WalletPanel,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: { title: 'WalletPanel', loading: false },
};


export const Loading: Story = {
  args: { title: 'WalletPanel', loading: true },
};


export const WithError: Story = {
  args: { title: 'WalletPanel', loading: false },
};


// End of WalletPanel stories

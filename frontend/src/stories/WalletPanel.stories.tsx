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

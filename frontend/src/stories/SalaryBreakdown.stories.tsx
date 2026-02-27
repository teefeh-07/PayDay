// SalaryBreakdown visualization stories
import type { Meta, StoryObj } from '@storybook/react';
import { SalaryBreakdown } from '../components/SalaryBreakdown';


const meta: Meta<typeof SalaryBreakdown> = {
  title: 'PayDay/SalaryBreakdown',
  component: SalaryBreakdown,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: { title: 'SalaryBreakdown', loading: false },
};


export const Loading: Story = {
  args: { title: 'SalaryBreakdown', loading: true },
};


export const WithError: Story = {
  args: { title: 'SalaryBreakdown', loading: false },
};


// End of SalaryBreakdown stories

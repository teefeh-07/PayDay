// ReportGenerator component stories
import type { Meta, StoryObj } from '@storybook/react';
import { ReportGenerator } from '../components/ReportGenerator';


const meta: Meta<typeof ReportGenerator> = {
  title: 'PayDay/ReportGenerator',
  component: ReportGenerator,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: { title: 'ReportGenerator', loading: false },
};


export const Loading: Story = {
  args: { title: 'ReportGenerator', loading: true },
};


export const WithError: Story = {
  args: { title: 'ReportGenerator', loading: false },
};


// End of ReportGenerator stories

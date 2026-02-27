// EmployeeList component stories
import type { Meta, StoryObj } from '@storybook/react';
import { EmployeeList } from '../components/EmployeeList';


const meta: Meta<typeof EmployeeList> = {
  title: 'PayDay/EmployeeList',
  component: EmployeeList,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: { title: 'EmployeeList', loading: false },
};


export const Loading: Story = {
  args: { title: 'EmployeeList', loading: true },
};


export const WithError: Story = {
  args: { title: 'EmployeeList', loading: false },
};


// End of EmployeeList stories

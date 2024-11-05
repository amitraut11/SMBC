// stories/components/features/DashboardPanel.stories.tsx

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DashboardPanel from './DashboardPanel';

export default {
  title: 'Components/Features/DashboardPanel',
  component: DashboardPanel,
  decorators: [(Story) => <BrowserRouter><Story /></BrowserRouter>], // Wrap with BrowserRouter for navigation
};

const Template = (args) => <DashboardPanel {...args} />;

export const DefaultDashboardPanel = Template.bind({});
DefaultDashboardPanel.args = {
  // You can add props here if your component has any
};

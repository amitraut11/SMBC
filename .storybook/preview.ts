import type { Preview } from "@storybook/react";
import "../stories/index.css"; // Assuming index.css is in the stories folder

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

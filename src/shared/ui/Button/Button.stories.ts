import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
   title: 'Компоненты',
   component: Button,
   tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
   parameters: {
      docs: {
         description: {
            story: 'primary',
         },
      },
   },
   args: {
      variant: 'primary',
      children: 'Кнопка',
      size: 'M',
   },
};

export const Black: Story = {
   parameters: {
      docs: {
         description: {
            story: 'secondary',
         },
      },
   },
   args: {
      variant: 'secondary',
      children: 'Кнопка',
   },
};

export const Link: Story = {
   parameters: {
      docs: {
         description: {
            story: 'link',
         },
      },
   },
   args: {
      variant: 'link',
      children: 'Ссылка',
   },
};

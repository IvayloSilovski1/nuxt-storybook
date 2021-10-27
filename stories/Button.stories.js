import Button from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      name: 'label',

      control: 'text',
      description: 'Just a label for the button',
      table: {
        type: {
          summary: 'How it works',
          detail:
            'It takes a prop-value for its label',
        },
        defaultValue: {},
      },
    },
    size: {
      name: 'btnSize',
      options: ['is-small', 'is-medium', 'is-large'],
      control: 'select',
      description: 'Just a simple button',
      table: {
        type: {
          summary: 'How it works',
          detail:
            'It takes a prop-value for its size',
        },
        defaultValue: {},
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  size: 'is-medium'
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'is-large'
};

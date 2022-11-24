import React from "react";
import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn">Button</Button>
    <Button className="btn btn-primary">Button Primary</Button>
    <Button className="btn btn-secondary">Button Secondary</Button>
    <Button className="btn btn-error">Button Error</Button>
    <Button className="btn btn-warning">Button Warning</Button>
    <Button className="btn btn-success">Button Success</Button>
    <Button className="btn btn-info">Button Info</Button>
  </div>
);

export const Light: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn btn-light">Button</Button>
    <Button className="btn btn-light btn-primary">Button Primary</Button>
    <Button className="btn btn-light btn-secondary">Button Secondary</Button>
    <Button className="btn btn-light btn-error">Button Error</Button>
    <Button className="btn btn-light btn-warning">Button Warning</Button>
    <Button className="btn btn-light btn-success">Button Success</Button>
    <Button className="btn btn-light btn-info">Button Info</Button>
  </div>
);

export const Ghost: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn btn-ghost">Button</Button>
    <Button className="btn btn-ghost btn-primary">Button Primary</Button>
  </div>
);

export const Outline: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn btn-outline">Button</Button>
    <Button className="btn btn-outline btn-primary">Button Primary</Button>
  </div>
);

export const Link: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn btn-link">Button</Button>
    <Button className="btn btn-link btn-primary">Button Primary</Button>
  </div>
);

export const Sizes: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn btn-sm">Button Small</Button>
    <Button className="btn">Button Normal</Button>
    <Button className="btn btn-lg">Button Large</Button>
    <Button className="btn btn-xl">Button Extra Large</Button>
    <Button className="btn btn-2xl">Button 2 Extra Large</Button>
  </div>
);

export const Disabled: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn" disabled>
      Button
    </Button>
    <Button className="btn btn-primary" disabled>
      Button Primary
    </Button>
  </div>
);

export const Shapes: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn btn-square">
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
    <Button className="btn btn-rounded">Button Rounded</Button>
    <Button className="btn btn-circle">
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
    <div className="w-full max-w-md relative">
      <Button className="btn btn-block">Button Block</Button>
    </div>
  </div>
);

export const Icon: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn btn-primary btn-sm gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      Button Icon
    </Button>
    <Button className="btn btn-primary btn-lg gap-2">
      Button Icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </Button>
  </div>
);

export const Loading: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn btn-primary" isLoading>
      Loading
    </Button>
    <Button className="btn btn-square btn-primary" isLoading></Button>
  </div>
);

export const Anchor: ComponentStory<typeof Button> = (args) => (
  <div className="flex space-x-2">
    <Button className="btn btn-primary" href="#">
      Anchor
    </Button>
  </div>
);

# Cadence Components

This project houses commonly used components for Cadence applications.

## Viewing the components

This project uses Storybook for viewing the components in isolation from any application. You can run Storybook with
`yarn storybook`

## Styles

TailwindCSS is used to provide styling classes. To make development easier, this project uses Tailwind's JIT to automatically purge and rebuild production ready CSS files.
`yarn tailwind`

## Development

In one terminal run `yarn storybook` and in another run `yarn tailwind`. Storybook will be able to automatically grab from the purged stylesheet.

## Components so far

- Button
- Input
- Profile Picture
- Menu Button

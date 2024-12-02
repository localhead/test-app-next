export enum Breakpoints {
  mobile = 0,
  desktop = 720,
}

export const media = {
  breakpoints: Breakpoints,
  up: (value: keyof typeof Breakpoints | number): string => {
    const breakpoint = typeof value === "number" ? value : Breakpoints[value];

    return `@media screen and (min-width: ${breakpoint}px)`;
  },
  down: (value: keyof typeof Breakpoints | number): string => {
    const breakpoint = typeof value === "number" ? value : Breakpoints[value];

    return `@media screen and (max-width: ${breakpoint}px)`;
  },
};

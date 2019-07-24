/* eslint-disable @typescript-eslint/no-explicit-any */
// In this file create declarations for all modules that are outside of the normal... e.g. images and videos

declare module '*.svg' {
  const content: any;
  export default content;
}

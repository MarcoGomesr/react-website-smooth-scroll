declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const value: any;
  export = value;
}

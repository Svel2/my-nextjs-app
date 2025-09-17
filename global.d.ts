import type { IStaticMethods } from "preline/dist";

declare global {
  interface Window {
    // Optional third-party libraries
    _: any;
    $: typeof import("jquery");
    jQuery: typeof import("jquery");
    DataTable: any;
    Dropzone: any;
    VanillaCalendarPro: any;
    noUiSlider: any;
    // Preline UI
    HSStaticMethods: IStaticMethods;
  }
}

export {};

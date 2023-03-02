// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor?: string;
    bgColor?: string;
    accentColor?: string;
    bgImg?: string;
    boxColor?: string;
    btnColor?: string;
    colors?: {
      blueMain: string;
      blue100: string;

      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray700: string;
      gray800: string;
      gray900: string;

      green100: string;
    };
  }
}

import Typography from "typography"
// import wordpress2013 from "typography-theme-wordpress-2013"
import kirkham from "typography-theme-kirkham";

// kirkham.headerLineHeight = 1.1
kirkham.overrideThemeStyles = () => {
  return {
      p:{
          fontSize:` .8rem`,
          color:  `#fff`
      },
    // a: {
    //   color: `rgb(60,99,243)`,
    // },
    // h1: {
    //   lineHeight: 1,
    // },
  }
}
// console.log(wordpress2013)

const typography = new Typography(kirkham)

export default typography

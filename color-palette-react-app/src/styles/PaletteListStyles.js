import sizes from './sizes';
import bg from './bg.svg';
export default {
    "@global": {
        ".fade-exit": {
            opacity: 1,
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out",
        },
    },
    root: {
        height: "150vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        //for bg ==> www.svgBackgrounds.com
        backgroundColor: "#350eaa",
        backgroundImage: `url(${bg})`,
        overflow: "scroll",   
    },
    heading: {
        fontSize: "2rem",
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "75%",
        },
        [sizes.down("md")]: {
            width: "70%",
        },
        [sizes.down("xs")]: {
            width: "65%",
        },
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "#fff",
        alignItems: "center",
        "& a": {
            color: "#fff",
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)",
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.4rem",
        },
    }
}
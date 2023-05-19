module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-1": "#000",
                "dark-2": "#131118",
                "dark-3": "#1C1924",
                "dark-4": "#101419",
                "dark-5": "#181E25",
                "dark-6": "rgba(32, 29, 41, 0.72);", //this is used for modal backdrop background color in dark mode
                "transparent-white": "rgba(74, 153, 211, 0.1)", //used as bg color of the 'how it works section of the landing page
                "gray-0": "#8786AB",
                "gray-1": "#A6A0BB",
                "gray-2": "#2F2A3C",
                "gray-3": "#9FA2B4",
                "gray-4": "#23242F",
                "gray-5": "#2C2D3A",
                "gray-6": "#4F5069",
                "gray-7": "#C4C4C4",
                "gray-8": "#23273C",
                "gray-9": "#ADADAD",
                "gray-10": "#C2C2C2",
                "gray-11": "#B9B8BC",
                "gray-12": "#DBDBDB",
                "gray-13": "#8786AB",
                "gray-14": "#59588D",
                "gray-15": "#59B7E6",
                "gray-16": "#282A2E",
                "white-1": "#fff",
                "white-2": "#CFCFCF",
                "white-3": "#E0E0E0",
                "purple-1": "#833EF1",
                "purple-2": "#6C5CE7",
                "purple-3": "#242140",
                "blue-1": "#0177FB",
                "blue-2": "#2F6EFF",
                "blue-3": "#3D8DFF",
                "blue-4": "#70B2FF",
                "blue-5": "#171538",
                "blue-6": "#1A66FF",
                "blue-7": "#D4E5F1",
                "blue-8": "#004EA5",
                "yellow-dark": "#FDCB6E",
                "green-1": "#42FF00",
                "light-1": "#FAFAFA",
                "blue-10": "#D4E5F1",
                "pallet-3": "#1f1b58",
                "pallet-4": "#59B7E6",
            },
            fontFamily: {
                'Montserrat': ["Montserrat", "sans-serif"],
                'Poppins': ["Poppins", "sans-serif"],
            },
            backgroundImage: {
                "overlay-img": "url('../public/assets/bg.svg')",
                "overlay-img-light": "url('../public/assets/lightbg.svg')",
                "overlay-img-2": "url('../public/assets/coin.svg')",
                "overlay-purse": "url('../public/assets/overlay2.svg')",
                btn: "linear-gradient(180deg, #833EF1 0%, #491CB5 100%)",
                "nav-dark":
                    "linear-gradient(90.18deg, rgba(61, 61, 61, 0.2052) 0%, rgba(29, 29, 29, 0.285) 100%)", //used for navbar in dark mode
                "nav-light":
                    "linear-gradient(90.22deg, rgba(61, 61, 61, 0.285) 0%, rgba(61, 61, 61, 0.285) 99.19%)", //used for navbar in light mode
                "blue-gradient":
                    "linear-gradient(180deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 57.44%, #17163B 100%)", // dashbord side nav bg color
                "pink-gradient":
                    "linear-gradient(136.67deg, #FF409A 8.34%, #C438EF 95.26%)", //notification badge bg
                "blue-gradient-2":
                    "linear-gradient(180deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 57.44%, #17163B 100%)",
                "light-gradient":
                    "linear-gradient(to right top, #e5e5e5, #e5e5e7, #e5e5e9, #e5e5ec, #e5e5ee);",
                "members-gradient":
                    "conic-gradient(#004EA5 0deg, #004EA5 130deg, #7195BD 130deg, #7195BD 220deg, #2E81DF 220deg, #2E81DF 310deg, #B3D2F5 310deg)",
                "purple-gradient":
                    "linear-gradient(180deg, #833EF1 0%, #491CB5 100%)",
                "purple-gradient-1":
                    "linear-gradient(180deg, #833EF1 100%, #491CB5 100%)",
                    "purple-gradient-2":"linear-gradient(180.52deg, #833EF1 4.24%, #491CB5 138.66%)",
                    "pallet-5":" linear-gradient(262.71deg, #EA9119 2.72%, #833EF1 70.34%)"


                // Inter: ["Inter", "sans-serif"],
            },
            boxShadow: {
                card: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
                box: " 0 3px 10px rgba(75,155,210,0.2)",
            },
            width: {
                mini_large: "40rem",
                semi_large: "50rem",
                large: "78rem",
            },
            spacing: {
                98: "38rem",
            },
            minWidth: {
                400: "400px",
            },
            maxWidth: {
                tooltip: "15rem",
            },
            height: {
                screenfit: "calc(100vh - 75px)",
                "screen-fit-80": "80vh",
                "screen-fit-70": "70vh",
                "screen-fit-60": "60vh",
                "screen-fit-50": "50vh",
                "25":"17rem"
            },
            minHeight: {
                screenfit: "calc(100vh - 75px)",
                "screen-fit-80": "80vh",
                "screen-fit-70": "70vh",
                "screen-fit-60": "60vh",
                "screen-fit-50": "50vh",
            },
            lineHeight:{
                'sm-height':'30px',
                "mini":"20px",
                "medium":"46px"
            },
            fontSize:{
                "mini":"20px",
                "medium":"24px"
            }
        },
    },
    plugins: [],
};

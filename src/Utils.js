import ReactGA from 'react-ga'
const Utils = {
    logPageview : (url) => {
        ReactGA.set({ page: url});
        ReactGA.pageview(url);
    }
}

export default Utils;
const getBaseUrl = () => {
    const env = process.env.NODE_ENV;
    switch (env) {
        case 'development':
            return 'http://localhost:3000/api/'
        default:
            return 'https://leaguefybackend.herokuapp.com/api/';
    }
}

const config = {
    BASE_URL: getBaseUrl(),
};

export default config;
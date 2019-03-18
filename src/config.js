const getBaseUrl = () => {
    const env = process.env.NODE_ENV;
    switch (env) {
        case 'local':
            return 'http://localhost:3000/api/'
        default:
            return 'http://localhost:3000/api/';
    }
}

const config = {
    BASE_URL: getBaseUrl(),
};

export default config;
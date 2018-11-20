interface AuthConfig {
    GIT_URL: string;
    CALLBACK_URL: string;
    CLIENT_ID: string;
    CLIENT_SECERT: string;
}

const oAuthConfig: AuthConfig = {
    GIT_URL: 'github.com',
    CALLBACK_URL: 'localhost:3000',
    CLIENT_ID: '1f7188ab6be8006417ff',
    CLIENT_SECERT: '73d76c0f1527e27eba90134738aa4f00a5c625c2',
};

export default oAuthConfig;

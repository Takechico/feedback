/**
 * Check if we're in development environment
 */
export const isDevEnv = import.meta.env.DEV;

/**
 * Helper function that gets env variable
 * @param key
 */
export const getEnvVar = (key: string): string => {
    // Check if import.meta.env exists and has the key
    if (import.meta.env && typeof import.meta.env[key] !== 'undefined') {
        return import.meta.env[key];
    }
    return "";
};

export const API_URL = isDevEnv
    ? getEnvVar('VITE_DEV_API_URL')
    : getEnvVar('VITE_PROD_API_URL');
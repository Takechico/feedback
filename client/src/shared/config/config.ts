/**
 * Check if we're in development environment
 * Use a reliable method that doesn't depend on environment variables
 */
export const isDevEnv = import.meta.env.DEV;

/**
 * Helper function that gets env variable with fallback
 * @param key
 */
export const getEnvVar = (key: string): string => {
    // Check if import.meta.env exists and has the key
    if (import.meta.env && typeof import.meta.env[key] !== 'undefined') {
        return import.meta.env[key];
    }
    return "";
};

console.log(import.meta.env.VITE_DEV_API_URL)
/**
 * API URL with fallback values
 */
export const API_URL = isDevEnv
    ? getEnvVar('VITE_DEV_API_URL')
    : getEnvVar('VITE_PROD_API_URL');
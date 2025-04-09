/**
 * Helper function for DATE formatting.
 * @param dateString
 */
export const formatDate = (dateString: string | null): string => {
    if (dateString) {
        const date = new Date(dateString);

        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month}-${day}-${year}`;
    }
    return "";
};
const pagination = (pageNumber, pageSize) => {
    const offset = (Number(pageNumber) - 1) * Number(pageSize);
    const limit = Number(pageSize);

    return {
        offset,
        limit,
    };
};
export default pagination;

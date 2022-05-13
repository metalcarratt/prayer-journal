const listUtil = {
    makeCommaSeparatedList(items) {
        let output = '';
        for (let i = 0; i < items.length; i++) {
            if (i < items.length - 1) {
                output += items[i] + ", ";
            } else {
                output += items[i];
            }
        }
        return output;
}
}

export default listUtil;
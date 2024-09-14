// Function to generate ToC from Markdown content
const generateToc = (markdown: string) => {
    // Regular expression to find headings in Markdown
    const headingRegex = /^(#{1,6})\s+(.*)$/gm;
    const toc = [];
    let match;

    // Loop through all matches
    while ((match = headingRegex.exec(markdown)) !== null) {
        const [fullMatch, hashes, title] = match;
        const level = hashes.length; // Heading level (1 for #, 2 for ##, etc.)
        const id = title.toLowerCase().replace(/[^\w]+/g, "-"); // Create an ID for anchor link
        toc.push({ level, title, id });
    }

    return toc;
};

export default generateToc;
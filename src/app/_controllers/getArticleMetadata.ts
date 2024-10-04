import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";



const getArticleMetadata = (type: string): PostMetadata[] => {
    const folder = `notes_${type}/`;
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    // const slugs = markdownPosts.map((file) => file.replace(".md", ""));
    // return slugs;

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`notes_${type}/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            type: type,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
        };
    });

    return posts;
};

export default getArticleMetadata;
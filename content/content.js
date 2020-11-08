import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function parseFiles(folder) {
    const files = fs.readdirSync(`${process.cwd()}/${folder}`);

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return paths;
}

export function parseData(folder, slug) {
    const markdownWithMetadata = fs
        .readFileSync(path.join(`${process.cwd()}/${folder}/${slug}.md`))
        .toString();

    let { data, content } = matter(markdownWithMetadata);

    return {
        data,
        content
    }
}

export function parseWithDate(folder, slug) {

    const markdownWithMetadata = fs
        .readFileSync(path.join(`${process.cwd()}/${folder}/${slug}.md`))
        .toString();

    let { data, content } = matter(markdownWithMetadata);

    data = {
        ...data,
        date: data.date.toLocaleString()
    }

    return {
        data,
        content
    }
}

export function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

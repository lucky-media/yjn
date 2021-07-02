import fs from "fs";
import path from "path";
import matter from "gray-matter";

function arrayHasKey(arr, key) {
    for (const obj of arr) {
        if (key in obj) {
            return true
        }
    }
    return false
}

function getCollection(folder) {
    const files = fs.readdirSync(`${process.cwd()}/${folder}`);

    let items = files.map((filename) => {
        const markdownWithData = fs
            .readFileSync(path.join(`${process.cwd()}/${folder}/${filename}`))
            .toString();

        let { data, content } = matter(markdownWithData);

        return {
            ...data,
            content: content,
            slug: data.slug
        };
    })

    if (arrayHasKey(items, 'date')) {
        items = items.map((item) => {
            return {
                ...item,
                date: item.date.toLocaleDateString(),
            }
        })
    }

    return items;
}

function parseFiles(folder) {
    const files = getCollection(folder)

    const paths = files.map((file) => ({
        params: {
            slug: file.slug,
        },
    }))
    return paths;
}

function parseData(folder, slug) {
    const markdownWithMetadata = fs
        .readFileSync(path.join(`${process.cwd()}/${folder}/${slug}.md`))
        .toString();

    let { data, content } = matter(markdownWithMetadata);

    return {
        data,
        content
    }
}

function parseWithDate(folder, slug) {

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

function slugify(str) {
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

module.exports = {
    getCollection,
    parseFiles,
    parseData,
    parseWithDate,
    slugify
}
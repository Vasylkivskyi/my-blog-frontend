const slugify = (title: string): string => title.replace(/ /g, "_");
const deslugify = (title: string): string => title.replace(/_/g, " ");

export { slugify, deslugify };

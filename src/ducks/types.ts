export interface ActionInterface {
    type: string,
    payload?: any,
    meta?: Object|string,
    error?: boolean
}

export interface Category {
    id: number,
    parentId: number,
    title: string,
    keyword: string,
    pageText: string,
    descriptionMeta: string,
    status: number|boolean,
    changefreq: string,
    priority: number,
    timestamp: string,
    lifestyle?: string,
    css?: string,
    children: any,
}

export interface Item {
    id: number,
    parentId: number,
    itemType: 'category'|'product'|'section'|'link'|'html',
    sectionTitle: string,
    sectionDescription: string,
    title: string,
    description: string,
    urlOverride: string,
    className: string,
    imageUrl: string,
    productsId: number,
    categoriesId: number,
    priority: number,
    status: number|boolean,
    timestamp: string,
    category: Category
}

export interface Product {
    id: number,
    itemCode: string,
    keyword: string,
    name: string,
    metaTitle: string,

}

export interface Keyword {
    id: number,
    pagetype: 'category'|'product'|'page',
    keyword: string,
    title: string,
    parent: string,
    redirect_to_parent: number,
    status: number|boolean,
    lifestyle?: string,
    size?: string,
    subtitle?: string,
    formatted_name?: string,
    swatch_format?: string,
    css?: string,
}
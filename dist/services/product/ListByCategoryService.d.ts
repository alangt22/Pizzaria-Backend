interface ProductRequest {
    category_id: string;
}
declare class ListByCategoryService {
    execute({ category_id }: ProductRequest): Promise<{
        name: string;
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        price: string;
        description: string;
        banner: string;
        category_id: string;
    }[]>;
}
export { ListByCategoryService };
//# sourceMappingURL=ListByCategoryService.d.ts.map
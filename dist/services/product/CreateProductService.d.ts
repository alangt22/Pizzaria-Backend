interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}
declare class CreateProductService {
    execute({ name, price, description, banner, category_id }: ProductRequest): Promise<{
        name: string;
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        price: string;
        description: string;
        banner: string;
        category_id: string;
    }>;
}
export { CreateProductService };
//# sourceMappingURL=CreateProductService.d.ts.map
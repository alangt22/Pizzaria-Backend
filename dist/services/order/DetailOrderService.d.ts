interface DetailRequest {
    order_id: string;
}
declare class DetailOrderService {
    execute({ order_id }: DetailRequest): Promise<({
        product: {
            name: string;
            id: string;
            created_at: Date | null;
            updated_at: Date | null;
            price: string;
            description: string;
            banner: string;
            category_id: string;
        };
        order: {
            name: string | null;
            id: string;
            created_at: Date | null;
            updated_at: Date | null;
            table: number;
            status: boolean;
            draft: boolean;
        };
    } & {
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: string;
        product_id: string;
        amount: number;
    })[]>;
}
export { DetailOrderService };
//# sourceMappingURL=DetailOrderService.d.ts.map
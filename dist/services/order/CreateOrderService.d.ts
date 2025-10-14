interface OrderRequest {
    table: number;
    name: string;
}
declare class CreateOrderService {
    execute({ table, name }: OrderRequest): Promise<{
        name: string | null;
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { CreateOrderService };
//# sourceMappingURL=CreateOrderService.d.ts.map
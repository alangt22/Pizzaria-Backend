interface OrderRequest {
    order_id: string;
}
declare class FinishOrderService {
    execute({ order_id }: OrderRequest): Promise<{
        name: string | null;
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { FinishOrderService };
//# sourceMappingURL=FinishOrderService.d.ts.map
interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}
declare class AddItemService {
    execute({ order_id, product_id, amount }: ItemRequest): Promise<{
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: string;
        product_id: string;
        amount: number;
    }>;
}
export { AddItemService };
//# sourceMappingURL=AddItemService.d.ts.map
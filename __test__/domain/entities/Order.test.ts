import { Item, Pizza, Order } from "src/domain/entities";

describe("Order", () => {
    describe("getItems", () => {
        it("should return the list of items", () => {
            const pizza = new Pizza("Mussarela", 100);
            const item1 = new Item(pizza, 10);
            const item2 = new Item(pizza, 20);
            const order = new Order([item1, item2]);
            expect(order.getItems()).toEqual([item1, item2]);
        });
    });

    describe("getTotalPrice", () => {
        it("should return 0 when the order has no items", () => {
            const order = new Order([]);
            expect(order.getTotalPrice()).toBe(0);
        });

        it("should return the correct total price when the order has items", () => {
            const pizza = new Pizza("Mussarela", 8);
            const item1 = new Item(pizza, 1);
            const item2 = new Item(pizza, 1);
            const order = new Order([item1, item2]);
            expect(order.getTotalPrice()).toBe(16);
        });
    });
});

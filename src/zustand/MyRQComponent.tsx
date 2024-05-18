import {
    useItemStore1,
    useItemStore2,
    useItemStore3,
    useItemStore4,
    useItemStore5,
    useItemStore6,
    useItemStore7,
    useItemStore8,
} from './item-store.ts'

export const MyRQComponent = ({id}: { id: string }) => {
    const fetcher1 = useItemStore1((state) => state.fetch);
    const fetcher2 = useItemStore2((state) => state.fetch);
    const fetcher3 = useItemStore3((state) => state.fetch);
    const fetcher4 = useItemStore4((state) => state.fetch);
    const fetcher5 = useItemStore5((state) => state.fetch);
    const fetcher6 = useItemStore6((state) => state.fetch);
    const fetcher7 = useItemStore7((state) => state.fetch);
    const fetcher8 = useItemStore8((state) => state.fetch);

    const items1 = useItemStore1((state) => state.items);
    const items2 = useItemStore2((state) => state.items);
    const items3 = useItemStore3((state) => state.items);
    const items4 = useItemStore4((state) => state.items);
    const items5 = useItemStore5((state) => state.items);
    const items6 = useItemStore6((state) => state.items);
    const items7 = useItemStore7((state) => state.items);
    const items8 = useItemStore8((state) => state.items);

    void fetcher1();
    void fetcher2();
    void fetcher3();
    void fetcher4();
    void fetcher5();
    void fetcher6();
    void fetcher7();
    void fetcher8();
    return <div className="Component">{id}{items1}{items2}{items3}{items4}{items5}{items6}{items7}{items8}</div>;
};

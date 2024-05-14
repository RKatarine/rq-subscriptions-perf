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
    fetcher1();
    fetcher2();
    fetcher3();
    fetcher4();
    fetcher5();
    fetcher6();
    fetcher7();
    fetcher8();
    return <div className="Component">{id}</div>;
};

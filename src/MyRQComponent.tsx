import {useQuery} from "@tanstack/react-query";

export const MyRQComponent = ({id}: { id: string }) => {
    useQuery({
        queryKey: ["test"],
    });
    useQuery({
        queryKey: ["test1"],
    });
    useQuery({
        queryKey: ["test2"],
    });
    useQuery({
        queryKey: ["test3"],
    });
    useQuery({
        queryKey: ["test4"],
    });
    useQuery({
        queryKey: ["test5"],
    });
    useQuery({
        queryKey: ["test6"],
    });
    useQuery({
        queryKey: ["test7"],
    });
    useQuery({
        queryKey: ["test8"],
    });
    return <div className="Component">{id}</div>;
};

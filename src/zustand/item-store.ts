import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

interface ItemStore {
    items: number
    fetch: () => Promise<void>
}

export const useItemStore1 = create<ItemStore>()(
    devtools(
        (set) => ({
            items: 0,
            fetch: async () => {
                const response = await Promise.resolve(2)
                set({ items: response })
            },
        }),
        {
            name: 'item-storage-1',
        },
    ),
)

export const useItemStore2 = create<ItemStore>()(
    devtools(
        (set) => ({
            items: 0,
            fetch: async () => {
                const response = await Promise.resolve(2)
                set({ items: response })
            },
        }),
        {
            name: 'item-storage-2',
        },
    ),
)

export const useItemStore3 = create<ItemStore>()(
    devtools(
        (set) => ({
            items: 0,
            fetch: async () => {
                const response = await Promise.resolve(2)
                set({ items: response })
            },
        }),
        {
            name: 'item-storage-3',
        },
    ),
)

export const useItemStore4 = create<ItemStore>()(
    devtools(
        (set) => ({
            items: 0,
            fetch: async () => {
                const response = await Promise.resolve(2)
                set({ items: response })
            },
        }),
        {
            name: 'item-storage-4',
        },
    ),
)

export const useItemStore5 = create<ItemStore>()(
    devtools(
        (set) => ({
            items: 0,
            fetch: async () => {
                const response = await Promise.resolve(2)
                set({ items: response })
            },
        }),
        {
            name: 'item-storage-5',
        },
    ),
)

export const useItemStore6 = create<ItemStore>()(
    devtools(
        (set) => ({
            items: 0,
            fetch: async () => {
                const response = await Promise.resolve(2)
                set({ items: response })
            },
        }),
        {
            name: 'item-storage-6',
        },
    ),
)

export const useItemStore7 = create<ItemStore>()(
    devtools(
        (set) => ({
            items: 0,
            fetch: async () => {
                const response = await Promise.resolve(2)
                set({ items: response })
            },
        }),
        {
            name: 'item-storage-7',
        },
    ),
)

export const useItemStore8 = create<ItemStore>()(
    devtools(
        (set) => ({
            items: 0,
            fetch: async () => {
                const response = await Promise.resolve(2)
                set({ items: response })
            },
        }),
        {
            name: 'item-storage-8',
        },
    ),
)
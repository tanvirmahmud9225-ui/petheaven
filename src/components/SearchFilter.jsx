'use client'

import { ListBox, SearchField, Select } from "@heroui/react";
import { Label, } from '@heroui/react';
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";
import { RiMenuSearchFill } from "react-icons/ri";
import SpeciesFilter from "@/components/SpeciesFilter";





const SearchFilter = () => {

    const [search, setSearch] = useState()
    const searchParams = useSearchParams()

    const router = useRouter()



    const handleSearch = () => {

        const params = new URLSearchParams(searchParams.toString())

        if (search) {
            params.set("searchTearm", search)
        } else {
            params.delete("searchTearm")
        }

        router.push(`/all-pets?${params.toString()}`)
    }



    return (
        <div>
            <div>
                <h1 className='flex items-center gap-4 text-xl font-bold mb-5'><RiMenuSearchFill /> <span>Filter & Search</span></h1>
                <div className="grid grid-cols-3 gap-15 items-center">
                    <div>
                        <Label className="text-[1rem]">Search By name</Label>
                        <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden">

                            <div className="pl-3 text-slate-400">
                                <Search className="w-4 h-4" />
                            </div>

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="search......."
                                className="flex-1  px-3 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
                            />

                            <button
                                onClick={handleSearch}
                                className="h-10 px-6 rounded-xl bg-[#68C69B] text-white font-semibold hover:bg-[#41ad7b] transition-colors"

                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <SpeciesFilter />
                    <div className="w-full">
                        <div>
                            <Select
                                name="species"
                                isRequired
                                className="w-full"
                                defaultValue={"Default"}
                            >
                                <Label className='after:content-none'>Story By Fee</Label>
                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Default" textValue="Default">
                                            Default
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Fee: Low to High" textValue="Fee: Low to High">
                                            Fee: Low to High
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Fee: High to Low" textValue="Fee: High to Low">
                                            Fee: High to Low
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
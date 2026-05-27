'use client'
import { Label, ListBox, Select } from '@heroui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import React, { useState } from 'react';

const SpeciesFilter = () => {

    const searchParams = useSearchParams()
    const pathname = usePathname()

    const router = useRouter()


    const handleSpecies = (Rabbit) => {



        const params = new URLSearchParams(searchParams.toString())

        if (Rabbit) {
            params.set("searchTearm", Rabbit)
        } else {
            params.delete("searchTearm")
        }

        router.push(`/all-pets?${params.toString()}`)
    }






    return (
        <div>
            <Select
                onSelectionChange={(e) => handleSpecies(e)}
                name="species"
                isRequired
                className="w-full"
                defaultValue={'All Species'}
            >
                <Label className='after:content-none'>Filter By Species</Label>
                <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        <ListBox.Item id="All Species" textValue="All Species">
                            All Species
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Dog" textValue="Dog">
                            Dog
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Cat" textValue="Cat">
                            Cat
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Rabbit" textValue="Rabbit">
                            Rabbit
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Bird" textValue="Bird">
                            Bird
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Guinea Pig" textValue="Guinea Pig">
                            Guinea Pig
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Hamster" textValue="Hamster">
                            Hamster
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Fish" textValue="Fish">
                            Fish
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>
        </div>
    );
};

export default SpeciesFilter;
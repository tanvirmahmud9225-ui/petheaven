

import { ListBox, SearchField, Select } from "@heroui/react";
import { Dropdown, Button, Label, Description, Header, Kbd, Separator } from '@heroui/react';
import { RiMenuSearchFill } from "react-icons/ri";


const SearchFilter = () => {


    return (
        <div>
            <div>
                <h1 className='flex items-center gap-4 text-xl font-bold mb-5'><RiMenuSearchFill /> <span>Filter & Search</span></h1>
                <div className="grid grid-cols-3 gap-15 items-center">
                    <div>
                        <SearchField name="search">
                            <Label>Search by name</Label>
                            <SearchField.Group>
                                <SearchField.SearchIcon />
                                <SearchField.Input className="w-[280px]" placeholder="Search pets...." />
                                <SearchField.ClearButton />
                            </SearchField.Group>
                        </SearchField>
                    </div>
                    <div>
                        <Select
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
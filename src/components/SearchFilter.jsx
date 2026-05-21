

import { SearchField } from "@heroui/react";
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
                    <div className="w-full">
                        <Label>Filter by Specias</Label>
                        <div className="dropdown dropdown-start w-full">
                            <div tabIndex={0} role="button" className="btn m-1 w-full shadow-lg rounded-4xl">Click ⬇️</div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 z-1 p-2  rounded-2xl w-full shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full">
                        <Label>Sort by fee</Label>
                        <div className="dropdown dropdown-start w-full">
                            <div tabIndex={0} role="button" className="btn m-1 w-full shadow-lg rounded-4xl">Click ⬇️</div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 z-1 p-2  rounded-2xl w-full shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
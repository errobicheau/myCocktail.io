import React from "react";

const Options = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-gray-200 p-4 rounded-md shadow-md ">
            <h2 className="text-lg font-semibold mb-4">Search Filters</h2>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Categories</label>
            <div className="space-y-2">
                <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2">Category 1</span>
                </label>
                <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2">Category 2</span>
                </label>
            </div>
            </div>
            <div>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Apply Filters</button>
            </div>
        </div>
    </div>

    )
}

export default Options;
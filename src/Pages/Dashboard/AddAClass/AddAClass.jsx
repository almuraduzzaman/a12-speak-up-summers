import { useForm } from "react-hook-form";

const AddAClass = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    return (
        <>
            < section className="rounded-lg bg-gray-200 p-8 shadow-lg" >
                <div className="text-center my-9">
                    <h2 className="text-2xl text-[#ab14a3] font-bold">Add a New Toy</h2>
                    <p className="">Use the below form to create a new toy</p>
                </div>
                <div className="md:px-28">
                    <form onSubmit={handleUpload} className="space-y-7">
                        <div className="flex gap-8">
                            <div className="w-1/2">
                                <label className="font-medium">Toy Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Toy Name"
                                    type="text"
                                    name="toyName"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Photo URL</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Photo URL"
                                    type="url"
                                    name="photo"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="font-medium">Seller Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Seller Name"
                                    type="text"
                                    name="sellerName"
                                    required
                                    readOnly
                                    value={user?.displayName || ''}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Seller Email</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Seller Email"
                                    type="email"
                                    name="sellerEmail"
                                    required
                                    readOnly
                                    value={user?.email || ''}
                                />
                            </div>
                        </div>


                        <div className="flex gap-6">
                            <div className="form-control w-1/2">
                                <label className="">
                                    <span className="font-medium">Sub-Category</span>
                                </label>
                                <select className="select select-bordered"
                                    name="subCategory"
                                    value={selectedToySubCategory}
                                    onChange={handleChangeSelectedValue}
                                >
                                    {toySubCategories.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Price</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Price"
                                    type="number"
                                    name="price"
                                    min='1'
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="font-medium">Available</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Available"
                                    type="number"
                                    name="quantity"
                                    min='1'
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Rating</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Rating"
                                    type="number"
                                    name="rating"
                                    min='1'
                                    max='5'
                                    step='any'
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-medium">Detail description</label>
                            <textarea name="description" placeholder="Write about your toy..." className="w-full rounded-lg border-gray-200 p-3 text-sm" rows="5" required></textarea>
                        </div>



                        <div className="mt-4">
                            <input className=" w-full cursor-pointer rounded-md bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 py-3 px-5 text-base btn border-0" type="submit" value="Upload" />
                        </div>
                    </form>
                </div>
            </section >
        </>
    );
};

export default AddAClass;
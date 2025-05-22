import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema, type BookFormType } from "../../../validators/bookSchema";
import { useCreateBook } from "../../../services/bookApi";
import { CustomeInput, CustomSelect } from "../../../components/input/Input";

function AddBook() {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useCreateBook();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormType>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      author: "",
      category: "",
      status: "to-read",
      notes: "",
    },
  });

  const onSubmit = async (data: BookFormType) => {
    await mutateAsync(data);
    reset();

    navigate("/books/list");
  };

  return (
    <div className="w-[80%] mx-auto mt-8 rounded bg-white">
      <div className="flex flex-col w-full">
        <div className="mb-8">
          <div className="flex items-center gap-4 p-4">
            <Link to="/books/list">
              <div className="border rounded h-8 w-8 flex justify-center items-center">
                <FaArrowLeftLong />
              </div>
            </Link>
            <h1 className="font-medium text-lg">Create Book</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="px-4">
            <div className="border p-6 rounded-lg">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <CustomeInput
                      error={errors.title?.message}
                      register={register("title")}
                      label="Title"
                      name="title"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <CustomeInput
                      error={errors.author?.message}
                      register={register("author")}
                      label="Author"
                      name="author"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <CustomeInput
                      error={errors.category?.message}
                      register={register("category")}
                      label="Category"
                      name="category"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <CustomSelect
                      error={errors.status?.message}
                      register={register("status")}
                      label="Status"
                      name="status"
                      options={[
                        { value: "to-read", lable: "To Read" },
                        { value: "reading", lable: "Reading" },
                        { value: "completed", lable: "Completed" },
                      ]}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="font-medium text-sm mb-1 block"
                  >
                    Notes
                  </label>
                  <textarea
                    {...register("notes")}
                    placeholder="Additional notes..."
                    rows={5}
                    className="border p-2 rounded w-full"
                  />
                  {errors.notes?.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.notes.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col md:flex-row justify-end gap-4 pt-4">
                  <button
                    type="button"
                    className="w-full md:w-32 h-10 rounded bg-gray-300 text-black cursor-pointer"
                    onClick={() => reset()}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full md:w-32 h-10 rounded bg-[#1f1f1f] text-white cursor-pointer"
                    disabled={isPending}
                  >
                    {isPending ? "Saving..." : "+ Save"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBook;

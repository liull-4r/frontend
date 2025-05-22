import type { UseFormRegisterReturn } from "react-hook-form";

import type { FieldValues, UseFormWatch } from "react-hook-form";

interface CustomInputProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: string;
  type?: string;
  placeholder?: string;
  watch?: UseFormWatch<FieldValues>;
  maxLength?: number;
  max?: number;
  minLength?: number;
  min?: number;
}
interface CustomSelectProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: string;
  options: { value: string; lable: string }[];
}

export const CustomeInput: React.FC<CustomInputProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
  watch,
  max,
  min,
  maxLength,
  minLength,
}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-sm max-md:text-[0.8rem]"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register}
        value={watch ? watch(name) : undefined} // Use watch if provided
        className={`w-full mt-4 h-10 border-[0.3px] rounded-md text-black font-sans text-sm
                focus:outline focus:outline-primarybrandColor 
                px-3 ${error ? "border-red-600" : "border-gray-300"}`}
        placeholder={placeholder}
        maxLength={maxLength}
        max={max}
        minLength={minLength}
        min={min}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};


export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  register,
  error,
  options,
}) => {
  return (
    <div className="w-[100%]">
      <label className="font-[500] text-sm block max-md:text-[0.8rem]">
        {label}
      </label>

      <select
        {...register}
        className={`w-full h-[40px] px-3 border ${
          error ? "border-[#930a0a]" : "border-gray-300"
        } rounded-[8px] mt-4`}
        id={name}
      >
        <option value="">Select </option>
        {options.map((option, index) => (
          <option key={index} value={option?.value}>
            {option?.lable}
          </option>
        ))}
      </select>
      {error && <p className="text-[#930a0a]">{error}</p>}
    </div>
  );
};
  
/* eslint-disable tailwindcss/no-custom-classname */
export default function ButtonCustom({ className = "bg-primary ring-primary", title, type }: any) {
  return (
    <button
      type={type}
      className={`${className} inline-flex w-full justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white ring-2 hover:ring-offset-2`}
    >
      {title}
    </button>
  );
}

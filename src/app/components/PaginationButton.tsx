"use client";

type Props = {
  onClick: () => void;
};

export default function PaginationButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Cargar más
    </button>
  );
}

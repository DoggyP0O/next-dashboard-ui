'use client';
import { useRouter } from 'next/navigation';

const SemesterSelector = () => {
  const router = useRouter();

  const handleSelect = (value: number) => {
    router.push(`?id=${value}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {[...Array(8)].map((_, i) => {
        const value = i + 1;
        return (
          <button
            key={value}
            onClick={() => handleSelect(value)}
            className="border bg-white-500 text-black px-4 py-2 rounded hover:bg-blue-700"
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default SemesterSelector;

'use client';

import { removeDegreePlan } from "@/pages/api/remove-class"

const DeleteClassButton = ({ classId }: { classId: number }) => {
  return (
    <form action={async () => await removeDegreePlan(classId)}>
      <button
        type="submit"
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Remove
      </button>
    </form>
  );
};

export default DeleteClassButton;

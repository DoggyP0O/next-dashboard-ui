'use client';

import { updateDegreePlan } from "@/pages/api/fall4"

const UpdateClassButton = ({ classId }: { classId: number }) => {
  return (
    <form action={async () => await updateDegreePlan(classId)}>
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default UpdateClassButton;

// utils/updateClass.ts
export const updateClass = async (classId: number) => {
    const res = await fetch('/api/remove-class', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classId }),
    });
  
    if (!res.ok) {
      console.error('Failed to update');
    }
  };
  
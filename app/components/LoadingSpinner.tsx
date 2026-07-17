export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-200 border-t-red-600"></div>

      <p className="mt-4 text-sm text-gray-600">
        กำลังเปิดระบบตรวจสอบ...
      </p>
    </div>
  );
}
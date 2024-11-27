import Link from 'next/link';

export default function Applications() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <Link href="/my-profile">
          <button className="px-4 py-2 primary-color rounded-lg hover:bg-gray-200">
            ← Back
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-center mx-auto">My Applications</h1>
        <div className="invisible px-4 py-2">← Back</div>
      </div>
      <div className="text-gray-500">
        No applications yet
      </div>
    </div>
  );
}

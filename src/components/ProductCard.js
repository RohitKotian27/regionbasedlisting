export default function ProductCard({data}) {
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="w-full h-28" src={data.thumbnailUrl} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
      </div>
    </div>
  );
}

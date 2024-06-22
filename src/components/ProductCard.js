export default function ProductCard({data}) {
  
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
      <img class="w-full h-28 rounded" src={data.thumbnailUrl} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
          {data.title}
        </h5>
      </div>
    </div>
  );
}

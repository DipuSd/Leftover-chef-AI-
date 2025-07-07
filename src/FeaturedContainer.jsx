function FeaturedContainer({ featuredList }) {
  return (
    <div className="sticky-4">
      <h2 className="text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider">
        Popular This Week
      </h2>
      <ol className="space-y-3">
        {featuredList.map((item, index) => (
          <li
            key={index}
            className="group hover:shadow-md rounded-md cursor-pointer transition-shadow duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="p-2">
                <h3 className="text-sm font-medium text-gray-500 group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">
                    {item.likes.toLocaleString()} likes
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default FeaturedContainer;

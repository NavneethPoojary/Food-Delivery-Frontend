import Skeleton from "./Skeleton";
import Shimmer from "./Shimmer";

const SkeletonPizza = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <div>
          <Skeleton type="box" />
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonPizza;

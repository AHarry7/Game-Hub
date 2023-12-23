import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      width={{ lg: "220px", xl: "320px" }}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Skeleton height={{ lg: "190px", xl: "230px" }} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

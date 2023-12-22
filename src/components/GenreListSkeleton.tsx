import {
  Card,
  CardBody,
  HStack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card
      width={{ lg: "50px", xl: "160px" }}
      borderRadius={10}
      overflow={"hidden"}
      paddingX={2}
    >
      <HStack>
        <SkeletonCircle height={"30px"} />
        <CardBody>
          <SkeletonText noOfLines={1} />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;

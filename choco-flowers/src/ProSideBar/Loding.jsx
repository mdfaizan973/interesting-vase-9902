import React from "react";
import { Skeleton, Spinner, Stack, SkeletonCircle } from "@chakra-ui/react";
export default function Loding() {
  return (
    <div>
      <Stack>
        <Spinner
          thickness="4px"
          speed="1s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />

        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
      </Stack>
    </div>
  );
}

import React from "react";
import { Skeleton, Stack, SkeletonCircle } from "@chakra-ui/react";
export default function Loding() {
  return (
    <div>
      <Stack>
        <SkeletonCircle size="10" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </Stack>
    </div>
  );
}

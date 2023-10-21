"use client";
import { Container } from "semantic-ui-react";
import { DAT } from "@/src/utils";
import { Video } from "./Video";
import { Gallery } from "./Gallery/gallery";
import { Separator } from "../../Shared";

type MediaProps = {
  video: string;
  screenshots: DAT[];
};
export const Media = ({ video, screenshots }: MediaProps) => {
  return (
    <Container>
      <h2>visuales</h2>
      <Separator height={30} />
      <Video video={video} />
      <Separator height={30} />
      <Gallery screenshots={screenshots} />
    </Container>
  );
};

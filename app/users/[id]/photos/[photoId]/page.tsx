import React from "react";
interface props {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params: { id, photoId } }: props) => {
  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
};

export default PhotoPage;

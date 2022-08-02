import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import UploadForm from "../components/UploadForm";
import "./index.css";

const IndexPage = () => {
  const [selectedImg, setSelectedImg] = React.useState(null);

  return (
    <>
      <Helmet>
        <title>Art Gallery</title>
      </Helmet>

      <main>
        <Header />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </main>
    </>
  );
};

export default IndexPage;

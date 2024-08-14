const cloudinary = require("cloudinary").v2;

const deleteFile = (fileUrl) => {
  const imgSplited = fileUrl.split("/");

  const folderName = imgSplited.at(-2);
  const fieldName = imgSplited.at(-1).split(".");

  const public_id = `${folderName}/${fieldName[0]}`;

  cloudinary.uploader.destroy(public_id, () =>
    console.log("Archivo eliminado.")
  );
};

module.exports = { deleteFile };
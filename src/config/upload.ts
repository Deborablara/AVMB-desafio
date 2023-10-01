import multer from 'multer';

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;

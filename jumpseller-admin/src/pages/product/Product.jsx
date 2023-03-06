import { useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { updateProduct } from "../../Redux/apiCalls";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Product() {
  const history = useHistory();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find(
      (product) => product.id.toString() === productId
    )
  );
  const [inputs, setInputs] = useState({
    active: product.active,
    popular: product.popular,
  });
  const [image, setImage] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (image) {
      const fileName = new Date().getTime() + image.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = {
              product: { ...inputs, img: downloadURL },
              categories: { ids: cat },
              tags: { ids: [] },
              product_attributes: { ids: [] },
            };
            updateProduct(productId, product, dispatch).then(history.push('/products'));
          });
        }
      );
    } else {
      const product = {
        product: { ...inputs },
        categories: { ids: cat },
        tags: { ids: [] },
        product_attributes: { ids: [] },
      };
      updateProduct(productId, product, dispatch).then(history.push('/products'));
    }
  };

  return (
    <div className="product">
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product.sku}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">
                {product.active.toString()}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey"> stock:</span>
              <span className="productInfoValue">{product.stock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder={product.name}
              onChange={handleChange}
            />
            <label>SKU</label>
            <input
              name="sku"
              type="text"
              placeholder={product.sku}
              onChange={handleChange}
            />
            <label>Description</label>
            <input
              name="des"
              type="text"
              placeholder={product.des}
              onChange={handleChange}
            />
            <label>Short Description</label>
            <input
              name="short_desc"
              type="text"
              placeholder={product.short_desc}
              onChange={handleChange}
            />
            <label>Price (€)</label>
            <input
              name="price"
              type="text"
              placeholder={product.price}
              onChange={handleChange}
            />
            <label>Tax (%)</label>
            <input
              name="tax"
              type="number"
              placeholder={product.tax}
              onChange={handleChange}
            />
            <label>Flat Shipping (€)</label>
            <input
              name="ship_price"
              type="number"
              placeholder={product.ship_price}
              onChange={handleChange}
            />
            <label>Stock</label>
            <input
              name="stock"
              type="number"
              placeholder={product.stock}
              onChange={handleChange}
            />
            <label>Active</label>
            <select
              name="active"
              id="active"
              value={inputs.active}
              onChange={handleChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Front Page</label>
            <select
              name="popular"
              id="popular"
              value={inputs.popular}
              onChange={handleChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Categories</label>
            <input
              name="cats"
              onChange={handleCat}
              type="text"
              placeholder={product.categories.map((cat) => cat.id + ",")}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button onClick={handleClick} className="productButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get products_url, as: :json
    assert_response :success
  end

  test "should create product" do
    assert_difference("Product.count") do
      post products_url, params: { product: { active: @product.active, attribute_id: @product.attribute_id, category_id: @product.category_id, des: @product.des, img: @product.img, name: @product.name, price: @product.price, ship_price: @product.ship_price, short_desc: @product.short_desc, sku: @product.sku, stock: @product.stock, tag_id: @product.tag_id, tax: @product.tax } }, as: :json
    end

    assert_response :created
  end

  test "should show product" do
    get product_url(@product), as: :json
    assert_response :success
  end

  test "should update product" do
    patch product_url(@product), params: { product: { active: @product.active, attribute_id: @product.attribute_id, category_id: @product.category_id, des: @product.des, img: @product.img, name: @product.name, price: @product.price, ship_price: @product.ship_price, short_desc: @product.short_desc, sku: @product.sku, stock: @product.stock, tag_id: @product.tag_id, tax: @product.tax } }, as: :json
    assert_response :success
  end

  test "should destroy product" do
    assert_difference("Product.count", -1) do
      delete product_url(@product), as: :json
    end

    assert_response :no_content
  end
end

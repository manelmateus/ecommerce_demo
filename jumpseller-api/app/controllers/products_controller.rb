class ProductsController < ApplicationController
  before_action :set_product, only: %i[ show update destroy ]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET popular/products
  def popular_products
    @products = Product.where(popular: true, active: true).find_each

    render json: @products
  end

  # GET category/1/products
  def products_by_category
    @category = Category.find(params[:cat])
    @products = @category.products

    render json: @products
  end


  # GET /products/1
  def show
    render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)
    category_params[:ids].each do |c|
      @category = Category.find(c)
      @product.categories << @category
    end

    tag_params[:ids].each do |t|
      @tag = Tag.find(t)
      @product.tags << @tag
    end

    attribute_params[:ids].each do |a|
      @attribute = Attribute.find(a)
      @product.product_attributes << @attribute
    end

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:name, :short_desc, :des, :price, :ship_price, :stock, :tax, :sku, :active, :img, :popular)
    end

    def category_params
      params.require(:categories).permit(:ids => [])
    end

    def tag_params
      params.require(:tags).permit(:ids => [])
    end

    def attribute_params
      params.require(:product_attributes).permit(:ids => [])
    end
end

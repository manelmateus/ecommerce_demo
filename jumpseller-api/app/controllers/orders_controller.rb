class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy ]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      for a in 0..(order_items_params[:ids].length() - 1) do 
        @order_item = OrderItem.new(product_id:order_items_params[:ids][a],quantity:order_items_params[:quantity][a],order_id:@order.id)
        @order_item.save
      end
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  def totalRevenue
    @orders = Order.all
    @totalRevenue = 0.0

    @orders.each do |order|
      if order.status == "Complete"
        @totalRevenue = @totalRevenue + (order.total).to_f
      end
    end    

    render json: {totalRevenue: @totalRevenue}

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order).permit(:user_id, :total, :shipping, :status, :address)
    end

    def order_items_params
      params.require(:order_items).permit(:ids => [], :quantity =>[])
    end
end

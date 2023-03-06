class PaymentsController < ApplicationController
    
    require 'stripe'
    Stripe.api_key = 'sk_test_51LWi1GI0ENgazprn1JBh6B80MNmn63fjYqoxP54QTljhqjlBW9K7PQKDI1tr54TseIPBU4PBGqFV0jruItFZIFoa00oEQrqA1l'

# POST /payment
  def payment

    @charge = Stripe::Charge.create(
    {
      source: payment_params[:tokenId],
      amount: payment_params[:amount],
      currency: "eur",
    })

    render json: @charge
  end

  private
  # Use callbacks to share common setup or constraints between actions.
#   def set_category
#     @category = Category.find(params[:id])
#   end

  # Only allow a list of trusted parameters through.
  def payment_params
    params.require(:payment).permit(:tokenId, :amount)
  end

end

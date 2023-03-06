class Users::SessionsController < Devise::SessionsController
    respond_to :json  
    private  
    def respond_with(resource, _opts = {})
      render json: {token: current_token}, status: :ok
    end  
    def respond_to_on_destroy
      current_user ? log_out_success : log_out_failure
    end  
    def log_out_success
      render json: { message: "Logged out." }, status: :ok
    end  
    def log_out_failure
      render json: { message: "Logged out."}, status: :unauthorized
    end
    def current_token
      request.env['warden-jwt_auth.token']
    end
  end
  
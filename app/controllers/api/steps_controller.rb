class Api::StepsController < ApplicationController
    protect_from_forgery with: :null_session

    def create
        @step = Step.new(step_params)
        if @step.save
            render json: @step
        else
            render json: @step.errors.full_messages, status: 422
        end
    end

    def index
        render json: Step.all
    end

    def update
        @step = Step.find(params[:id])

        if @step.update(step_params)
            render json: @step
        else
            render json :@step.errors.full_messages, status: 422
        end
    end

    def destroy
        @step = Step.find(params[:id])

        if @step.destroy
            render json: {}, status: 200
        else
            render json: @step.errors.full_messages, status: 422
        end
    end

    def step_params
        params.require(:step).permit!
    end
end

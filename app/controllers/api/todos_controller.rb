class Api::TodosController < ApplicationController
    protect_from_forgery with: :null_session

    def show
        render json: Todo.find(params[:id])
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def index
        render json: Todo.all
    end

    def update
        @todo = Todo.find(params[:id])
        
        if @todo.update(todo_params)
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def destroy
        @todo = Todo.find(params[:id])

        if @todo.destroy
            render json: {}, status: 200
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def todo_params
        params.require(:todo).permit!
    end
end

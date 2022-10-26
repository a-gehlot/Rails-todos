class Api::TodosController < ApplicationController
    
    def show
        render json: Todo.find(params[:id]), include: :tags
    end

    def create
        @todo = current_user.todos.new(todo_params)
        if @todo.save
            render json: @todo, include: :tags
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def index
        render json: current_user.todos, include: :tags
    end
    
    def update
        @todo = current_user.todos.find(params[:id])
        
        if @todo.update(todo_params)
            render json: @todo, include: :tags
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def destroy
        @todo = current_user.todos.find(params[:id])

        if @todo.destroy
            render json: {}, status: 200
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def todo_params
        params.require(:todo).permit(:title, :body, :done, tag_names: [])
    end
end

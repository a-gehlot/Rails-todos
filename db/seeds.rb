# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.create([
    { title: 'First todo', body: 'My first todo', done: false},
    { title: 'Second todo', body: 'My second todo', done: false},
    { title: 'Third todo', body: 'My third todo', done: true},
])

Step.create([
    { title: 'First step', body: 'First step body', done: false, todo_id: 38 },
    { title: 'Second step', body: 'Second step body', done: true, todo_id: 38 },
    { title: 'Another first step', body: 'Another step body', done: false, todo_id: 39 },
])
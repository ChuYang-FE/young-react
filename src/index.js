import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import FilterableProductTable from './Components/GoodsSearching/FilterableProductTable';
import Game from './Components/TicTacToe';
import * as serviceWorker from './serviceWorker';
import Fetch from './Fetch/Fetch';
import NavAndShow from './Components/Nav/NavAndShow';
import FirstHook from "./Hook/FirstHook.jsx";
import RandomUser from "./Hook/UseStateAndUseEffect/RandomUser.jsx";
import TokenApp from "./Hook/UseStateAndUseEffect/Token.jsx";
import TodoList from "./Hook/ToDo/ToDoList";
import HookFetch from "./Hook/Fetch/Fetch";
import NextPage from "./Hook/Fetch/NextPage";
import UseCallBack from "./Hook/OtherHook/UseCallBack";


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
  {category: 'Electronics', price: '$299.99', stocked: true, name: 'Beats 11'}
];

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
    <App />
    <FilterableProductTable products={PRODUCTS} />
    <Game />
    <hr />
    <Fetch />
    <NavAndShow />
    <hr />
    <h2>hook</h2>
    <FirstHook />
    <hr />
    <RandomUser />
    <hr />
    <TokenApp />
    <h2>To Do List:</h2>
    <TodoList />
    <hr />
    <HookFetch />
    <hr />
    <h2>Fetching Next Page：</h2>
    <NextPage />
    <hr />
    <UseCallBack />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

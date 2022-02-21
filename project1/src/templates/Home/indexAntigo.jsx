// import "./styles.css";
// import { Component } from "react/cjs/react.production.min";

// import { loadPosts } from "../../utils/load-posts";
// import { Posts } from "../../components/Posts";
// import { Button } from "../../components/Button";
// import { TextInput } from "../../components/TextInput";

// export class Home extends Component {
//     // constructor(props){
//     //   super(props);
//     //   this.handlePClick = this.handlePClick.bind(this);
//     //   this.state = {
//     //     name: 'Rafael kenne',
//     //     counter : 0
//     //   };
//     // }

//     state = {
//         //counter: 0,
//         posts: [
//             // {
//             //   id: 1,
//             //   title: 'O titulo 1',
//             //   body: 'O corpo 1',
//             // },
//             // {
//             //   id: 2,
//             //   title: 'O titulo 2',
//             //   body: 'O corpo 2',
//             // },
//             // {
//             //   id: 3,
//             //   title: 'O titulo 3',
//             //   body: 'O corpo 3',
//             // },
//         ],
//         allPosts: [],
//         page: 0,
//         postPerPage: 10,
//         searchValue: "",
//     };

//     //timeoutUpdate = null;

//     async componentDidMount() {
//         //this.handleTimeout();
//         await this.loadPosts();
//     }

//     loadPosts = async () => {
//         const { page, postPerPage } = this.state;
//         const postAndPhotos = await loadPosts();
//         this.setState({
//             posts: postAndPhotos.slice(page, postPerPage),
//             allPosts: postAndPhotos,
//         });
//     };

//     loadMorePosts = () => {
//         const { page, postPerPage, allPosts, posts } = this.state;
//         const nextPage = page + postPerPage;
//         const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
//         posts.push(...nextPosts);

//         this.setState({ posts, page: nextPage });
//     };

//     componentDidUpdate() {
//         // this.handleTimeout();
//     }

//     componentWillUnmount() {
//         //clearTimeout(this.timeoutUpdate);
//     }

//     // handleTimeout = () =>{
//     //   const {posts, counter} = this.state;
//     //   posts[0].title = 'O título mudou';
//     //   this.timeoutUpdate = setTimeout(() => {
//     //     this.setState({posts, counter: counter + 1});
//     //   }, 1000)
//     // }

//     handleChange = (e) => {
//         const { value } = e.target;
//         this.setState({ searchValue: value });
//     };

//     render() {
//         const { posts, page, postPerPage, allPosts, searchValue } = this.state;
//         const noMorePosts = page + postPerPage >= allPosts.lenght;

//         const filteredPosts = searchValue
//             ? allPosts.filter((post) => {
//                 return post.title
//                     .toLowerCase()
//                     .includes(searchValue.toLowerCase());
//             })
//             : posts;

//         return (
//             <section className="container">
//                 <div className="search-container">
//                     {!!searchValue && <h1>Search value: {searchValue}</h1>}

//                     <TextInput
//                         searchValue={searchValue}
//                         handleChange={this.handleChange}
//                     />
//                 </div>

//                 {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

//                 {filteredPosts.length === 0 && <p>Não existem posts =(</p>}

//                 <div className="button-container">
//                     {!searchValue && (
//                         <Button
//                             text="Load More Posts"
//                             onClick={this.loadMorePosts}
//                             disabled={noMorePosts}
//                         />
//                     )}
//                 </div>
//             </section>
//         );
//     }
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

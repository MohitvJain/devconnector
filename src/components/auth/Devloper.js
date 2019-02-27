// import React, { Component } from "react";
// import bookData from "./peronal";
// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>title</th>
//         <th>subtitle</th>
//         <th>author</th>
//         <th>published</th>
//         <th>publisher</th>
//         <th>pages</th>
//         <th>description</th>
//       </tr>
//     </thead>
//   );
// };

// class Devlopers extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       booksData: []
//     };
//   }
//   componentDidMount() {
//     console.log(bookData);
//     this.setState({ booksData: bookData });
//   }
//   render() {
//     const books = (
//       <table>
//         <TableHeader />
//         <tbody>
//           {this.state.booksData.map(book => (
//             <tr key={book.isbn}>
//               <td>{book.title}</td>
//               <td>{book.subtitle}</td>
//               <td>{book.author}</td>
//               <td>{book.published}</td>
//               <td>{book.publisher}</td>
//               <td>{book.pages}</td>
//               <td>{book.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );

//     return (
//       <div className="profiles">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <h1 className="display-4 text-center">Developer Profiles</h1>
//               <p className="lead text-center">
//                 Browse and connect with developers
//               </p>
//               {books}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Devlopers;
